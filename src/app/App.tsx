import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ProjectDetail } from "./components/ProjectDetail";
import { ProcessPage } from "./components/ProcessPage";
import { AILabPage } from "./components/AILabPage";
import { ContactPage } from "./components/ContactPage";

export type Page =
  | "home"
  | "about"
  | "projects"
  | "project-detail"
  | "process"
  | "ailab"
  | "contact";

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const navigate = (page: Page, projectId?: string) => {
    if (projectId) setSelectedProject(projectId);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  const pageKey = currentPage + (selectedProject ?? "");

  return (
    <div className="min-h-screen bg-white dark:bg-[#07070e] text-gray-900 dark:text-gray-100 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        currentPage={currentPage}
        navigate={navigate}
      />

      <AnimatePresence mode="wait">
        <motion.main
          key={pageKey}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {currentPage === "home" && <HomePage navigate={navigate} />}
          {currentPage === "about" && <AboutPage />}
          {currentPage === "projects" && <ProjectsPage navigate={navigate} />}
          {currentPage === "project-detail" && (
            <ProjectDetail projectId={selectedProject} navigate={navigate} />
          )}
          {currentPage === "process" && <ProcessPage />}
          {currentPage === "ailab" && <AILabPage />}
          {currentPage === "contact" && <ContactPage />}
        </motion.main>
      </AnimatePresence>

      <Footer navigate={navigate} />
    </div>
  );
}
