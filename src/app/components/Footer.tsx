import { Linkedin, Mail, ExternalLink, ArrowUpRight } from "lucide-react";
import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Work", page: "projects" },
  { label: "About", page: "about" },
  { label: "Process", page: "process" },
  { label: "AI Lab", page: "ailab" },
  { label: "Contact", page: "contact" },
];

export function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-gray-100 dark:border-white/[0.06] bg-white/50 dark:bg-[#080810]/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                <span className="text-white text-xs font-bold">RS</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900 dark:text-white">Rahul Sharma</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">UX Lead & Product Designer</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
              Designing intelligent products that make complex systems feel simple. 10+ years in AI & enterprise SaaS.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              Navigation
            </div>
            <div className="space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  className="block text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
              Connect
            </div>
            <div className="space-y-2">
              <a
                href="mailto:rahul.sharma@design.com"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <Mail size={13} />
                rahul.sharma@design.com
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <Linkedin size={13} />
                LinkedIn
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                <ExternalLink size={13} />
                Behance
                <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 dark:border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400 dark:text-gray-500">
            © 2024 Rahul Sharma. Crafted with intention.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs text-gray-400 dark:text-gray-500">Available for new projects</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
