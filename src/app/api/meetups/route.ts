
import { NextResponse } from 'next/server';
import meetupGroups from '@/data/meetup-groups.json';

export async function GET() {
  const GROUP_URLNAMES = meetupGroups;

  try {
    // Fetch all RSS feeds in parallel to get event URLs
    const feedPromises = GROUP_URLNAMES.map(async (groupName) => {
        const name = groupName.trim();
        if (!name) return [];
        
        const rssUrl = `https://www.meetup.com/${name}/events/rss/`;
        try {
            const res = await fetch(rssUrl);
            if (!res.ok) {
                console.error(`Failed to fetch RSS from ${rssUrl}: ${res.statusText}`);
                return [];
            }
            const xml = await res.text();
            
            // Parse XML to extract event links only
            const eventLinks: string[] = [];
            const itemRegex = /<item>([\s\S]*?)<\/item>/g;
            let match;
            while ((match = itemRegex.exec(xml)) !== null) {
                const itemContent = match[1];
                const linkMatch = itemContent.match(/<link[^>]*>(.*?)<\/link>/);
                if (linkMatch && linkMatch[1]) {
                    eventLinks.push(linkMatch[1].replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1').trim());
                }
            }
            return eventLinks;
        } catch (err) {
            console.error(`Error fetching group ${name}:`, err);
            return [];
        }
    });

    const results = await Promise.all(feedPromises);
    const allEventLinks = results.flat();

    console.log(`Found ${allEventLinks.length} event links from RSS feeds`);

    // Scrape each event page to get complete data
    const scrapedEvents = await Promise.all(allEventLinks.map(async (eventUrl) => {
        try {
            const res = await fetch(eventUrl);
            if (!res.ok) {
                console.error(`Failed to fetch event page: ${eventUrl}`);
                return null;
            }
            
            const html = await res.text();
            
            // Extract event title
            const titleMatch = html.match(/<meta[^>]+property="og:title"[^>]+content=["']([^"']+)["']/i);
            const title = titleMatch ? titleMatch[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'") : 'Untitled Event';
            
            // Extract event date/time from <time datetime="">
            const dateTimeMatch = html.match(/<time[^>]+datetime=["']([^"']+)["']/i);
            let eventDate = new Date();
            if (dateTimeMatch) {
                eventDate = new Date(dateTimeMatch[1]);
            }
            
            // Extract event image
            const ogImageMatch = html.match(/<meta[^>]+property="og:image"[^>]+content=["']([^"']+)["']/i);
            const photo_link = ogImageMatch ? ogImageMatch[1] : null;
            
            // Extract description
            const descMatch = html.match(/<meta[^>]+property="og:description"[^>]+content=["']([^"']+)["']/i);
            const description = descMatch ? descMatch[1].replace(/&amp;/g, '&').replace(/&#39;/g, "'") : '';
            
            // Extract event ID from URL
            const idMatch = eventUrl.match(/\/events\/(\d+)/);
            const id = idMatch ? idMatch[1] : eventUrl;
            
            return {
                id,
                name: title,
                link: eventUrl,
                eventDate,
                photo_link,
                description,
                html // Keep for further parsing if needed
            };
        } catch (err) {
            console.error(`Error scraping event ${eventUrl}:`, err);
            return null;
        }
    }));

    // Filter out nulls and past events
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const validEvents = scrapedEvents
        .filter((event): event is NonNullable<typeof event> => event !== null)
        .filter(event => event.eventDate >= now);

    console.log(`Found ${validEvents.length} upcoming events after filtering`);

    // Sort by date (nearest upcoming first)
    validEvents.sort((a, b) => a.eventDate.getTime() - b.eventDate.getTime());

    // Format the final output
    const formattedItems = validEvents.map((event) => {
        const local_date = event.eventDate.toISOString().split('T')[0];
        const local_time = event.eventDate.toLocaleTimeString('en-US', { 
            hour: 'numeric', 
            minute: '2-digit',
            hour12: true 
        });

        return {
            id: event.id,
            name: event.name,
            local_date,
            local_time,
            link: event.link,
            description: event.description,
            status: 'upcoming',
            featured_photo: event.photo_link ? { photo_link: event.photo_link } : undefined
        };
    });

    return NextResponse.json(formattedItems);

  } catch (error) {
    console.error('Event fetching error:', error);
    return NextResponse.json([]);
  }
}
