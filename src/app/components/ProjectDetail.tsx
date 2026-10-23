import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowLeft, ArrowRight, Clock, User, Calendar, ExternalLink, CheckCircle2 } from "lucide-react";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Page } from "../App";

interface ProjectDetailProps {
  projectId: string | null;
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

export function ProjectDetail({ projectId, navigate }: ProjectDetailProps) {
  const project = projects.find((p) => p.id === projectId) ?? projects[0];
  const currentIndex = projects.indexOf(project);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  const principles = project.principles?.length
    ? project.principles
    : [
        "Reduce cognitive load through progressive disclosure and clear hierarchy",
        "Follow Hick's Law and Fitts's Law to simplify choices and improve reachability",
        "Align the experience with familiar mental models and established patterns",
        "Support users with transparent feedback and calm, predictable interactions",
      ];

  const uiPrinciples = project.uiPrinciples?.length
    ? project.uiPrinciples
    : [
        "Create a strong visual hierarchy with clear emphasis and spacing",
        "Keep interactions consistent across components, states, and flows",
        "Make actionability obvious through thoughtful layout and affordances",
        "Use motion and feedback to guide attention without creating noise",
      ];

  const accessibilityGuidelines = project.accessibilityGuidelines?.length
    ? project.accessibilityGuidelines
    : [
        "Follow WCAG 2.1 AA standards for contrast, structure, and clarity",
        "Design for keyboard use with visible focus states and logical tab order",
        "Support screen readers through semantic labels, landmarks, and readable copy",
        "Ensure the interface remains usable across zoom, motion, and assistive conditions",
      ];

  const usabilityStudy = project.usabilityStudy?.length
    ? project.usabilityStudy
    : [
        "Validate flows with moderated usability sessions and task-based testing",
        "Measure clarity, confidence, and completion to uncover friction quickly",
        "Translate feedback into quicker iterations on layout, flow, and copy",
        "Close the loop with follow-up validation before launch and rollout",
      ];

  return (
    <div className="pt-20 min-h-screen bg-white dark:bg-[#07070e]">
      {/* Back */}
      <div className="px-6 pt-6 max-w-7xl mx-auto">
        <button
          onClick={() => navigate("projects")}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          All Projects
        </button>
      </div>

      {/* Hero */}
      <section className="px-6 pb-10">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span
                className="px-3 py-1 rounded-lg text-xs font-semibold text-white"
                style={{ backgroundColor: project.color }}
              >
                {project.industry}
              </span>
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 rounded-lg bg-gray-100 dark:bg-white/5 text-xs text-gray-600 dark:text-gray-400">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight max-w-3xl">
              {project.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap gap-6 mb-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <User size={13} className="text-violet-500" />
                {project.role}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Calendar size={13} className="text-violet-500" />
                {project.year}
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <Clock size={13} className="text-violet-500" />
                {project.duration}
              </div>
            </div>

            {/* Prototype CTA — shown only for projects with a prototype URL */}
            {project.prototypeUrl && (
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <motion.a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/25"
                >
                  <ExternalLink size={15} />
                  View Final Prototype
                  <span className="px-1.5 py-0.5 rounded-md bg-white/20 text-[10px] font-medium">Figma</span>
                </motion.a>
                <motion.a
                  href={project.applicationUrl ?? project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl border border-violet-200 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 text-sm font-semibold hover:bg-violet-50 dark:hover:bg-violet-500/10 transition-colors"
                >
                  <ExternalLink size={15} />
                  View Application
                </motion.a>
              </div>
            )}
          </FadeIn>

          {/* Hero Image */}
          <FadeIn delay={0.15}>
            <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/8">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-12 px-6 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-6">
              Impact
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {project.impact.map((imp, i) => (
                <div key={i} className="p-5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a]">
                  <div
                    className="text-xl font-bold mb-1"
                    style={{ color: project.color }}
                  >
                    {imp.split(" ")[0]}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                    {imp.split(" ").slice(1).join(" ")}
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 px-6 bg-white dark:bg-[#07070e]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              The Problem
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-5">
              Understanding the challenge
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {project.problem}
            </p>
            <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              {project.overview}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* UX Process */}
      <section className="py-16 px-6 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              UX Process
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              How we got there
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {project.process.map((phase, i) => (
              <FadeIn key={phase.phase} delay={i * 0.1}>
                <div className="p-5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-xs font-bold"
                      style={{ backgroundColor: project.color }}
                    >
                      {i + 1}
                    </div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{phase.phase}</div>
                  </div>
                  <ul className="space-y-2">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2">
                        <div
                          className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-xs text-gray-500 dark:text-gray-400">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Design Foundations */}
      <section className="py-16 px-6 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              Design Foundations
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Principles, accessibility, and validation
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {[
              { title: "UX Principles & Laws", items: principles },
              { title: "UI Principles", items: uiPrinciples },
              { title: "Accessibility Guidelines", items: accessibilityGuidelines },
              { title: "Usability Study", items: usabilityStudy },
            ].map((block, i) => (
              <FadeIn key={block.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-[#0f0f1a] h-full">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">{block.title}</h3>
                  <ul className="space-y-2.5">
                    {block.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        <span className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Research */}
      <section className="py-16 px-6 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              Research & Discovery
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              What we learned
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.research.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a]">
                  <div className="flex items-center gap-2 mb-3">
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.content}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-6 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              Solution
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              What we built
            </h2>
          </FadeIn>
          <div className="space-y-6">
            {project.solution.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a]">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Full UX Process Timeline — only for projects that have fullProcess data */}
      {project.fullProcess && project.fullProcess.length > 0 && (
        <section className="py-20 px-6 bg-white dark:bg-[#07070e]">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
                <div>
                  <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
                    End-to-End UX Process
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Complete design journey — from kickoff to impact
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 max-w-xl">
                    Every phase, deliverable, and decision that went into building this product — documented in full.
                  </p>
                </div>
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
                >
                  <ExternalLink size={14} />
                  View Final Prototype
                </a>
              </div>
            </FadeIn>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical connector line */}
              <div
                className="absolute left-[28px] top-8 bottom-8 w-px hidden md:block"
                style={{ background: `linear-gradient(to bottom, ${project.color}60, ${project.color}10)` }}
              />

              <div className="space-y-5">
                {project.fullProcess.map((phase, i) => (
                  <FadeIn key={phase.phase} delay={i * 0.04}>
                    <div className="md:grid md:grid-cols-[64px_1fr] gap-5">
                      {/* Phase number circle */}
                      <div className="hidden md:flex flex-col items-center">
                        <div
                          className="w-14 h-14 rounded-2xl flex flex-col items-center justify-center text-white shadow-lg z-10 relative flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        >
                          <span className="text-lg leading-none">{phase.icon}</span>
                          <span className="text-[9px] font-bold mt-0.5 opacity-80">{phase.week}</span>
                        </div>
                      </div>

                      {/* Phase card */}
                      <div className="rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-[#0f0f1a] hover:border-violet-100 dark:hover:border-violet-500/15 transition-colors overflow-hidden">
                        <div className="p-5 md:p-6">
                          {/* Mobile phase indicator */}
                          <div className="flex items-center gap-3 mb-4 md:hidden">
                            <div
                              className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-base"
                              style={{ backgroundColor: project.color }}
                            >
                              {phase.icon}
                            </div>
                            <div>
                              <div className="text-[10px] text-gray-400 dark:text-gray-500">{phase.week}</div>
                              <div className="text-xs font-semibold text-gray-900 dark:text-white">{phase.phase}</div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-5">
                            {/* Phase label */}
                            <div className="hidden md:block">
                              <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
                                {phase.phase}
                              </div>
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">
                                {phase.title}
                              </h3>
                            </div>
                            <div className="md:hidden">
                              <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3 leading-snug">
                                {phase.title}
                              </h3>
                            </div>

                            {/* Activities */}
                            <div>
                              <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                                Activities
                              </div>
                              <ul className="space-y-1.5">
                                {phase.activities.map((activity) => (
                                  <li key={activity} className="flex items-start gap-2">
                                    <CheckCircle2 size={12} className="flex-shrink-0 mt-0.5" style={{ color: project.color }} />
                                    <span className="text-xs text-gray-600 dark:text-gray-400">{activity}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Output */}
                            <div>
                              <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-2">
                                Deliverables
                              </div>
                              <div
                                className="p-3 rounded-xl text-xs leading-relaxed"
                                style={{
                                  backgroundColor: project.color + "10",
                                  borderColor: project.color + "25",
                                  border: "1px solid",
                                  color: "inherit",
                                }}
                              >
                                <span className="text-gray-600 dark:text-gray-300">{phase.output}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Prototype CTA at bottom of process */}
            <FadeIn>
              <div className="mt-12 rounded-2xl p-8 text-center border relative overflow-hidden"
                style={{ borderColor: project.color + "30", background: `linear-gradient(135deg, ${project.color}06, ${project.color}12)` }}
              >
                <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: project.color }}>
                  Ready to see the outcome?
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  View the final interactive prototype
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 max-w-md mx-auto">
                  The complete high-fidelity Figma prototype built across 14 months — 47 screens, all states, all AI interactions.
                </p>
                <a
                  href={project.prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
                >
                  <ExternalLink size={15} />
                  Open Final Prototype in Figma
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Final Impact */}
      <section className="py-16 px-6 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="rounded-3xl p-10 md:p-14 text-center relative overflow-hidden border border-gray-100 dark:border-white/[0.06]"
              style={{
                background: `linear-gradient(135deg, ${project.color}08, ${project.color}15)`,
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  background: `radial-gradient(ellipse at center, ${project.color}20, transparent 70%)`,
                }}
              />
              <div className="relative">
                <div className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: project.color }}>
                  Outcomes
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Final Impact</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {project.impact.map((imp, i) => (
                    <div key={i}>
                      <div className="text-2xl font-bold mb-1" style={{ color: project.color }}>
                        {imp.split(" ")[0]}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                        {imp.split(" ").slice(1).join(" ")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-12 px-6 border-t border-gray-100 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate("projects")}
                className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                <ArrowLeft size={14} />
                All Projects
              </button>
              <button
                onClick={() => navigate("project-detail", nextProject.id)}
                className="flex items-center gap-3 group"
              >
                <div className="text-right">
                  <div className="text-xs text-gray-400 dark:text-gray-500 mb-0.5">Next Project</div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-white/5 flex items-center justify-center group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10 transition-colors">
                  <ArrowRight size={16} className="text-gray-500 dark:text-gray-400 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors" />
                </div>
              </button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
