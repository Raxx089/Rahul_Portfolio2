import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, Map, Lightbulb, PenTool, Cpu, TestTube, ArrowRight } from "lucide-react";

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

const phases = [
  {
    number: "01",
    icon: <Search size={20} />,
    phase: "Discovery",
    tagline: "Understand before designing",
    desc: "I immerse in the problem space — stakeholder interviews, contextual inquiry, competitive analysis. The goal is to see the system the user lives in, not just the screen they'll use.",
    activities: ["Stakeholder interviews", "Contextual user research", "Competitive landscape mapping", "Analytics audit", "Heuristic evaluation"],
    color: "#8b5cf6",
    artifact: "Research synthesis deck · Journey maps · Insight report",
  },
  {
    number: "02",
    icon: <Map size={20} />,
    phase: "Strategy & Define",
    tagline: "Frame the right problem",
    desc: "Insights get translated into a clear problem statement, design principles, and success metrics. This is where product strategy and UX meet — ensuring we build the right thing.",
    activities: ["Problem framing", "User persona synthesis", "Jobs-to-be-done mapping", "Success metrics definition", "Design principles"],
    color: "#3b82f6",
    artifact: "Design brief · Success metrics · How Might We statements",
  },
  {
    number: "03",
    icon: <Lightbulb size={20} />,
    phase: "Concept & Ideation",
    tagline: "Explore broadly, decide boldly",
    desc: "I explore 3–5 fundamentally different approaches before committing. Structured ideation sessions, analogous domain analysis, and rapid sketching surface unexpected solutions.",
    activities: ["Concept sketching", "Design studio workshops", "Information architecture", "Flow diagramming", "Analogous design research"],
    color: "#f59e0b",
    artifact: "Concept sketches · Architecture diagrams · Decision log",
  },
  {
    number: "04",
    icon: <PenTool size={20} />,
    phase: "Design & Prototype",
    tagline: "Make ideas tangible",
    desc: "From wireframes to high-fidelity interactive prototypes, built in Figma with shared component libraries. I design at the interaction level — every state, every edge case.",
    activities: ["Wireframing", "Design system component creation", "High-fidelity UI design", "Micro-interaction design", "Prototype creation"],
    color: "#10b981",
    artifact: "Figma prototype · Design system · Interaction spec",
  },
  {
    number: "05",
    icon: <Cpu size={20} />,
    phase: "AI Integration Design",
    tagline: "Design the human-AI interface",
    desc: "For AI products, I design the trust layer — how AI recommendations are surfaced, explained, and accepted or overridden. I collaborate closely with ML engineers on capability-driven UX.",
    activities: ["AI transparency patterns", "Confidence score UI", "Error state design", "Explainability UX", "Trust-building flows"],
    color: "#8b5cf6",
    artifact: "AI UX pattern library · Explainability framework",
  },
  {
    number: "06",
    icon: <TestTube size={20} />,
    phase: "Test & Validate",
    tagline: "Design earns its stripes in testing",
    desc: "Moderated usability testing, A/B testing, and post-launch analytics close the loop. Every metric movement — good or bad — is an input to the next iteration.",
    activities: ["Moderated usability testing", "A/B and multivariate testing", "Accessibility audit (WCAG 2.1)", "Post-launch analytics review", "Continuous iteration"],
    color: "#06b6d4",
    artifact: "Research report · Testing insights · Iteration roadmap",
  },
];

