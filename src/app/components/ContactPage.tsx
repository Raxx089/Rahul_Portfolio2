import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, Linkedin, ExternalLink, Download, Send, CheckCircle2, ArrowUpRight, MapPin, Clock } from "lucide-react";

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

const interests = [
  "AI Product Design",
  "Enterprise SaaS",
  "Design Leadership",
  "Human-AI Interaction",
  "Design Systems",
  "Fintech Products",
];

export function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  return (
    <div className="pt-24 min-h-screen bg-white dark:bg-[#07070e]">
      {/* Header */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-widest mb-4">
              Get in touch
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-5">
              Let's build something{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent">
                remarkable
              </span>
            </h1>
            <p className="text-base text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
              I'm open to senior design roles, design leadership positions, and select consulting engagements at companies building AI-powered products that genuinely matter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Left — Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Status */}
              <FadeIn>
                <div className="p-5 rounded-2xl border border-emerald-100 dark:border-emerald-500/20 bg-emerald-50/50 dark:bg-emerald-500/5">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">Open to opportunities</span>
                  </div>
                  <p className="text-xs text-emerald-600 dark:text-emerald-500">
                    Currently exploring senior and principal designer roles. Interested in AI, enterprise SaaS, and fintech.
                  </p>
                </div>
              </FadeIn>

              {/* Location & Time */}
              <FadeIn delay={0.1}>
                <div className="p-5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-[#0f0f1a]">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin size={13} className="text-violet-500" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <Clock size={13} className="text-violet-500" />
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">PST (UTC–8)</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Typical response time: within 24 hours.
                  </p>
                </div>
              </FadeIn>

              {/* Links */}
              <FadeIn delay={0.15}>
                <div className="p-5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] space-y-3">
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">
                    Connect
                  </div>
                  {[
                    { icon: <Mail size={14} />, label: "Email", value: "rahul@design.co", href: "mailto:rahul@design.co" },
                    { icon: <Linkedin size={14} />, label: "LinkedIn", value: "linkedin.com/in/rahulsharma", href: "https://linkedin.com" },
                    { icon: <ExternalLink size={14} />, label: "Behance", value: "behance.net/rahulsharma", href: "https://behance.net" },
                  ].map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group hover:bg-gray-50 dark:hover:bg-white/5 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                    >
                      <div className="flex items-center gap-2.5">
                        <span className="text-violet-500">{link.icon}</span>
                        <div>
                          <div className="text-[10px] text-gray-400 dark:text-gray-500">{link.label}</div>
                          <div className="text-xs font-medium text-gray-700 dark:text-gray-300">{link.value}</div>
                        </div>
                      </div>
                      <ArrowUpRight size={12} className="text-gray-300 dark:text-gray-600 group-hover:text-violet-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </a>
                  ))}
                </div>
              </FadeIn>

              {/* Resume */}
              <FadeIn delay={0.2}>
                <a
                  href="/rahul-sharma-resume.pdf"
                  download="Rahul-Sharma-Resume.pdf"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors"
                >
                  <Download size={14} />
                  Download Resume (PDF)
                </a>
              </FadeIn>

              {/* Interests */}
              <FadeIn delay={0.25}>
                <div className="p-5 rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-gray-50/50 dark:bg-[#0f0f1a]">
                  <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-3">
                    Interested in
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {interests.map((interest) => (
                      <span key={interest} className="px-2.5 py-1 rounded-lg bg-violet-50 dark:bg-violet-500/10 text-[10px] font-medium text-violet-700 dark:text-violet-400">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right — Form */}
            <div className="lg:col-span-3">
              <FadeIn delay={0.1}>
                <div className="rounded-2xl border border-gray-100 dark:border-white/[0.06] bg-white dark:bg-[#0f0f1a] p-8">
                  {sent ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center mb-4">
                        <CheckCircle2 size={28} className="text-emerald-500" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Message sent!</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
                        Thanks for reaching out. I'll get back to you within 24 hours.
                      </p>
                      <button
                        onClick={() => setSent(false)}
                        className="text-sm text-violet-600 dark:text-violet-400 hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1.5">
                          Send a message
                        </div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Tell me about your company, role, and what you're building.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Name</label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Your name"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-300 dark:focus:border-violet-500/50 transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Email</label>
                          <input
                            type="email"
                            required
                            value={form.email}
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder="your@email.com"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-300 dark:focus:border-violet-500/50 transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Company</label>
                        <input
                          type="text"
                          value={form.company}
                          onChange={(e) => setForm({ ...form, company: e.target.value })}
                          placeholder="Company name (optional)"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-300 dark:focus:border-violet-500/50 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1.5">Message</label>
                        <textarea
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="Tell me about the role, your product, and what problem you're solving..."
                          className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-violet-300 dark:focus:border-violet-500/50 transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-violet-500/20"
                      >
                        <Send size={14} />
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
