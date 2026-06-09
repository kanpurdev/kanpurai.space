import Link from "next/link";
import { MessageCircle, Twitter, Linkedin, Github, Instagram } from "lucide-react";
import AvatarCluster from "./AvatarCluster";

const Footer = () => {
  return (
    <footer className="bg-black pt-20 pb-10 border-t border-gray-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-24">
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-space-grotesk font-bold text-2xl text-white">
                Kanpur<span className="text-[#10b981]">AI</span>.Space
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The AI-powered hub for students and innovators. Discover, collaborate, and build the future — together.
            </p>
            <div className="flex gap-4 relative z-20">
              <a href="https://wa.me/+919452880889" className="text-gray-400 hover:text-white transition-colors"><MessageCircle className="w-5 h-5" /></a>
              <a href="https://x.com/kanpuraispace" className="text-gray-400 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://linkedin.com/company/kanpuraispace" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="https://instagram.com/kanpurai.space" className="text-gray-400 hover:text-white transition-colors"><Instagram className="w-5 h-5" /></a>
            </div>
            <div>
              <AvatarCluster className="justify-start ml-0" />
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="mailto:hello@kanpurai.space" className="hover:text-white transition-colors">hello@kanpurai.space</a></li>
              <li>+91 94528 80889</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Join the Community</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events & Workshops</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><Link href="/team" className="hover:text-white transition-colors">Our Team</Link></li>
              <li><Link href="/media-coverage" className="hover:text-white transition-colors">Media Coverage</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6">For Students</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="/projects" className="hover:text-white transition-colors">Explore Projects</Link></li>
              <li><Link href="/connect" className="hover:text-white transition-colors">Collab with us</Link></li>
              <li><Link href="/internships" className="hover:text-white transition-colors">AI Internship Program</Link></li>
              <li><Link href="/resources" className="hover:text-white transition-colors">Learning Resources</Link></li>
              <li><Link href="/feedback" className="hover:text-white transition-colors">Give Feedback</Link></li>
              <li><Link href="/bootcamp" className="hover:text-white transition-colors">Bootcamp</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-xs text-gray-500">
          <p>© 2025 KanpurAI.Space. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>

      {/* Large Background Text */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none leading-none">
        <h1 className="text-[15vw] font-bold text-white opacity-[0.03] text-center whitespace-nowrap translate-y-[30%]">
          KANPURAI
        </h1>
      </div>
    </footer>
  );
};

export default Footer;