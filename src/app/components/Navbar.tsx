import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sun, Moon, Menu, X, Download } from "lucide-react";
import type { Page } from "../App";

interface NavbarProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navLinks: { label: string; page: Page }[] = [
  { label: "Work", page: "projects" },
  { label: "About", page: "about" },
  { label: "Process", page: "process" },
  { label: "AI Lab", page: "ailab" },
];

export function Navbar({ theme, toggleTheme, currentPage, navigate }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="relative mx-4 mt-4 rounded-2xl overflow-hidden">
          {/* Glass background */}
          <div className="absolute inset-0 bg-white/80 dark:bg-[#0a0a14]/85 backdrop-blur-2xl border border-black/[0.06] dark:border-white/[0.07]" />

          <div className="relative flex items-center justify-between px-5 py-3 max-w-7xl mx-auto">
            {/* Logo */}
            <button
              onClick={() => navigate("home")}
              className="flex items-center gap-2.5 group"
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-violet-500 via-purple-500 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/25">
                <span className="text-white text-xs font-bold tracking-tight">RS</span>
              </div>
              <div className="hidden sm:block">
                <div className="text-sm font-semibold text-gray-900 dark:text-white leading-tight">
                  Rahul Sharma
                </div>
                <div className="text-[10px] text-gray-500 dark:text-gray-400 leading-tight">
                  Senior & Lead UX / Product Designer
                </div>
              </div>
            </button>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => navigate(link.page)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-colors duration-200 ${
                    currentPage === link.page
                      ? "text-violet-600 dark:text-violet-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  }`}
                >
                  {currentPage === link.page && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-violet-50 dark:bg-violet-500/10 rounded-xl"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/8 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
              </button>
              <button
                onClick={() => navigate("contact")}
                className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
              >
                Hire Me
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400"
              >
                {menuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[76px] left-4 right-4 z-40 rounded-2xl bg-white dark:bg-[#0f0f1a] border border-gray-100 dark:border-white/8 shadow-2xl p-3"
          >
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => {
                  navigate(link.page);
                  setMenuOpen(false);
                }}
                className={`flex w-full items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  currentPage === link.page
                    ? "bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-100 dark:border-white/5 flex gap-2">
              <button
                onClick={() => { navigate("contact"); setMenuOpen(false); }}
                className="flex-1 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium"
              >
                Hire Me
              </button>
              <button
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300"
              >
                <Download size={13} />
                Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
