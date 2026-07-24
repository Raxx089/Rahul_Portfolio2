import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Filter } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Page } from "../App";

interface ProjectsPageProps {
  navigate: (page: Page, projectId?: string) => void;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const allTags = ["All", "AI/ML", "Enterprise SaaS", "FinTech", "InsurTech", "Analytics", "Data Visualization"];

export function ProjectsPage({ navigate }: ProjectsPageProps) {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.tags.some((t) => t === activeFilter) || p.industry.includes(activeFilter));

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#07070e]">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              Case Studies
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-5">
              Work that{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                moves metrics
              </span>
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              Four in-depth case studies across AI, enterprise SaaS, fintech, and insurance — each focused on measurable outcomes and real human impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2.5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/70 dark:bg-white/[0.03] px-3 py-3 sm:px-4">
              <div className="flex items-center gap-2 pr-1">
                <Filter size={13} className="text-gray-400 dark:text-gray-500" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500">
                  Filter
                </span>
              </div>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveFilter(tag)}
                  className={`inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    activeFilter === tag
                      ? "bg-violet-600 text-white shadow-sm shadow-violet-500/20"
                      : "bg-white dark:bg-[#0f0f1a] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {/* Large featured first project */}
          {filtered.length > 0 && (
            <FadeIn className="mb-6">
              <button
                onClick={() => navigate("project-detail", filtered[0].id)}
                className="group w-full text-left rounded-2xl overflow-hidden border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] hover:border-violet-200 dark:hover:border-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/5"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="aspect-video lg:aspect-auto lg:min-h-72 overflow-hidden relative">
                    <ImageWithFallback
                      src={filtered[0].image}
                      alt={filtered[0].title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white"
                        style={{ backgroundColor: filtered[0].color }}
                      >
                        {filtered[0].industry}
                      </span>
                      <span className="text-xs text-gray-400 dark:text-gray-500">{filtered[0].year}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                      {filtered[0].title}
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                      {filtered[0].problem}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {filtered[0].impact.slice(0, 4).map((imp) => (
                        <div key={imp} className="flex items-start gap-2">
                          <div
                            className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: filtered[0].color }}
                          />
                          <span className="text-xs text-gray-600 dark:text-gray-300">{imp}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-violet-600 dark:text-violet-400 group-hover:gap-3 transition-all">
                      View case study
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </button>
            </FadeIn>
          )}

          {/* Remaining projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(1).map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.1}>
                <button
                  onClick={() => navigate("project-detail", project.id)}
                  className="group w-full text-left rounded-2xl overflow-hidden border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] hover:border-violet-200 dark:hover:border-violet-500/20 transition-all hover:shadow-xl hover:shadow-violet-500/5"
                >
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span
                        className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-white"
                        style={{ backgroundColor: project.color + "cc" }}
                      >
                        {project.industry}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 dark:text-gray-500">{project.year} · {project.role}</span>
                      <ArrowRight size={13} className="text-gray-300 dark:text-gray-600 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {project.problem}
                    </p>
                    <div className="grid grid-cols-1 gap-1">
                      {project.impact.slice(0, 2).map((imp) => (
                        <div key={imp} className="flex items-center gap-1.5">
                          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: project.color }} />
                          <span className="text-[10px] text-gray-500 dark:text-gray-400">{imp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-gray-400 dark:text-gray-500">No projects match this filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
