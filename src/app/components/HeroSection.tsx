import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import type { Page } from "../App";

interface HeroProps {
  navigate: (page: Page) => void;
}

function NeuralNetworkSVG() {
  const nodes = [
    { x: 80, y: 60 }, { x: 220, y: 30 }, { x: 370, y: 80 }, { x: 500, y: 50 },
    { x: 140, y: 170 }, { x: 290, y: 145 }, { x: 440, y: 190 }, { x: 560, y: 140 },
    { x: 60, y: 280 }, { x: 200, y: 260 }, { x: 340, y: 300 }, { x: 490, y: 265 }, { x: 590, y: 300 },
    { x: 120, y: 380 }, { x: 270, y: 370 }, { x: 420, y: 360 }, { x: 540, y: 390 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3],
    [0, 4], [1, 4], [1, 5], [2, 5], [2, 6], [3, 6], [3, 7],
    [4, 8], [4, 9], [5, 9], [5, 10], [6, 10], [6, 11], [7, 11], [7, 12],
    [8, 13], [9, 13], [9, 14], [10, 14], [10, 15], [11, 15], [11, 16], [12, 16],
  ];

  return (
    <svg viewBox="0 0 640 440" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
        </radialGradient>
        <filter id="blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
        </filter>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Connection lines */}
      {connections.map(([a, b], i) => (
        <motion.line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="url(#lineGrad)"
          strokeWidth="0.8"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: [0, 0.5, 0.2, 0.5], pathLength: 1 }}
          transition={{
            duration: 3 + (i % 4) * 0.5,
            delay: i * 0.08,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g key={i}>
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={i % 3 === 0 ? 5 : i % 3 === 1 ? 4 : 3}
            fill="#8b5cf6"
            opacity={0.15}
            animate={{ r: [3, 8, 3] }}
            transition={{ duration: 2 + (i % 3), delay: i * 0.15, repeat: Infinity }}
          />
          <motion.circle
            cx={node.x}
            cy={node.y}
            r={i % 3 === 0 ? 3.5 : i % 3 === 1 ? 2.5 : 2}
            fill={i % 4 === 0 ? "#8b5cf6" : i % 4 === 1 ? "#3b82f6" : i % 4 === 2 ? "#06b6d4" : "#a78bfa"}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0.6, 1, 0.6], scale: 1 }}
            transition={{
              opacity: { duration: 2, delay: i * 0.1, repeat: Infinity },
              scale: { duration: 0.5, delay: i * 0.05 },
            }}
          />
        </g>
      ))}

      {/* Traveling data particles */}
      {[0, 2, 5, 8].map((connIdx) => {
        const [a, b] = connections[connIdx];
        return (
          <motion.circle
            key={`particle-${connIdx}`}
            r={1.5}
            fill="#a78bfa"
            initial={{ cx: nodes[a].x, cy: nodes[a].y, opacity: 0 }}
            animate={{
              cx: [nodes[a].x, nodes[b].x],
              cy: [nodes[a].y, nodes[b].y],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              delay: connIdx * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}

const floatingCards = [
  {
    icon: <TrendingUp size={14} className="text-emerald-400" />,
    label: "Processing Time",
    value: "–70%",
    sub: "Claims platform",
    color: "emerald",
  },
  {
    icon: <Users size={14} className="text-blue-400" />,
    label: "Daily Active Users",
    value: "2.1M",
    sub: "Analytics redesign",
    color: "blue",
  },
  {
    icon: <Zap size={14} className="text-violet-400" />,
    label: "Decision Velocity",
    value: "3×",
    sub: "Decision intelligence",
    color: "violet",
  },
];

export function HeroSection({ navigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f8fc] via-white to-violet-50/40 dark:from-[#080810] dark:via-[#0a0a16] dark:to-[#0c0c1e]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(139,92,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.5) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/8 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/8 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-50 dark:bg-violet-500/10 border border-violet-100 dark:border-violet-500/20 mb-6"
            >
              <Sparkles size={12} className="text-violet-500" />
              <span className="text-xs font-medium text-violet-700 dark:text-violet-400">
                Senior & Lead UX / Product Designer · AI & Enterprise SaaS
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(2.4rem,4.5vw,4rem)] font-bold leading-[1.1] tracking-tight text-gray-950 dark:text-white mb-6"
            >
              Designing{" "}
              <span className="bg-gradient-to-r from-violet-600 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Intelligent
              </span>{" "}
              Products that Make Complex Systems{" "}
              <span className="italic text-gray-600 dark:text-gray-300">Feel Simple.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-lg"
            >
              10+ years designing AI-powered enterprise SaaS products that transform
              complex data systems into intuitive experiences — helping teams make
              better, faster decisions.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <button
                onClick={() => navigate("projects")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
              >
                View Work
                <ArrowRight size={14} />
              </button>
              <button
                onClick={() => navigate("about")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
              >
                About Me
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-8"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "40+", label: "Products Shipped" },
                { value: "4", label: "AI Platforms" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Main viz card */}
            <div className="relative rounded-2xl border border-white/20 dark:border-white/8 bg-white/40 dark:bg-white/[0.03] backdrop-blur-sm overflow-hidden p-6 shadow-2xl shadow-violet-500/5">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest">
                    AI Decision Network
                  </div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mt-0.5">
                    Real-time signal processing
                  </div>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-100 dark:border-emerald-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-medium text-emerald-700 dark:text-emerald-400">Live</span>
                </div>
              </div>

              <div className="h-52 sm:h-64">
                <NeuralNetworkSVG />
              </div>

              {/* Mini stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-white/5">
                {[
                  { label: "Nodes", value: "17" },
                  { label: "Connections", value: "24" },
                  { label: "Accuracy", value: "94%" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-sm font-bold text-gray-900 dark:text-white">{s.value}</div>
                    <div className="text-[10px] text-gray-400 dark:text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating impact cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  top: i === 0 ? "-16px" : i === 1 ? "50%" : "auto",
                  bottom: i === 2 ? "-16px" : "auto",
                  left: i === 1 ? "-20px" : "auto",
                  right: i === 0 ? "20px" : i === 2 ? "10px" : "auto",
                  translateY: i === 1 ? "-50%" : "0",
                }}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3 + i, delay: i * 0.8, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="bg-white dark:bg-[#141425] border border-gray-100 dark:border-white/10 rounded-xl px-3.5 py-2.5 shadow-lg shadow-black/5 dark:shadow-black/30 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-1">
                    {card.icon}
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">{card.label}</span>
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">{card.value}</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500">{card.sub}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">Scroll</span>
        <motion.div
          className="w-px h-8 bg-gradient-to-b from-gray-300 dark:from-gray-600 to-transparent"
          animate={{ scaleY: [1, 0.5, 1], opacity: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
}
