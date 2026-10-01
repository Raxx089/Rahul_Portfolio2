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
  principles?: string[];
  uiPrinciples?: string[];
  accessibilityGuidelines?: string[];
  usabilityStudy?: string[];
  prototypeUrl?: string;
  applicationUrl?: string;
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
    role: "UX Lead & Product Designer",
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
    applicationUrl: "https://ai-powered-claims-management-platfo.vercel.app/#/",
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
    prototypeUrl: "https://www.figma.com/proto/placeholder-decision-intelligence-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Stakeholder Alignment & Context Mapping",
        icon: "🎯",
        activities: [
          "Aligned on the business problem: analysts were spending more time collecting data than making decisions",
          "Interviewed finance leaders, portfolio analysts, and data teams to define success metrics",
          "Mapped the current decision flow and highlighted the bottlenecks across reports, spreadsheets, and exports",
          "Defined a North Star metric: reduce time-to-decision while improving decision confidence",
        ],
        output: "Project charter · Stakeholder map · Success metrics",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Embedded Research & Workflow Observation",
        icon: "🔍",
        activities: [
          "Spent 3 weeks embedded with analyst teams to observe real workflows in the wild",
          "Tracked how analysts moved between dashboards, spreadsheets, and reports during live decision sessions",
          "Documented how personal Excel workbooks were used as shadow systems to compensate for tool limitations",
          "Identified cognitive overload in the data collection and reconciliation stages",
        ],
        output: "Research notes · Time-motion observations · Workflow map",
      },
      {
        week: "Wk 7–8",
        phase: "Phase 03",
        title: "Insight Synthesis & Opportunity Framing",
        icon: "💡",
        activities: [
          "Synthesized research into core insight themes around data friction, trust, and context switching",
          "Defined the product opportunity: bring the right signals forward before analysts ask for them",
          "Framed the design challenge around AI that helps analysts think, not just retrieve",
          "Prioritized features that reduce prep work and increase clarity during decision-making",
        ],
        output: "Insight report · Opportunity brief · Design principles",
      },
      {
        week: "Wk 9",
        phase: "Phase 04",
        title: "Information Architecture & Experience Strategy",
        icon: "🧭",
        activities: [
          "Mapped the future experience across monitoring, diagnosis, and decision support moments",
          "Crafted a modular dashboard structure for signals, context, recommendations, and decisions",
          "Defined user roles and how the interface should adapt by analyst maturity and task type",
          "Established a clear difference between passive reporting and active decision support",
        ],
        output: "IA map · Experience strategy · Role-based journey map",
      },
      {
        week: "Wk 10–13",
        phase: "Phase 05",
        title: "Concept Design & Interaction Patterns",
        icon: "✏️",
        activities: [
          "Explored concept directions for AI-guided analytics, adaptive signal surfaces, and decision support panels",
          "Designed interaction patterns for alerting, anomaly explanation, scenario comparison, and confidence framing",
          "Validated concepts with analysts through quick prototype reviews and feedback sessions",
          "Selected a direction that balanced automation with human judgment and traceability",
        ],
        output: "Concept sketches · Interaction patterns · Feedback summary",
      },
      {
        week: "Wk 14–18",
        phase: "Phase 06",
        title: "Dashboard Wireframes & System Design",
        icon: "📐",
        activities: [
          "Wireframed core surfaces for portfolio monitoring, scenario analysis, and recommendation review",
          "Built the information hierarchy so the most important signals appeared first without overwhelming users",
          "Defined micro-interactions for filtering, drilling down, and comparing metrics over time",
          "Created the structure for a scalable design system that could support future AI features",
        ],
        output: "Wireframes · Interaction spec · Design system foundations",
      },
      {
        week: "Wk 19–22",
        phase: "Phase 07",
        title: "High-Fidelity UI Design",
        icon: "🎨",
        activities: [
          "Designed the final interface for signal dashboards, decision flows, and AI insight surfaces",
          "Applied a calm visual system that made data more legible and reduced cognitive strain",
          "Created states for loading, alerting, empty results, and confidence-based recommendations",
          "Ensured the experience felt trustworthy, explainable, and efficient for high-stakes decisions",
        ],
        output: "High-fidelity screens · UI kit · Visual system",
      },
      {
        week: "Wk 23–26",
        phase: "Phase 08",
        title: "Prototype Validation & Iteration",
        icon: "🧪",
        activities: [
          "Tested the prototype with analysts and finance stakeholders to evaluate clarity and task success",
          "Refined the layout based on feedback around prioritization of signals and the placement of recommendations",
          "Adjusted the decision flow so people could understand the AI's reasoning without feeling overruled",
          "Validated that the experience reduced the amount of manual work required to get to insight",
        ],
        output: "Usability findings · Iteration log · Validation report",
      },
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
    prototypeUrl: "https://www.figma.com/proto/placeholder-analytics-redesign-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Audit & Friction Mapping",
        icon: "📈",
        activities: [
          "Reviewed product analytics and session data to identify where users were abandoning analysis flows",
          "Mapped the existing reporting journey and surfaced the most frustrating steps in each task",
          "Aligned the team around the core issue: merchants were getting lost before reaching insights",
        ],
        output: "Funnel audit · Friction map · Opportunity brief",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "User Research & Segmentation",
        icon: "🔍",
        activities: [
          "Interviewed merchants and internal analysts to understand the difference between casual and power users",
          "Discovered the need for two distinct navigation modes to support guided exploration and advanced analysis",
          "Used card sorting and tree testing to validate the mental model for a simpler analytics experience",
        ],
        output: "Research synthesis · Segmentation report · IA findings",
      },
      {
        week: "Wk 7–10",
        phase: "Phase 03",
        title: "Experience Strategy & Navigation Design",
        icon: "🧭",
        activities: [
          "Crafted a dual-mode experience for exploration and reporting workflows",
          "Introduced progressive disclosure so users saw the right controls at the right time",
          "Defined a design system foundation to support consistency across analytics surfaces",
        ],
        output: "Experience strategy · Navigation model · Design system outline",
      },
      {
        week: "Wk 11–14",
        phase: "Phase 04",
        title: "High-Fidelity Design & Prototyping",
        icon: "🎨",
        activities: [
          "Built polished analytics interfaces that reduced visual noise and helped users focus on priorities",
          "Added AI-assisted insight cues that surfaced anomalies and recommendations at the moment they mattered",
          "Created a testable prototype for validation with merchants and internal stakeholders",
        ],
        output: "High-fidelity screens · Prototype · Validation plan",
      },
      {
        week: "Wk 15–16",
        phase: "Phase 05",
        title: "Validation & Launch Readiness",
        icon: "🚀",
        activities: [
          "Validated the redesign through usability testing and stakeholder review",
          "Refined the experience based on merchant feedback and adoption goals",
          "Prepared the rollout plan with clear success metrics for the new analytics experience",
        ],
        output: "Usability findings · Launch checklist · Success metrics",
      },
    ],
  },
  {
    id: "plm-erp-modernization",
    title: "Enterprise Product Lifecycle Management",
    industry: "Enterprise Software",
    problem:
      "Cross-functional teams were managing product lifecycle, compliance, and release activities across disconnected tools, causing delays, duplicated work, and confusion about ownership across the organization.",
    impact: [
      "40% faster release coordination",
      "30% reduction in handoff delays",
      "Improved cross-team visibility",
      "Higher governance compliance",
    ],
    tags: ["PLM", "ERP", "Enterprise SaaS", "Process Design"],
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&q=80",
    color: "#0f766e",
    year: "2024",
    role: "UX Lead & Product Designer",
    duration: "9 months",
    overview:
      "Led the design of an enterprise product lifecycle and ERP modernization experience for a large organization, unifying planning, governance, and execution workflows into a more coherent operating model for product and operations teams.",
    research: [
      {
        title: "Cross-Functional Discovery",
        content:
          "Worked closely with product, engineering, operations, compliance, and finance stakeholders to understand the fragmented lifecycle and identify where coordination was breaking down.",
      },
      {
        title: "Workflow & Governance Review",
        content:
          "Mapped current-state workflows across planning, approvals, releases, and ERP updates to uncover critical handoff gaps, approval bottlenecks, and inconsistent process visibility.",
      },
    ],
    solution: [
      {
        title: "Unified Lifecycle Workspace",
        content:
          "Created a centralized operating workspace that connected planning, status tracking, approvals, and cross-team communications so work progressed with less friction and better accountability.",
      },
      {
        title: "Modernized ERP Coordination Experience",
        content:
          "Redesigned the ERP modernization experience to simplify role-based workflows, reduce process complexity, and make governance checkpoints easier to follow for non-technical teams.",
      },
    ],
    process: [
      { phase: "Discovery", activities: ["Stakeholder workshops", "Workflow mapping", "Process audit", "Governance review"] },
      { phase: "Strategy", activities: ["System blueprinting", "Persona alignment", "Journey mapping", "Prioritization"] },
      { phase: "Design", activities: ["Lifecycle flows", "Role-based interfaces", "Approval UX", "ERP modernization patterns"] },
      { phase: "Validate", activities: ["Usability testing", "Working sessions", "Operational feedback", "Iteration"] },
    ],
    prototypeUrl: "https://www.figma.com/proto/placeholder-plm-erp-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Stakeholder Alignment & Program Framing",
        icon: "🎯",
        activities: [
          "Aligned on business goals for product lifecycle visibility, governance maturity, and ERP modernization enablement",
          "Interviewed stakeholders across product, engineering, operations, compliance, and finance",
          "Defined scope, success measures, and key handoff pain points across the operating model",
        ],
        output: "Program brief · Stakeholder map · Success criteria",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Workflow Discovery & Process Mapping",
        icon: "🔍",
        activities: [
          "Mapped the full lifecycle from ideation through release and post-launch governance",
          "Documented manual handoffs, inconsistent approvals, and duplicated process steps across teams",
          "Identified where ERP modernization could improve both operational efficiency and employee experience",
        ],
        output: "Workflow maps · Process audit · Pain point inventory",
      },
      {
        week: "Wk 7–10",
        phase: "Phase 03",
        title: "Strategy & Information Architecture",
        icon: "🧭",
        activities: [
          "Defined the future operating model for lifecycle oversight and governance visibility",
          "Structured information by role, lifecycle stage, and business objective",
          "Established a common language for planning, approvals, statuses, and handoffs",
        ],
        output: "IA map · Operating model · Role-based journey map",
      },
      {
        week: "Wk 11–15",
        phase: "Phase 04",
        title: "Experience Design & System Flows",
        icon: "🎨",
        activities: [
          "Designed unified workflows for lifecycle planning, approval management, and ERP modernization tasks",
          "Created role-based experiences so teams saw the right information without unnecessary noise",
          "Built interaction patterns for status tracking, governance checkpoints, and cross-team coordination",
        ],
        output: "Wireframes · Design flows · Interaction patterns",
      },
      {
        week: "Wk 16–18",
        phase: "Phase 05",
        title: "Validation & Launch Readiness",
        icon: "🚀",
        activities: [
          "Validated the experience with stakeholders through walkthroughs and feedback sessions",
          "Refined the UI based on clarity, governance needs, and adoption expectations",
          "Prepared implementation guidance for rollout across teams and systems",
        ],
        output: "Feedback summary · Launch checklist · Implementation notes",
      },
    ],
  },
  {
    id: "visual-design-uat-platform",
    title: "Visual Design QA / UAT Platform",
    industry: "Enterprise Software",
    problem:
      "Design and product teams struggled to coordinate visual QA and UAT across releases because review feedback was scattered, inconsistent, and hard to act on.",
    impact: [
      "Faster review cycles",
      "Clearer handoff between design and QA",
      "Stronger release confidence",
      "Better traceability of feedback",
    ],
    tags: ["Design QA", "UAT", "Enterprise SaaS", "Product Ops"],
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&q=80",
    color: "#7c3aed",
    year: "2024",
    role: "UX Lead & Product Designer",
    duration: "6 months",
    overview:
      "Designed a visual design QA and UAT platform that brought review, feedback, approvals, and release readiness into one streamlined workflow for product, design, and engineering teams.",
    research: [
      {
        title: "Review Workflow Audit",
        content:
          "Studied how teams currently handled design review, defect tracking, and UAT sign-off, and found major gaps in visibility, versioning, and ownership.",
      },
      {
        title: "Cross-Team Collaboration Review",
        content:
          "Interviewed designers, QA leads, product managers, and engineering managers to uncover the common pain points behind slow or inconsistent release validation.",
      },
    ],
    solution: [
      {
        title: "Centralized Review Workspace",
        content:
          "Created a single review environment where comments, screenshots, versions, defects, and approvals could be managed in a structured flow.",
      },
      {
        title: "UAT and Release Readiness Experience",
        content:
          "Designed a guided UAT experience with clear stages, ownership, and reporting so teams could move from feedback to sign-off with less ambiguity.",
      },
    ],
    process: [
      { phase: "Discovery", activities: ["Stakeholder interviews", "Workflow audit", "Feedback pain point mapping", "Release review analysis"] },
      { phase: "Strategy", activities: ["Journey mapping", "Success metrics", "Ownership model", "Review taxonomy"] },
      { phase: "Design", activities: ["Review workflows", "Approval states", "UAT screens", "Design QA patterns"] },
      { phase: "Validate", activities: ["Prototype testing", "Team walkthroughs", "Iteration", "Adoption feedback"] },
    ],
    prototypeUrl: "https://www.figma.com/proto/placeholder-visual-design-uat-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Stakeholder Alignment & Review Friction Mapping",
        icon: "🎯",
        activities: [
          "Aligned on the current pain points around design QA, UAT, and cross-team release review",
          "Interviewed design, QA, product, and engineering stakeholders to gather workflow context",
          "Defined the core opportunity: create a more structured and transparent review experience",
        ],
        output: "Stakeholder map · Problem framing · Review audit",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Workflow Discovery & Feedback Analysis",
        icon: "🔍",
        activities: [
          "Mapped review loops, sign-off behavior, and defect reporting across teams",
          "Identified inconsistent ownership and fragmented feedback channels as the biggest blockers",
          "Prioritized features that reduce ambiguity and speed up validation",
        ],
        output: "Workflow map · Feedback insights · Prioritization notes",
      },
      {
        week: "Wk 7–10",
        phase: "Phase 03",
        title: "Designing the Review Experience",
        icon: "🧭",
        activities: [
          "Designed a central review workspace that broke down feedback into clear, actionable states",
          "Created approval and regression tracking flows for design QA and UAT milestones",
          "Structured visibility around version history, comments, and sign-off progress",
        ],
        output: "Wireframes · Review flow map · Ownership model",
      },
      {
        week: "Wk 11–14",
        phase: "Phase 04",
        title: "High-Fidelity Prototyping & Validation",
        icon: "🎨",
        activities: [
          "Built a polished prototype for review submission, feedback tracking, and release readiness",
          "Validated the experience through stakeholder walkthroughs and usability feedback",
          "Refined the flows based on clarity, confidence, and speed of adoption",
        ],
        output: "High-fidelity prototype · Validation notes · Iteration log",
      },
      {
        week: "Wk 15–16",
        phase: "Phase 05",
        title: "Launch Readiness & Team Adoption",
        icon: "🚀",
        activities: [
          "Prepared the rollout plan for design QA and UAT teams",
          "Defined success metrics around review turnaround time and release confidence",
          "Documented the implementation path for broader adoption across teams",
        ],
        output: "Adoption plan · Success metrics · Implementation notes",
      },
    ],
  },
  {
    id: "visual-design-system-architecture",
    title: "Visual Design System Architecture",
    industry: "Enterprise Software",
    problem:
      "Teams were scaling product experiences quickly, but design systems were fragmented across products, leading to inconsistent UI, slower delivery, and higher rework during implementation.",
    impact: [
      "Faster design-to-development handoff",
      "More consistent UI across products",
      "Reduced component duplication",
      "Improved design scalability",
    ],
    tags: ["Design Systems", "UX Strategy", "Enterprise SaaS", "Platform Design"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    color: "#2563eb",
    year: "2024",
    role: "UX Lead & Product Designer",
    duration: "7 months",
    overview:
      "Created a scalable visual design system architecture that aligned product teams around shared principles, tokens, components, and governance so they could build consistent experiences faster and with less friction.",
    research: [
      {
        title: "System Fragmentation Audit",
        content:
          "Reviewed existing UI patterns across multiple products and found major inconsistencies in tokens, spacing, interaction states, and component usage.",
      },
      {
        title: "Team Enablement Study",
        content:
          "Interviewed designers, developers, and product managers to understand where the current system was failing to support collaboration and delivery at scale.",
      },
    ],
    solution: [
      {
        title: "Token-Based Foundation",
        content:
          "Defined a robust token system for color, spacing, typography, and elevation so teams could scale UI work from a single, shared source of truth.",
      },
      {
        title: "Governed Component Architecture",
        content:
          "Architected component patterns with clear usage rules, state definitions, and accessibility standards to improve consistency and reduce design debt.",
      },
    ],
    process: [
      { phase: "Audit", activities: ["Pattern review", "System gap analysis", "Stakeholder interviews", "Component inventory"] },
      { phase: "Strategy", activities: ["Design principles", "Token architecture", "Governance model", "Migration planning"] },
      { phase: "Design", activities: ["Component library", "Documentation system", "Accessibility patterns", "Usage guidelines"] },
      { phase: "Validate", activities: ["Adoption review", "Team workshops", "Implementation feedback", "Iteration"] },
    ],
    prototypeUrl: "https://www.figma.com/proto/placeholder-design-system-architecture-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "System Audit & Pattern Discovery",
        icon: "🔎",
        activities: [
          "Audited existing product surfaces and documented structural inconsistencies across the ecosystem",
          "Mapped recurring UI patterns and identified where design debt was slowing delivery",
          "Aligned stakeholders around the need for a scalable design system approach",
        ],
        output: "System audit · Pattern inventory · Stakeholder summary",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Design Principles & Token Strategy",
        icon: "🧭",
        activities: [
          "Defined foundation principles for consistency, accessibility, and scalable adoption",
          "Created a token architecture for colors, spacing, typography, and motion",
          "Established the rules that would govern future UI decisions across teams",
        ],
        output: "Design principles · Token map · Governance framework",
      },
      {
        week: "Wk 7–10",
        phase: "Phase 03",
        title: "Component Architecture & Documentation",
        icon: "🧱",
        activities: [
          "Designed a modular component library with clear states, variants, and usage guidance",
          "Defined component relationships and patterns for shared product experiences",
          "Prepared documentation that made the system easier for teams to adopt and maintain",
        ],
        output: "Component library · Usage docs · System guidelines",
      },
      {
        week: "Wk 11–14",
        phase: "Phase 04",
        title: "Validation & Adoption Planning",
        icon: "🚀",
        activities: [
          "Reviewed the system with cross-functional teams to validate scalability and clarity",
          "Iterated on documentation and patterns based on implementation feedback",
          "Prepared rollout guidance for teams adopting the architecture across products",
        ],
        output: "Validation notes · Adoption plan · Implementation roadmap",
      },
    ],
  },
  {
    id: "enterprise-saas-dashboard-suite",
    title: "Enterprise SaaS Dashboard Suite",
    industry: "Enterprise Software",
    problem:
      "Operations, product, and executive teams were relying on disconnected dashboards and manual reporting, which made it difficult to monitor health, spot trends, and act quickly across the business.",
    impact: [
      "Unified cross-functional visibility",
      "Faster executive reporting",
      "Less manual dashboard maintenance",
      "Improved decision confidence",
    ],
    tags: ["Dashboard Design", "Enterprise SaaS", "Analytics", "Operations"],
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    color: "#0f766e",
    year: "2025",
    role: "UX Lead & Product Designer",
    duration: "5 months",
    overview:
      "Designed a scalable dashboard suite for an enterprise SaaS platform that brought product, customer, and operational metrics into a cohesive experience for multiple stakeholders and decision-making levels.",
    research: [
      {
        title: "Cross-Functional Needs Review",
        content:
          "Interviewed product, operations, support, and leadership stakeholders to understand how each team consumed metrics and where current dashboards broke down.",
      },
      {
        title: "Reporting Friction Audit",
        content:
          "Reviewed recurring reporting workflows and found that teams were duplicating effort across spreadsheets, static exports, and fragmented BI tools.",
      },
    ],
    solution: [
      {
        title: "Role-Based Dashboard Architecture",
        content:
          "Created tailored dashboard views for executives, operators, and product teams so each audience could access the right metrics without unnecessary noise.",
      },
      {
        title: "Shared Insight Workflow",
        content:
          "Built a consistent pattern for drill-down, trend review, and action tracking so insights could move from observation to follow-up quickly.",
      },
    ],
    process: [
      { phase: "Discovery", activities: ["Stakeholder interviews", "Reporting audit", "Workflow review", "Metric prioritization"] },
      { phase: "Strategy", activities: ["Dashboard taxonomy", "Persona mapping", "Information hierarchy", "Success metrics"] },
      { phase: "Design", activities: ["Dashboard layouts", "Drill-down patterns", "Visualization system", "Interaction design"] },
      { phase: "Validate", activities: ["Usability rounds", "Leadership review", "Iteration", "Adoption feedback"] },
    ],
    prototypeUrl: "https://www.figma.com/proto/placeholder-enterprise-saas-dashboard-suite-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Stakeholder Alignment & Metric Mapping",
        icon: "🎯",
        activities: [
          "Aligned on the problem of disconnected reporting and unclear ownership of metrics",
          "Mapped stakeholders, reporting needs, and decision moments across product and operations teams",
          "Defined the primary opportunity: unify critical KPIs into a single, trusted experience",
        ],
        output: "Stakeholder map · KPI inventory · Opportunity brief",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Research & Workflow Friction Review",
        icon: "🔍",
        activities: [
          "Interviewed teams to understand how dashboards were used in real contexts",
          "Documented friction around manual updates, inconsistent views, and delayed follow-up",
          "Identified the need for a more role-aware and action-oriented dashboard system",
        ],
        output: "Research synthesis · Workflow findings · Friction map",
      },
      {
        week: "Wk 7–10",
        phase: "Phase 03",
        title: "Experience Architecture & Dashboard Design",
        icon: "🧭",
        activities: [
          "Designed dashboards tailored to executive, operational, and product use cases",
          "Created a shared system for trends, drill-downs, and action prompts",
          "Established a clear hierarchy to make key metrics easier to scan and interpret",
        ],
        output: "Dashboard architecture · Wireframes · Interaction patterns",
      },
      {
        week: "Wk 11–14",
        phase: "Phase 04",
        title: "Validation & Refinement",
        icon: "🚀",
        activities: [
          "Validated the experience through usability sessions and leadership walkthroughs",
          "Refined the views based on feedback about clarity, speed, and stakeholder relevance",
          "Prepared the implementation path for adoption across the broader SaaS organization",
        ],
        output: "Validation notes · Adoption plan · Iteration log",
      },
    ],
  },
  {
    id: "ai-assisted-incident-management",
    title: "AI-Assisted Incident Management System",
    industry: "Enterprise Software",
    problem:
      "Operations teams were losing critical time during incidents because alerts, logs, and customer context were spread across tools, making triage slow, inconsistent, and hard to coordinate under pressure.",
    impact: [
      "Faster incident triage",
      "Improved cross-team coordination",
      "Lower mean time to resolution",
      "More consistent incident handling",
    ],
    tags: ["AI/ML", "Incident Management", "Enterprise SaaS", "Operations"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
    color: "#dc2626",
    year: "2025",
    role: "UX Lead & Product Designer",
    duration: "6 months",
    overview:
      "Designed an AI-assisted incident management experience that helped response teams rapidly identify likely causes, coordinate actions, and communicate status through a unified and calmer workflow during high-stress events.",
    research: [
      {
        title: "Triage Workflow Audit",
        content:
          "Observed incident response teams during live events and found that the biggest delays came from switching between systems, reconstructing context, and missing a shared operating view.",
      },
      {
        title: "Response Team Interviews",
        content:
          "Interviewed incident commanders, on-call engineers, and support leads to understand where AI could assist without overwhelming already busy responders.",
      },
    ],
    solution: [
      {
        title: "AI Copilot for Incident Triage",
        content:
          "Introduced an AI co-pilot that surfaces likely root causes, related signals, and suggested next steps directly in the incident workspace.",
      },
      {
        title: "Shared Response Timeline",
        content:
          "Created a centralized timeline and action board so teams could coordinate updates, ownership, and resolution progress in one place.",
      },
    ],
    process: [
      { phase: "Discovery", activities: ["Incident observation", "On-call interviews", "Workflow review", "Signal mapping"] },
      { phase: "Strategy", activities: ["Response model", "AI use cases", "Role clarity", "Prioritization"] },
      { phase: "Design", activities: ["Incident workspace", "Timeline patterns", "Suggested actions", "Communication UX"] },
      { phase: "Validate", activities: ["Usability testing", "Response drills", "Iteration", "Adoption review"] },
    ],
    prototypeUrl: "https://www.figma.com/proto/placeholder-incident-management-prototype",
    fullProcess: [
      {
        week: "Wk 1–2",
        phase: "Phase 01",
        title: "Incident Context & Friction Mapping",
        icon: "🚨",
        activities: [
          "Observed real incidents and mapped the flow from alert to resolution",
          "Identified the biggest delays caused by fragmented context and unclear ownership",
          "Aligned stakeholders around the need for a shared incident experience",
        ],
        output: "Incident flow map · Friction summary · Goals",
      },
      {
        week: "Wk 3–6",
        phase: "Phase 02",
        title: "Research & AI Opportunity Discovery",
        icon: "🔍",
        activities: [
          "Interviewed responders to understand where AI could add confidence without adding noise",
          "Reviewed incident artifacts to identify recurrent patterns and decision points",
          "Prioritized support for summary, diagnosis, and action planning",
        ],
        output: "Research synthesis · Opportunity map · Priorities",
      },
      {
        week: "Wk 7–10",
        phase: "Phase 03",
        title: "Experience Design for High-Stress Response",
        icon: "🧭",
        activities: [
          "Designed a unified incident workspace with shared timeline, status, and ownership views",
          "Defined how AI suggestions would appear in a way that felt helpful and trustworthy",
          "Built response patterns for communication, escalation, and resolution tracking",
        ],
        output: "Wireframes · Response patterns · AI interaction map",
      },
      {
        week: "Wk 11–14",
        phase: "Phase 04",
        title: "Validation & Refinement",
        icon: "🚀",
        activities: [
          "Tested the experience with incident teams and refined the interaction model",
          "Adjusted the AI output to improve clarity, actionability, and calmness under stress",
          "Prepared rollout guidance for broader adoption across operations teams",
        ],
        output: "Validation notes · Adoption plan · Iteration log",
      },
    ],
  },
];
