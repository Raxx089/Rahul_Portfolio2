import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Download, Linkedin, ExternalLink, CheckCircle2, Award, BookOpen, Cpu, Layers, Users, Target, Zap, Palette } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import rahulPhoto from "../../imports/Pofile Image.png";

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

const timeline = [
  {
    year: "2021",
    role: "UX Lead & Product Designer",
    company: "Accenture | Gurugram",
    desc: "Led end-to-end UX for enterprise B2B SaaS across FinTech, E-commerce, and HealthTech. Designed AI-powered workflows and dashboards, managed design systems (30% faster launches), and embedded human-centered AI practices with WCAG accessibility standards.",
    tags: ["AI/ML", "Enterprise SaaS", "Human-Centered AI", "Design Systems", "HealthTech", "FinTech", "E-commerce", "PLM technology", "Accessibility", "Usability", "WCAG"],
  },
  {
    year: "2021",
    role: "Senior Product Designer",
    company: "Cavisson System",
    desc: "Dedesigned analytics dashboards for enterprise decision-makers, simplifying complex data visualization & Designed intelligent alerting systems and predictive insight interfaces to enhance data-driven decision making.",
    tags: ["Analytics", "Enterprise SaaS", "PLM"],
  },
  {
    year: "2019",
    role: "Senior UI/UX Designer",
    company: "Vaibav Global Limited",
    desc: "Led the design of e-commerce customer journeys, focusing on checkout experience optimization, Optimized mobile shopping flows through behavioral analysis and funnel visualization.",
    tags: ["E-commerce", "Web Design", "CRM", "Mobile UX", "Checkout Optimization web & app"],
  },
  {
    year: "2016",
    role: "UI/UX Designer",
    company: "Interglobe Technology Pvt Ltd",
    desc: "Designed logistics and travel management platforms using reusable design component systems.",
    tags: ["Travel & Hospitality", "Website Design", "Mobile UX", "Design Systems"],
  },
  {
    year: "2014",
    role: "Graphic & Web Designer",
    company: "Concentrix",
    desc: "Designed and developed responsive websites and digital assets to enhance brand visibility, created marketing creatives, social media campaigns, and email templates while maintaining strict visual consistency.",
    tags: ["Web Design", "Graphic Design", "Marketing"],
  },
  
];

const certifications = [
  { name: "Certified UX Professional (CXP)", org: "Nielsen Norman Group" },
  { name: "AI Product Design Certificate", org: "Reforge" },
  { name: "Design Leadership Program", org: "IDEO U" },
  { name: "Data Visualization Fundamentals", org: "Tableau" },
];

const awards = [
  { name: "Red Dot Design Award 2023", category: "Digital Interfaces" },
  { name: "UX Awards — Gold 2022", category: "Enterprise Software" },
  { name: "Fast Company Innovation by Design 2021", category: "Data Design" },
  { name: "Webby Award Nominee 2020", category: "Best Utility" },
];

const designPrinciples = [
  { icon: <Target size={16} />, title: "Clarity over cleverness", desc: "Simple, direct solutions beat technically impressive ones." },
  { icon: <Users size={16} />, title: "Research before aesthetics", desc: "Great design begins with deep user understanding, not visual ideas." },
  { icon: <Cpu size={16} />, title: "AI transparency", desc: "Every AI surface must be explainable and trustworthy." },
  { icon: <Layers size={16} />, title: "Systems thinking", desc: "Design at the component level but always think at the product level." },
  { icon: <Zap size={16} />, title: "Speed through simplicity", desc: "Fewer UI elements executed precisely beats more options done poorly." },
  { icon: <BookOpen size={16} />, title: "Documented decisions", desc: "Write down the why. Future-you and your teammates will thank you." },
];

export function AboutPage() {
  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#07070e]">
      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
                About
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                10 years designing{" "}
                <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                  intelligence
                </span>{" "}
                into enterprise products
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-6">
                I started as a UI designer who loved pixels. I evolved into a product designer who loves problems. Now I'm a design leader who believes AI is the most important design medium of our generation — and that getting human-AI interaction right is both the hardest and most consequential design challenge we face.
              </p>
              <p className="text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
                Over 10 years, I've shipped products used by millions of people across insurance, finance, e-commerce, and cloud infrastructure. I've learned that enterprise software doesn't have to be painful — complexity is a design problem, and every seemingly impossible UX challenge has a solution hiding inside it.
              </p>
              <div className="flex gap-3">
                <a
                  href="/rahul-sharma-resume.pdf"
                  download="Rahul-Sharma-Resume.pdf"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Download size={14} />
                  Download Resume
                </a>
                <a
                  href="https://www.linkedin.com/in/rahul-sharma-sr-ux-designer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a
                  href="https://www.behance.net/raxx08928b6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 text-sm font-medium hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <Palette size={14} />
                  Behance
                </a>
              </div>
            </FadeIn>

            {/* Photo / Visual */}
            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden border border-gray-100 dark:border-white/8">
                  <ImageWithFallback
                    src={rahulPhoto}
                    alt="Rahul Sharma — UX Lead & Product Designer"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 dark:bg-[#0f0f1a]/90 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">Rahul Sharma</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                        UX Lead & Product Designer · AI & SaaS
                      </div>
                      <div className="flex items-center gap-1.5 mt-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">Open to opportunities</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating skill chips */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-white dark:bg-[#141425] border border-gray-100 dark:border-white/10 rounded-xl px-3.5 py-2.5 shadow-lg"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">AI Product Design</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">10+ years</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white dark:bg-[#141425] border border-gray-100 dark:border-white/10 rounded-xl px-3.5 py-2.5 shadow-lg"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                >
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">5M+ Users</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5">Products shipped</div>
                </motion.div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Career Journey
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">
              From pixels to systems to AI
            </h2>
          </FadeIn>

          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/30 via-violet-500/20 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <FadeIn key={i} delay={i * 0.08}>
                  <div className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/20 relative z-10">
                      <span className="text-white text-[10px] font-bold">{item.year.slice(2)}</span>
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{item.role}</h3>
                        <span className="text-xs text-violet-600 dark:text-violet-400 font-medium">@ {item.company}</span>
                        <span className="text-xs text-gray-400 dark:text-gray-500 ml-auto">{item.year}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-3">{item.desc}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => (
                          <span key={tag} className="px-2 py-0.5 rounded-md bg-gray-100 dark:bg-white/5 text-[10px] text-gray-600 dark:text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-20 bg-white dark:bg-[#07070e]">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
              Design Principles
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-12">
              The rules I design by
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {designPrinciples.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="flex gap-4 p-5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-white/[0.02] hover:border-violet-100 dark:hover:border-violet-500/15 transition-colors">
                  <div className="w-8 h-8 flex-shrink-0 rounded-lg bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-violet-600 dark:text-violet-400">
                    {p.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">{p.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Certs */}
      <section className="py-20 bg-gray-50/50 dark:bg-[#090912]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Awards */}
            <FadeIn>
              <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
                Recognition
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Awards</h2>
              <div className="space-y-3">
                {awards.map((award) => (
                  <div key={award.name} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a]">
                    <Award size={16} className="text-violet-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{award.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{award.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Certifications */}
            <FadeIn delay={0.15}>
              <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-3">
                Learning
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h2>
              <div className="space-y-3">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a]">
                    <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-medium text-gray-900 dark:text-white">{cert.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{cert.org}</div>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