function AIHumanDiagram() {
  return (
    <div className="relative rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] p-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04),transparent_70%)]" />

      <div className="relative">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
          Human ↔ AI Interaction Model
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mb-8">
          How I design the collaboration layer between humans and AI systems
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Human node */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="w-16 h-16 rounded-2xl bg-violet-50 dark:bg-violet-500/10 border-2 border-violet-200 dark:border-violet-500/30 flex items-center justify-center">
              <span className="text-2xl">👤</span>
            </div>
            <div className="text-xs font-semibold text-gray-900 dark:text-white">Human Expert</div>
            <div className="space-y-1.5 w-full max-w-[140px]">
              {["Domain expertise", "Ethical judgment", "Context & nuance", "Final decisions"].map((item) => (
                <div key={item} className="px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-500/10 text-[10px] text-violet-700 dark:text-violet-400 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Connection */}
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-violet-400 to-blue-400" />
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">UX</span>
              </div>
              <div className="w-8 h-px bg-gradient-to-l from-blue-400 to-violet-400" />
            </div>
            <div className="text-[10px] text-gray-400 dark:text-gray-500 text-center">Design the<br />trust layer</div>
          </div>

          {/* AI node */}
          <div className="flex flex-col items-center gap-3 flex-1">
            <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-500/10 border-2 border-blue-200 dark:border-blue-500/30 flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
            <div className="text-xs font-semibold text-gray-900 dark:text-white">AI System</div>
            <div className="space-y-1.5 w-full max-w-[140px]">
              {["Pattern recognition", "Data processing", "Recommendations", "Confidence scoring"].map((item) => (
                <div key={item} className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-[10px] text-blue-700 dark:text-blue-400 text-center">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Output */}
        <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-violet-50 to-blue-50 dark:from-violet-500/5 dark:to-blue-500/5 border border-violet-100 dark:border-violet-500/15 text-center">
          <div className="text-xs font-semibold text-gray-700 dark:text-gray-200 mb-1">Outcome</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">Better decisions, faster — with humans still in control</div>
        </div>
      </div>
    </div>
  );
}

export function ProcessPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#07070e]">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              UX Methodology
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-5">
              How great products are{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                actually built
              </span>
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              My design process is structured enough to be repeatable, flexible enough to adapt to any problem. It's grounded in research, driven by user outcomes, and measured by business impact.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-5">
            {phases.map((phase, i) => (
              <FadeIn key={phase.number} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] hover:border-violet-100 dark:hover:border-violet-500/15 transition-colors overflow-hidden">
                  <div className="p-6 md:p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      {/* Phase info */}
                      <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                            style={{ backgroundColor: phase.color }}
                          >
                            {phase.icon}
                          </div>
                          <div>
                            <div className="text-[10px] text-gray-400 dark:text-gray-500">{phase.number}</div>
                            <div className="text-sm font-bold text-gray-900 dark:text-white">{phase.phase}</div>
                          </div>
                        </div>
                        <div className="text-xs font-medium italic text-gray-500 dark:text-gray-400 mb-2">
                          "{phase.tagline}"
                        </div>
                      </div>

                      {/* Description */}
                      <div className="lg:col-span-1">
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                          {phase.desc}
                        </p>
                        <div className="text-[10px] text-gray-400 dark:text-gray-500">
                          <span className="font-semibold text-gray-500 dark:text-gray-400">Artifacts: </span>
                          {phase.artifact}
                        </div>
                      </div>

                      {/* Activities */}
                      <div>
                        <div className="text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                          Activities
                        </div>
                        <ul className="space-y-2">
                          {phase.activities.map((activity) => (
                            <li key={activity} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: phase.color }} />
                              <span className="text-xs text-gray-600 dark:text-gray-400">{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Phase connector */}
                  {i < phases.length - 1 && (
                    <div className="flex justify-center py-2 border-t border-gray-50 dark:border-white/[0.03]">
                      <ArrowRight size={14} className="text-gray-300 dark:text-gray-600 rotate-90" />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* AI-Human Interaction Model */}
      <section className="py-20 px-6 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              AI Design Framework
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Designing human-AI collaboration
            </h2>
            <AIHumanDiagram />
          </FadeIn>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-6 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Toolkit
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Tools I work with
            </h2>
          </FadeIn>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { name: "Figma", cat: "Design" },
              { name: "Protopie", cat: "Prototyping" },
              { name: "Maze", cat: "User Testing" },
              { name: "Hotjar", cat: "Analytics" },
              { name: "Amplitude", cat: "Analytics" },
              { name: "Miro", cat: "Collaboration" },
              { name: "Notion", cat: "Documentation" },
              { name: "Linear", cat: "Project Mgmt" },
              { name: "Principle", cat: "Animation" },
              { name: "Dovetail", cat: "Research" },
              { name: "Looker", cat: "Data" },
              { name: "Storybook", cat: "Design Systems" },
            ].map((tool) => (
              <FadeIn key={tool.name}>
                <div className="p-4 rounded-xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.02] text-center hover:border-violet-100 dark:hover:border-violet-500/15 transition-colors">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">{tool.name}</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">{tool.cat}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
