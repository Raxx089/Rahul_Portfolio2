import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Sparkles, ArrowUpRight, Cpu, BarChart3, Layers, Zap, Eye, GitBranch } from "lucide-react";

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

const experiments = [
  {
    id: 1,
    title: "Generative UI Components",
    category: "Generative UI",
    desc: "Exploring how AI can generate contextually appropriate UI components based on user data patterns — dynamic layouts that adapt in real-time.",
    icon: <Cpu size={18} />,
    tags: ["AI", "React", "Generative"],
    status: "Active",
    color: "#8b5cf6",
    metrics: "12 component variants tested",
  },
  {
    id: 2,
    title: "Adaptive Data Dashboards",
    category: "Data Visualization",
    desc: "Research into ML-driven dashboard layouts that reorganize themselves based on which metrics a user checks most frequently.",
    icon: <BarChart3 size={18} />,
    tags: ["ML", "Analytics", "Personalization"],
    status: "Prototype",
    color: "#3b82f6",
    metrics: "3 layout algorithms compared",
  },
  {
    id: 3,
    title: "Explainable AI Patterns",
    category: "AI Transparency",
    desc: "A pattern library for making AI decisions legible — confidence indicators, reasoning chains, and override affordances for enterprise contexts.",
    icon: <Eye size={18} />,
    tags: ["XAI", "Trust", "Enterprise"],
    status: "Published",
    color: "#10b981",
    metrics: "24 patterns documented",
  },
  {
    id: 4,
    title: "Design Token Automation",
    category: "Design Systems",
    desc: "Automating the sync between Figma tokens and production code. One source of truth for color, spacing, and typography across web and mobile.",
    icon: <Layers size={18} />,
    tags: ["Design Systems", "Automation", "Figma API"],
    status: "Active",
    color: "#f59e0b",
    metrics: "500+ tokens managed",
  },
  {
    id: 5,
    title: "Temporal Data Visualization",
    category: "Data Visualization",
    desc: "Novel approaches to showing how data changes over time in enterprise analytics — beyond line charts and bar charts.",
    icon: <GitBranch size={18} />,
    tags: ["Dataviz", "D3", "Time-series"],
    status: "Research",
    color: "#06b6d4",
    metrics: "8 chart types explored",
  },
  {
    id: 6,
    title: "Micro-Interaction Library",
    category: "Interaction Design",
    desc: "A curated collection of micro-interactions for enterprise products — animations that feel premium without compromising performance.",
    icon: <Zap size={18} />,
    tags: ["Animation", "Motion", "Enterprise"],
    status: "Published",
    color: "#ec4899",
    metrics: "40+ interactions",
  },
];

function AnimatedGlobe() {
  const orbitDots = [
    { color: "#8b5cf6", radius: 80, duration: 6, initialDeg: 0 },
    { color: "#3b82f6", radius: 80, duration: 6, initialDeg: 60 },
    { color: "#10b981", radius: 80, duration: 6, initialDeg: 120 },
    { color: "#f59e0b", radius: 110, duration: 9, initialDeg: 30 },
    { color: "#06b6d4", radius: 110, duration: 9, initialDeg: 150 },
    { color: "#ec4899", radius: 110, duration: 9, initialDeg: 270 },
  ];

  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      {/* Rings */}
      {[80, 110].map((r, idx) => (
        <motion.div
          key={idx}
          className="absolute rounded-full border border-violet-500/20 dark:border-violet-400/15"
          style={{ width: r * 2, height: r * 2 }}
          animate={{ rotate: idx % 2 === 0 ? 360 : -360 }}
          transition={{ duration: 12 + idx * 6, repeat: Infinity, ease: "linear" }}
        />
      ))}

      {/* Orbiting dots using rotation on a carrier div */}
      {orbitDots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ width: dot.radius * 2, height: dot.radius * 2 }}
          animate={{ rotate: [dot.initialDeg, dot.initialDeg + 360] }}
          transition={{ duration: dot.duration, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="absolute w-2.5 h-2.5 rounded-full shadow-sm"
            style={{ backgroundColor: dot.color, top: 0, left: "50%", transform: "translateX(-50%)" }}
          />
        </motion.div>
      ))}

      {/* Center node */}
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center z-10 shadow-xl shadow-violet-500/30">
        <Sparkles size={22} className="text-white" />
      </div>
    </div>
  );
}

