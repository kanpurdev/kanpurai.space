export interface BlogPost {
  id: string; // Hashnode IDs are strings
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  img: string;
}

const HASHNODE_GQL_ENDPOINT = "https://gql.hashnode.com";
const HASHNODE_HOST = process.env.NEXT_PUBLIC_HASHNODE_HOST || "engineering.hashnode.dev";

// Query to get all posts
const ALL_POSTS_QUERY = `
  query GetPosts($host: String!) {
    publication(host: $host) {
      posts(first: 20) {
        edges {
          node {
            id
            slug
            title
            brief
            coverImage {
              url
            }
            publishedAt
            author {
              name
            }
            tags {
              name
            }
          }
        }
      }
    }
  }
`;

// Query to get a single post by slug
const SINGLE_POST_QUERY = `
  query GetPost($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        slug
        title
        brief
        content {
          html
        }
        coverImage {
          url
        }
        publishedAt
        author {
          name
        }
        tags {
          name
        }
      }
    }
  }
`;

async function fetchGraphQL(query: string, variables: any) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(HASHNODE_GQL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 3600 }, // ISR: Revalidate every hour
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.error(`Hashnode Fetch failed with status: ${response.status}`);
      return null;
    }

    // यहाँ हमने टेक्स्ट चेक किया ताकि अगर HTML पेज आए तो कोड क्रैश न हो
    const textData = await response.text();
    if (textData.trim().startsWith("<!DOCTYPE")) {
      console.error("Received HTML instead of JSON from Hashnode GQL Endpoint.");
      return null;
    }

    const json = JSON.parse(textData);
    if (json.errors) {
      console.error("Hashnode GraphQL Errors:", json.errors);
      return null;
    }

    return json.data;
  } catch (error: any) {
    clearTimeout(timeoutId);
    if (error.name === 'AbortError') {
      console.error("Hashnode Fetch timed out after 10 seconds");
    } else {
      console.error("Hashnode Fetch error:", error.message);
    }
    return null;
  }
}

function mapHashnodePostToBlogPost(node: any): BlogPost {
  const date = new Date(node.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const category = node.tags && node.tags.length > 0 ? node.tags[0].name : "General";

  return {
    id: node.id,
    slug: node.slug,
    title: node.title,
    excerpt: node.brief,
    content: node.content ? node.content.html : "",
    author: node.author.name,
    date: date,
    category: category,
    img: node.coverImage ? node.coverImage.url : "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
  };
}

export async function getAllPosts(): Promise<BlogPost[]> {
  let hashnodePosts: BlogPost[] = [];

  const techetarianPosts: BlogPost[] = [
    {
      id: "tech-1",
      slug: "google-allo-ai-messaging",
      title: "Google Allo | AI Messaging on the GO!",
      excerpt: "Discover Google Allo, the AI-powered messaging app that brings smart features and Google Assistant integration to your conversations.",
      content: "",
      author: "Techetarian",
      date: "Sep 21, 2016",
      category: "AI & Technology",
      img: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-2",
      slug: "android-oreo-whats-new",
      title: "Android 8.0 Oreo | What's New?",
      excerpt: "Explore the new features and improvements in Android 8.0 Oreo, including picture-in-picture mode, notification dots, and performance enhancements.",
      content: "",
      author: "Techetarian",
      date: "Aug 21, 2017",
      category: "Mobile",
      img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-3",
      slug: "li-fi-100x-faster-than-wifi",
      title: "Li-Fi, 100X Faster Than Wi-Fi",
      excerpt: "Learn about Li-Fi technology that uses light to transmit data at speeds 100 times faster than traditional Wi-Fi.",
      content: "",
      author: "Techetarian",
      date: "Nov 24, 2015",
      category: "Networking",
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-4",
      slug: "how-to-choose-perfect-powerbank",
      title: "How To Choose the Perfect Powerbank?",
      excerpt: "A comprehensive guide to selecting the right powerbank for your devices, covering capacity, output, and portability factors.",
      content: "",
      author: "Techetarian",
      date: "Mar 15, 2016",
      category: "Hardware",
      img: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-5",
      slug: "persistent-bootable-kali-linux-usb",
      title: "How to Create a Persistent Bootable Kali Linux USB",
      excerpt: "Step-by-step guide to creating a persistent Kali Linux USB drive that saves your changes and configurations.",
      content: "",
      author: "Techetarian",
      date: "Jul 10, 2016",
      category: "Linux",
      img: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-6",
      slug: "youtube-hidden-dark-mode",
      title: "How to activate YouTube's hidden Dark Mode",
      excerpt: "Discover how to enable YouTube's dark mode for a more comfortable viewing experience, especially in low-light environments.",
      content: "",
      author: "Techetarian",
      date: "May 5, 2017",
      category: "Tutorials",
      img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-7",
      slug: "windows-speech-recognition-macros",
      title: "Windows Speech Recognition Macros | Make your Windows PC Recognize your voice",
      excerpt: "Transform your Windows PC into a voice-controlled assistant using Windows Speech Recognition Macros, similar to Jarvis.",
      content: "",
      author: "Techetarian",
      date: "Dec 18, 2015",
      category: "Windows",
      img: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&q=80&w=800"
    },
    {
      id: "tech-8",
      slug: "android-nougat-whats-new",
      title: "Android Nougat (7.0) | What's new?",
      excerpt: "Explore the exciting new features in Android 7.0 Nougat, including split-screen multitasking, improved notifications, and better battery life.",
      content: "",
      author: "Techetarian",
      date: "Aug 22, 2016",
      category: "Mobile",
      img: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800"
    }
  ];

  try {
    const data = await fetchGraphQL(ALL_POSTS_QUERY, { host: HASHNODE_HOST });
    if (data && data.publication && data.publication.posts) {
      const edges = data.publication.posts.edges || [];
      hashnodePosts = edges.map((edge: any) => mapHashnodePostToBlogPost(edge.node));
    }
  } catch (err) {
    console.error("Fallback to static data due to fetch error.");
  }

  return [...hashnodePosts, ...techetarianPosts];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | undefined> {
  const data = await fetchGraphQL(SINGLE_POST_QUERY, { host: HASHNODE_HOST, slug });

  if (!data || !data.publication || !data.publication.post) {
    return undefined;
  }

  const postNode = data.publication.post;
  return mapHashnodePostToBlogPost(postNode);
}






















