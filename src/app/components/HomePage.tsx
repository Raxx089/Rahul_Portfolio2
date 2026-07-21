import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, Quote, ExternalLink, Award, Brain, Users, BarChart3, Layers, Shield } from "lucide-react";
import { HeroSection } from "./HeroSection";
import { projects } from "../data/projects";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import type { Page } from "../App";

interface HomePageProps {
  navigate: (page: Page, projectId?: string) => void;
}

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
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

const featuredProjects = projects.slice(0, 3);

const companies = [
  { name: "Stripe", category: "FinTech" },
  { name: "ServiceNow", category: "Enterprise SaaS" },
  { name: "Salesforce", category: "CRM" },
  { name: "DataBricks", category: "Data & AI" },
  { name: "Atlassian", category: "Productivity" },
  { name: "Zurich Insurance", category: "InsurTech" },
];

const achievements = [
  { icon: <Award size={18} />, value: "Red Dot 2023", label: "UX Design Award" },
  { icon: <Users size={18} />, value: "5M+", label: "Users impacted" },
  { icon: <BarChart3 size={18} />, value: "$42M+", label: "Value created" },
  { icon: <Brain size={18} />, value: "8", label: "AI products shipped" },
];

const philosophyPoints = [
  {
    icon: <Brain size={20} />,
    title: "AI as Collaborator",
    desc: "I design AI to augment human judgment, not replace it. The best AI experiences make people feel smarter, not redundant.",
  },
  {
    icon: <Layers size={20} />,
    title: "Complexity is a Design Problem",
    desc: "Enterprise software doesn't have to be hard. Every interface that confuses users represents a design failure, not a user failure.",
  },
  {
    icon: <Users size={20} />,
    title: "Empathy at Enterprise Scale",
    desc: "Whether I'm designing for 100 adjusters or 2M merchants, each person behind the screen has real stakes. I never lose sight of that.",
  },
  {
    icon: <Shield size={20} />,
    title: "Trust Through Transparency",
    desc: "In AI systems especially, users need to understand why a recommendation is made. Explainability isn't a feature — it's a foundation.",
  },
];

export function HomePage({ navigate }: HomePageProps) {
  return (
    <div>
      <HeroSection navigate={navigate} />

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="flex items-end justify-between mb-12">
              <div>
                <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
                  Featured Work
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Enterprise products that move the needle
                </h2>
              </div>
              <button
                onClick={() => navigate("projects")}
                className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
              >
                All projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, i) => (
              <FadeIn key={project.id} delay={i * 0.1}>
                <button
                  onClick={() => navigate("project-detail", project.id)}
                  className="group w-full text-left rounded-2xl overflow-hidden border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] hover:border-violet-200 dark:hover:border-violet-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/5"
                >
                  {/* Image */}
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

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 dark:text-gray-500">{project.year} · {project.role}</span>
                      <ArrowRight size={14} className="text-gray-300 dark:text-gray-600 group-hover:text-violet-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {project.problem}
                    </p>
                    {/* Impact pill */}
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: project.color }}
                      />
                      <span className="text-[11px] font-medium text-gray-600 dark:text-gray-300">
                        {project.impact[0]}
                      </span>
                    </div>
                  </div>
                </button>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="mt-8 sm:hidden">
            <button
              onClick={() => navigate("projects")}
              className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              View all projects <ArrowRight size={14} />
            </button>
          </FadeIn>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-24 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-16">
              <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
                Philosophy
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                How I think about design
              </h2>
              <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
                Principles I return to every time I'm designing complex, intelligent systems.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {philosophyPoints.map((point, i) => (
              <FadeIn key={point.title} delay={i * 0.1}>
                <div className="p-6 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.02] hover:border-violet-100 dark:hover:border-violet-500/15 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400 mb-4 group-hover:bg-violet-100 dark:group-hover:bg-violet-500/20 transition-colors">
                    {point.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">{point.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{point.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-violet-600 via-purple-600 to-blue-700 dark:from-violet-700 dark:via-purple-700 dark:to-blue-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {achievements.map((a, i) => (
              <FadeIn key={a.value} delay={i * 0.1}>
                <div className="text-center">
                  <div className="inline-flex w-12 h-12 rounded-2xl bg-white/10 items-center justify-center text-white mb-4">
                    {a.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{a.value}</div>
                  <div className="text-sm text-violet-200">{a.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Companies */}
      <section className="py-20 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-center mb-12">
              <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                Experience
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                Companies & clients worked with
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {companies.map((company, i) => (
                <div
                  key={company.name}
                  className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.02] hover:border-violet-100 dark:hover:border-violet-500/15 transition-colors group"
                >
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors mb-1">
                    {company.name}
                  </div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500">{company.category}</div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote */}
      <section className="py-20 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <Quote size={32} className="text-violet-200 dark:text-violet-800 mx-auto mb-6" />
            <blockquote className="text-2xl font-medium text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic">
              "The best design is invisible — it gives people the outcome they need without making them feel the complexity that made it possible."
            </blockquote>
            <div className="text-sm text-gray-400 dark:text-gray-500">— Rahul Sharma</div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="rounded-3xl bg-gradient-to-br from-gray-950 to-gray-900 dark:from-[#0f0f2a] dark:to-[#0a0a1e] border border-white/10 p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_70%)]" />
              <div className="relative">
                <div className="text-xs font-semibold text-violet-400 uppercase tracking-widest mb-4">
                  Open to opportunities
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Let's build something that matters
                </h2>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  I'm looking for senior design roles at companies building AI-powered products that genuinely improve people's work lives.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <button
                    onClick={() => navigate("contact")}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
                  >
                    Get in Touch
                    <ArrowRight size={14} />
                  </button>
                  <button
                    onClick={() => navigate("projects")}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl border border-white/15 text-gray-300 font-medium hover:bg-white/5 transition-colors"
                  >
                    <ExternalLink size={14} />
                    View Work
                  </button>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