function DataFlowChart() {
  const bars = [45, 72, 55, 88, 63, 91, 74, 82, 68, 95, 79, 87];
  return (
    <div className="w-full h-32 flex items-end gap-1.5 px-4">
      {bars.map((height, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{
            height: `${height}%`,
            minHeight: "8px",
            background: `linear-gradient(to top, #8b5cf6, #3b82f6)`,
            opacity: 0.5 + (i / bars.length) * 0.5,
            transformOrigin: "bottom",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ opacity: 1 }}
        />
      ))}
    </div>
  );
}

const statusColors: Record<string, string> = {
  Active: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20",
  Prototype: "bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-100 dark:border-blue-500/20",
  Published: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-400 border-violet-100 dark:border-violet-500/20",
  Research: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-100 dark:border-amber-500/20",
};

export function AILabPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#07070e]">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 mb-5">
                <Sparkles size={12} className="text-violet-500" />
                <span className="text-xs font-medium text-violet-700 dark:text-violet-400">Experiments & Explorations</span>
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-5 leading-tight">
                The{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                  AI Lab
                </span>
                <br />
                Where I explore
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed">
                Experiments at the intersection of AI, data visualization, and product design. Some become features. All teach me something.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-[#0f0f1a] p-6">
                <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                  Experiment Activity
                </div>
                <DataFlowChart />
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                  <div className="text-xs text-gray-400 dark:text-gray-500">Last 12 weeks</div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                    <span className="text-xs text-violet-600 dark:text-violet-400">6 active experiments</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Experiments Grid */}
      <section className="px-6 pb-20 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">
              Current Experiments
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {experiments.map((exp, i) => (
              <FadeIn key={exp.id} delay={i * 0.08}>
                <div className="group relative rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] p-6 hover:border-violet-100 dark:hover:border-violet-500/15 transition-all hover:shadow-lg hover:shadow-violet-500/5 cursor-pointer">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-white"
                      style={{ backgroundColor: exp.color }}
                    >
                      {exp.icon}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium border ${statusColors[exp.status]}`}>
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mb-1.5">{exp.category}</div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug">{exp.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{exp.desc}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[10px] text-gray-500 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-white/[0.06]">
                    <span className="text-[10px] text-gray-400 dark:text-gray-500">{exp.metrics}</span>
                    <ArrowUpRight size={13} className="text-gray-300 dark:text-gray-600 group-hover:text-violet-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Exploration Center */}
      <section className="py-20 px-6 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Design System Experiments
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Building blocks for AI products
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Color System */}
            <FadeIn>
              <div className="rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] p-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">AI Confidence Color System</h3>
                <div className="space-y-2.5">
                  {[
                    { label: "High confidence (>90%)", color: "#10b981", width: "90%" },
                    { label: "Medium confidence (60–90%)", color: "#f59e0b", width: "60%" },
                    { label: "Low confidence (<60%)", color: "#ef4444", width: "30%" },
                    { label: "AI reviewing...", color: "#8b5cf6", width: "50%", animated: true },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] text-gray-500 dark:text-gray-400">{item.label}</span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-white/5 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full"
                          style={{ backgroundColor: item.color, width: item.width }}
                          initial={{ width: 0 }}
                          animate={item.animated ? { width: ["30%", "70%", "30%"] } : { width: item.width }}
                          transition={
                            item.animated
                              ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
                              : { duration: 1, delay: 0.3 }
                          }
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Globe / Neural viz */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] p-6">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">AI Signal Network</h3>
                <p className="text-xs text-gray-400 dark:text-gray-500 mb-4">
                  Exploring orbital data visualization for showing AI model relationships
                </p>
                <AnimatedGlobe />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
