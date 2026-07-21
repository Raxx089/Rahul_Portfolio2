export interface ProcessPhase {
  week: string;
  phase: string;
  title: string;
  icon: string;
  activities: string[];
  output: string;
}

export interface Project {
  id: string;
  title: string;
  industry: string;
  problem: string;
  impact: string[];
  tags: string[];
  image: string;
  color: string;
  year: string;
  role: string;
  duration: string;
  overview: string;
  research: { title: string; content: string }[];
  solution: { title: string; content: string }[];
  process: { phase: string; activities: string[] }[];
  prototypeUrl?: string;
  fullProcess?: ProcessPhase[];
}

export const projects: Project[] = [
  {
    id: "claims-management",
    title: "AI-Powered Claims Management Platform",
    industry: "InsurTech",
    problem:
      "Legacy claims systems created 14-day average processing delays and 67% adjuster dissatisfaction due to fragmented workflows across 7 disconnected tools and zero AI assistance.",
    impact: [
      "70% reduction in claim processing time",
      "4.8/5 adjuster NPS score",
      "$12M annual operational savings",
      "89% AI recommendation adoption",
    ],
    tags: ["AI/ML", "InsurTech", "Enterprise SaaS", "Decision Support"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    color: "#8b5cf6",
    year: "2023",
    role: "Senior & Lead UX / Product Designer",
    duration: "14 months",
    overview:
      "Reimagined the end-to-end claims lifecycle for a Fortune 500 insurer, integrating AI recommendations directly into adjuster workflows to transform a fragmented 3-system experience into a unified intelligent platform that thinks alongside its users.",
    research: [
      {
        title: "Contextual Discovery",
        content:
          "Conducted 38 contextual interviews with adjusters, managers, and claimants across 5 regional offices. Created journey maps revealing 23 distinct pain points. The core insight: adjusters trusted their gut over data because data was inaccessible.",
      },
      {
        title: "Competitive Analysis",
        content:
          "Audited 8 competing platforms and identified a critical market gap: explainable AI. Existing tools gave decisions without reasoning, causing adjuster distrust and rejection rates of 77%.",
      },
      {
        title: "Mental Model Mapping",
        content:
          "Ran card-sorting sessions to understand how experienced adjusters build their mental models for complex claims — then designed the AI to mirror and augment those patterns rather than replace them.",
      },
    ],
    solution: [
      {
        title: "Unified Intelligent Workspace",
        content:
          "Consolidated all claim data, AI recommendations, document analysis, and communication tools into a single workspace. Context switching dropped from 7 applications to 1.",
      },
      {
        title: "Transparent AI Decision Engine",
        content:
          "Designed a reasoning panel showing AI confidence scores, evidence chains, and comparable historical claims. Adjuster trust and feature adoption climbed from 23% to 89%.",
      },
      {
        title: "Adaptive Layout System",
        content:
          "Built a configurable layout engine that adapts to claim complexity — simple claims get a streamlined view, complex ones expand with full AI context and collaboration tools.",
      },
    ],
    process: [
      { phase: "Discovery", activities: ["Stakeholder interviews", "Field research", "Journey mapping", "Analytics audit"] },
      { phase: "Define", activities: ["Insight synthesis", "Problem framing", "Success metrics", "Design principles"] },
      { phase: "Design", activities: ["Concept exploration", "Wireframes", "AI interaction patterns", "Design system"] },
      { phase: "Validate", activities: ["Usability testing", "A/B testing", "Pilot launch", "Iteration"] },
    ],
    prototypeUrl: "https://www.figma.com/proto/placeholder-claims-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Stakeholder Alignment & Project Kickoff",
        icon: "🎯",
        activities: [
          "Stakeholder interviews across product, engineering, legal & ops",
          "Defined project goals, success metrics and constraints",
          "RACI matrix and design governance model setup",
          "Established a 14-month project timeline with milestones",
          "Agreed on measurable KPIs: <5-day cycle time, >80% AI adoption, NPS >4.5",
        ],
        output: "Project charter · Stakeholder map · KPI framework",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Discovery & Field Research",
        icon: "🔍",
        activities: [
          "38 contextual interviews: adjusters, managers, claimants",
          "Field observation at 5 regional claims offices across 4 states",
          "Shadowed 12 adjusters through full claims processing days",
          "Competitive audit of 8 InsurTech platforms (Guidewire, Duck Creek, etc.)",
          "Analytics audit: confirmed 14-day avg processing time, 67% dissatisfaction",
        ],
        output: "380+ research notes · Field observation recordings · Competitive matrix",
      },
      {
        week: "Wk 7–8",
        phase: "Phase 03",
        title: "Synthesis & Insight Generation",
        icon: "💡",
        activities: [
          "Affinity mapping session with cross-functional team (n=8)",
          "As-is journey map across all 7 legacy systems",
          "Key insight: 62% of adjuster time spent on data retrieval, not decisions",
          "Critical finding: AI was distrusted because it gave answers without reasoning",
          "Identified 23 pain points, clustered into 5 'How Might We' themes",
        ],
        output: "Insight report · As-is journey map · HMW statements · Pain point matrix",
      },
      {
        week: "Wk 9",
        phase: "Phase 04",
        title: "Define: Problem Frame & Design Principles",
        icon: "🧭",
        activities: [
          "Problem statement: 'Give adjusters a unified workspace where AI surfaces contextual intelligence they can trust'",
          "3 core design principles: Transparency First, Trust Through Evidence, Adjuster as Expert",
          "North star metric defined: Adjuster Time-to-Decision",
          "Scope agreement: MVP vs. Phase 2 feature split with engineering",
          "Design system strategy: new InsurTech component library from scratch",
        ],
        output: "Design brief · Problem statement · Design principles · Scope doc",
      },
      {
        week: "Wk 10–11",
        phase: "Phase 05",
        title: "Information Architecture & System Design",
        icon: "🏗️",
        activities: [
          "IA audit of the existing 7-system landscape",
          "Designed new unified workspace architecture: single-surface model",
          "Data model mapping sessions with engineering team",
          "Content model for AI recommendation panel (confidence, evidence, precedents)",
          "Navigation model validated via tree testing with 15 adjusters",
        ],
        output: "IA diagram · Content model · Tree test report · System architecture map",
      },
      {
        week: "Wk 12–13",
        phase: "Phase 06",
        title: "Concept Exploration & Ideation",
        icon: "✏️",
        activities: [
          "Explored 3 design directions: Minimal Assist, Guided Workflow, AI-Forward",
          "Design studio workshop with 6 cross-functional participants",
          "Concept validation sessions with 12 adjusters (4 per concept)",
          "Winning direction: Guided Workflow + Transparent AI panel hybrid",
          "Decision log initiated — every major design choice documented with rationale",
        ],
        output: "3 concept sketches · Concept validation report · Decision log v1",
      },
      {
        week: "Wk 14–16",
        phase: "Phase 07",
        title: "Wireframing & Low-Fidelity Prototyping",
        icon: "📐",
        activities: [
          "47 key screens wireframed across all claim types and complexity levels",
          "Interactive lo-fi prototype built in Figma for task-flow testing",
          "Moderated task-flow sessions with 8 adjusters",
          "Usability issues documented: 14 critical, 22 moderate, 37 minor",
          "Priority issues resolved in 2 iteration cycles before hi-fi",
        ],
        output: "47 wireframe screens · Lo-fi prototype · Usability issues log",
      },
      {
        week: "Wk 17–18",
        phase: "Phase 08",
        title: "Design System Creation",
        icon: "🧱",
        activities: [
          "InsurTech-specific component library built (80+ components)",
          "AI recommendation card pattern system with 6 variants",
          "Accessibility baked in: WCAG 2.1 AA compliance from the start",
          "Color system, typography scale and spacing tokens defined",
          "Component documentation in Storybook for engineering handoff",
        ],
        output: "Figma component library · Storybook docs · Accessibility spec · Token system",
      },
      {
        week: "Wk 19–22",
        phase: "Phase 09",
        title: "High-Fidelity UI Design",
        icon: "🎨",
        activities: [
          "Full UI design for all 47 screens in light and dark mode",
          "AI confidence scoring interface: confidence ring, evidence chain, override flow",
          "Micro-interaction specification for 34 interaction patterns",
          "Empty states, loading states, error states and edge cases designed",
          "Interactive hi-fi prototype with 120+ hotspots built for testing",
        ],
        output: "Hi-fi prototype (120+ hotspots) · Interaction spec · Motion guidelines",
      },
      {
        week: "Wk 23–26",
        phase: "Phase 10",
        title: "Usability Testing & Iteration",
        icon: "🧪",
        activities: [
          "Round 1: Moderated testing with 12 adjusters — 5 tasks per session",
          "Critical finding: AI reasoning panel needed to be persistent, not hidden in drawer",
          "Round 2: Tested redesigned AI panel with 12 new participants",
          "Accessibility testing with 3 participants using screen readers",
          "Final SUS score: 84.2 (Excellent) vs. baseline legacy system: 38.5",
        ],
        output: "2 usability reports · SUS scores · Screen reader audit · Iteration changelog",
      },
      {
        week: "Wk 27–32",
        phase: "Phase 11",
        title: "Developer Handoff & Build Support",
        icon: "🤝",
        activities: [
          "Annotated every screen in Figma with behavior, states, and edge cases",
          "Wrote behavior spec documents for all 6 AI interaction patterns",
          "Weekly design QA sessions with engineering — 200+ tickets reviewed",
          "Participated in sprint planning to ensure design fidelity in implementation",
          "Created a visual regression checklist for QA team",
        ],
        output: "Annotated Figma files · Behavior spec docs · QA checklist · Dev FAQ",
      },
      {
        week: "Wk 33–42",
        phase: "Phase 12",
        title: "Pilot Launch & Optimization",
        icon: "🚀",
        activities: [
          "Soft launch with 50-adjuster pilot group at 2 regional offices",
          "A/B tested AI panel placement: right rail vs. inline — inline won (+18% usage)",
          "Weekly feedback sessions with pilot adjusters",
          "Shipped 12 post-launch improvements based on pilot data",
          "AI adoption climbed from 23% baseline → 67% (pilot) → 89% (full rollout)",
        ],
        output: "Pilot report · A/B test results · Improvement roadmap · Adoption metrics",
      },
      {
        week: "Wk 43–56",
        phase: "Phase 13",
        title: "Full Rollout & Impact Measurement",
        icon: "📊",
        activities: [
          "Full rollout to 4,200 adjusters across all regional offices",
          "Impact measured: 70% reduction in claim processing time (14d → 4.2d)",
          "Adjuster NPS: 4.8/5 (from baseline of 2.1/5)",
          "AI recommendation adoption: 89% of eligible claims",
          "$12M annual operational savings validated with finance team",
        ],
        output: "Impact report · NPS analysis · ROI documentation · Case study published",
      },
    ],
  },
  {
    id: "decision-intelligence",
    title: "AI Decision Intelligence Dashboard",
    industry: "FinTech",
    problem:
      "Financial analysts spent 73% of their time aggregating data across siloed systems, leaving only 27% for actual decision-making — inverting the intended value ratio and causing analysis paralysis.",
    impact: [
      "3× faster decision velocity",
      "89% reduction in data prep time",
      "40% improvement in forecast accuracy",
      "2,000+ daily active analysts",
    ],
    tags: ["Data Visualization", "AI", "FinTech", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80",
    color: "#3b82f6",
    year: "2022",
    role: "Principal Designer",
    duration: "10 months",
    overview:
      "Designed an AI-powered decision intelligence platform that surfaces relevant financial signals from vast datasets, enabling analysts to focus on interpretation and judgment rather than data collection and formatting.",
    research: [
      {
        title: "Embedded Research",
        content:
          "Spent 3 weeks embedded with analyst teams, conducting observational research and time-motion studies. Discovered analysts maintained personal 'shadow dashboards' in Excel — a clear signal that the official tool was failing them.",
      },
      {
        title: "Cognitive Load Mapping",
        content:
          "Applied the NASA-TLX framework to measure cognitive load during analysis sessions. Baseline scores revealed critical overload during the data-gathering phase — our primary design target.",
      },
    ],
    solution: [
      {
        title: "Adaptive Signal Dashboard",
        content:
          "Built an ML-powered layout engine that learns individual analyst preferences and surfaces the most relevant data panels automatically. The dashboard adapts to role, context, and behavior over time.",
      },
      {
        title: "Decision Flow Visualization",
        content:
          "Designed interactive decision trees that trace the impact of variables across portfolios in real-time, giving analysts a live view of how assumptions ripple through models.",
      },
    ],
    process: [
      { phase: "Research", activities: ["Embedded observation", "Time-motion studies", "Expert interviews", "Shadow dashboard analysis"] },
      { phase: "Strategy", activities: ["Information architecture", "AI capability mapping", "Persona development", "Prioritization framework"] },
      { phase: "Design", activities: ["Data visualization patterns", "Adaptive layouts", "Interaction design", "Prototype testing"] },
      { phase: "Launch", activities: ["Phased rollout", "Training programs", "Feedback loops", "Continuous optimization"] },
    ],
  },
  {
    id: "analytics-redesign",
    title: "Enterprise Data Analytics Redesign",
    industry: "E-commerce",
    problem:
      "A $4B e-commerce platform's analytics suite had a 34% abandonment rate — merchants would start analysis sessions but give up before extracting insights due to overwhelming UX complexity.",
    impact: [
      "34% → 8% session abandonment rate",
      "2.1M monthly active merchants",
      "62% increase in report creation",
      "NPS improved by 31 points",
    ],
    tags: ["Enterprise UX", "E-commerce", "Design Systems", "Analytics"],
    image:
      "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?w=800&q=80",
    color: "#10b981",
    year: "2021",
    role: "Senior Product Designer",
    duration: "8 months",
    overview:
      "Complete redesign of an enterprise analytics platform serving 2.1M merchants globally, focusing on progressive disclosure and AI-assisted insight generation to drastically reduce cognitive load.",
    research: [
      {
        title: "Behavioral Analytics",
        content:
          "Analyzed 8M session recordings to pinpoint exact drop-off moments. Built a heatmap visualization over the analytics funnel revealing that 81% of abandonment happened at the 'filter' step.",
      },
      {
        title: "Segmented User Research",
        content:
          "Discovered a fundamental user split: power analysts wanted raw flexibility, while casual merchants needed guided insight discovery. These two modes required completely different UX paradigms.",
      },
    ],
    solution: [
      {
        title: "Mode-Based Navigation",
        content:
          "Introduced distinct 'Explore' and 'Report' modes with tailored toolsets for each user type, reducing irrelevant UI noise by 60% and dramatically lowering time-to-first-insight.",
      },
      {
        title: "AI Insight Engine",
        content:
          "Embedded an AI that proactively surfaces anomalies and trends in merchant data, converting passive viewers into active decision-makers through contextual recommendations.",
      },
    ],
    process: [
      { phase: "Audit", activities: ["Session analysis", "Funnel mapping", "Support ticket review", "Competitive benchmarking"] },
      { phase: "Research", activities: ["Merchant interviews", "Segmentation study", "Card sorting", "Tree testing"] },
      { phase: "Design", activities: ["Dual-mode architecture", "Progressive disclosure", "Component system", "AI UX patterns"] },
      { phase: "Validate", activities: ["Prototype testing", "Beta launch", "Merchant feedback", "Metric tracking"] },
    ],
  },
  {
    id: "incident-management",
    title: "AI-Assisted Incident Management System",
    industry: "Enterprise SaaS",
    problem:
      "On-call engineers at a cloud infrastructure company faced 4-hour mean-time-to-resolve on critical incidents, costing $380K per hour in customer downtime and engineering burnout.",
    impact: [
      "MTTR reduced from 4hrs to 47 minutes",
      "91% faster root cause identification",
      "$2.1M saved per prevented P0 outage",
      "Zero P0 incidents in H2 2023",
    ],
    tags: ["AI/ML", "DevOps", "Enterprise SaaS", "Incident Response"],
    image:
      "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?w=800&q=80",
    color: "#f59e0b",
    year: "2023",
    role: "Lead Product Designer",
    duration: "12 months",
    overview:
      "Designed an AI-powered incident war room for on-call engineers that cuts resolution time by 80% through intelligent alert correlation, automated runbooks, and predictive remediation guidance.",
    research: [
      {
        title: "Incident War Room Immersion",
        content:
          "Observed 23 live incident responses across 4 months, documenting the chaotic information-gathering phase that consumed 70% of resolution time. On-call engineers described the experience as 'fighting fires while blindfolded.'",
      },
      {
        title: "Cognitive Load Analysis",
        content:
          "Applied NASA-TLX methodology during live incidents to quantify engineer cognitive load. Peak TLX scores during P0 events were 94/100 — establishing the baseline our design needed to beat.",
      },
    ],
    solution: [
      {
        title: "AI-Powered War Room",
        content:
          "Designed a dynamic command center that auto-populates with relevant logs, metrics, runbooks, and historical precedents the moment an alert fires — eliminating the information-gathering phase entirely.",
      },
      {
        title: "Explainable Remediation Engine",
        content:
          "Created the first UX for AI-suggested remediation steps with confidence scores and reasoning chains, enabling non-expert engineers to safely handle P2/P3 incidents independently.",
      },
    ],
    process: [
      { phase: "Immersion", activities: ["War room observation", "On-call shadowing", "Incident post-mortems", "Cognitive load analysis"] },
      { phase: "Synthesis", activities: ["Pain point mapping", "AI opportunity mapping", "Mental model analysis", "Success metrics"] },
      { phase: "Design", activities: ["Alert architecture", "AI explainability UX", "Command center layout", "Mobile incident flow"] },
      { phase: "Validation", activities: ["Tabletop exercises", "Simulated incidents", "Engineer feedback", "Metric measurement"] },
    ],
  },
];
