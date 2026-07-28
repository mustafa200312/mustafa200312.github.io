export interface Project {
  id: string;
  number: string;
  title: string;
  highlightTitle?: string;
  subtitle: string;
  description: string;
  tags: string[];
  link?: string;
  category: 'agent' | 'rag' | 'vision' | 'nlp' | 'systems';
  featured?: boolean;
  metrics?: string[];
  visualType?: 'finance' | 'slides' | 'rag' | 'code' | 'ultrasound' | 'dialect';
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  link?: string;
  linkText?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  categoryTag: 'INDUSTRY' | 'RESEARCH' | 'COURSERA' | 'ACADEMIC' | 'COMPETITION' | 'COMMUNITY' | 'LEADERSHIP';
  year: string;
  image: string;
  verifyUrl?: string;
  filterGroup: 'all' | 'industry' | 'research' | 'coursera' | 'academic';
}

export interface CommunityRole {
  number: string;
  period: string;
  role: string;
  organization: string;
  description: string;
}

export const PERSONAL_INFO = {
  name: "Mustafa Sultan",
  title: "AI Engineer",
  tagline: "I build AI systems that reason, retrieve, and act.",
  bio: "AI Engineer building agentic workflows, LLM applications, and machine learning systems that move from research into reliable, useful products.",
  status: "AI engineering · applied research · Cairo, Egypt",
  email: "mustafa_sultan03@outlook.com",
  phone: "+201012442284",
  phoneFormatted: "+20 1012442284",
  location: "Cairo, Egypt",
  github: "https://github.com/mustafa200312",
  linkedin: "https://linkedin.com/in/mustafa-sultan-34251b227",
  scholar: "https://scholar.google.com/citations?user=0GaeCUYAAAAJ&hl=en",
  resume: "mustafa_sultan_resume.pdf",
  gpa: "3.82",
  gpaMax: "4.00",
  university: "Nile University",
  degree: "B.Sc. in Artificial Intelligence",
  educationPeriod: "OCT 2022 — JUN 2026",
};

export const PROJECTS: Project[] = [
  {
    id: "fgaib",
    number: "PROJECT 01 / 2026",
    title: "FGaiB",
    highlightTitle: "Multi-Agent Personal Finance Android Application",
    subtitle: "GRADUATION GROUP PROJECT · RANKED 1ST",
    description: "Developed collaboratively as an end-to-end Android product for managing financial data through natural-language interaction. The mobile app connects to Django Ninja APIs and PostgreSQL, while LangGraph coordinates agents for spending analysis, budgets, savings goals, recurring bills, alerts, and user requests. Validation and confirmation protect record-changing actions, and conversation memory preserves context across interactions.",
    tags: ["Android", "LangGraph", "Django Ninja", "PostgreSQL", "REST APIs", "Tool Calling"],
    category: "agent",
    featured: true,
    metrics: ["1st Ranked Graduation Project", "LangGraph Agent Mesh", "Human-in-the-Loop Confirmation"],
    visualType: "finance"
  },
  {
    id: "slidetutor",
    number: "PROJECT 02 / 2026",
    title: "SlideTutor",
    highlightTitle: "AI-Powered Study Workspace",
    subtitle: "FULL-STACK AI APPLICATION",
    description: "Turns PowerPoint decks into an interactive study experience with slide-aware chat, structured extraction, summaries, and persistent learning context.",
    tags: ["FastAPI", "React", "LangGraph", "OpenAI"],
    link: "https://github.com/mustafa200312/slidetutor",
    category: "agent",
    featured: true,
    visualType: "slides"
  },
  {
    id: "al-maktaba",
    number: "PROJECT 03",
    title: "Al-Maktaba Al-Digital",
    highlightTitle: "Arabic Book-Constrained RAG",
    subtitle: "GROUP PROJECT",
    description: "A citation-enforced Arabic knowledge system combining semantic and keyword retrieval, reranking, and source-grounded generation.",
    tags: ["Arabic NLP", "Hybrid Search", "Reranking", "Strict Citation"],
    category: "rag"
  },
  {
    id: "maap",
    number: "PROJECT 04",
    title: "MAAP",
    highlightTitle: "Automatic Code Parallelization",
    subtitle: "GROUP PROJECT",
    description: "Specialized agents analyze dependencies, decompose work, and transform sequential Python and C programs into parallel implementations.",
    tags: ["Multi-Agent", "Static Analysis", "Python", "C++ OpenMP"],
    link: "https://github.com/mustafa200312/MAAP-Multi-Agentic-for-Auto-Parallelization",
    category: "systems",
    visualType: "code"
  },
  {
    id: "ultrasound",
    number: "PROJECT 05",
    title: "Multi-View Ultrasound Imaging",
    highlightTitle: "Vision Foundation Model",
    subtitle: "COMPUTER VISION · GROUP PROJECT",
    description: "Built a multi-view medical-imaging system for longitudinal and transverse ultrasound scans using a frozen pretrained DINOv3 backbone. The architecture combines three-class segmentation—background, vessel, and plaque—with binary plaque classification informed by both views.",
    tags: ["PyTorch", "DINOv3", "Segmentation", "Transfer Learning", "Medical Imaging"],
    category: "vision",
    metrics: ["Multi-task loss design", "Weighted sampling", "Per-class Dice & F1"],
    visualType: "ultrasound"
  },
  {
    id: "arabic-dialect",
    number: "PROJECT 06",
    title: "Arabic Dialect Classification",
    highlightTitle: "Traditional ML & MARBERTv2",
    subtitle: "ARABIC NLP · GROUP PROJECT",
    description: "Developed a classification pipeline for seven Arabic dialect groups. Prepared and cleaned the dataset, encoded dialect labels, and created stratified training and validation splits before comparing traditional machine-learning approaches with a MARBERTv2 sequence-classification model.",
    tags: ["PyTorch", "Transformers", "MARBERTv2", "Scikit-learn", "Tokenization", "Label Encoding"],
    category: "nlp",
    metrics: ["Seven dialect groups", "Stratified splitting", "Accuracy · Precision · Recall · F1"],
    visualType: "dialect"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "JUL — SEP 2025",
    role: "AI Engineer Intern",
    organization: "CrossWorkers",
    location: "Cairo, Egypt",
    description: "Built agentic lead-generation, HR analytics, and natural-language SQL systems. Integrated LLM APIs and LangGraph workflows across production backend services."
  },
  {
    period: "JUN — SEP 2024",
    role: "Research Intern · ML Classification",
    organization: "Nile University",
    location: "Giza, Egypt",
    description: "Developed socioeconomic prediction models from mobile traffic and POI data, contributing to a peer-reviewed Springer publication."
  },
  {
    period: "JUN — SEP 2024",
    role: "Research Intern · Quantum Optimization",
    organization: "Nile University",
    location: "Giza, Egypt",
    description: "Applied QAOA to unit commitment problems and explored emerging quantum optimization methods.",
    link: "https://github.com/mustafa200312/Solving-the-Unit-commitment-problem-using-Quantum-Computing-/tree/main",
    linkText: "View research on GitHub ↗"
  }
];

export const EXPERTISE_AREAS = [
  {
    icon: "⌁",
    title: "Agentic AI & LLMs",
    skills: ["LangGraph", "LangChain", "RAG & Hybrid Search", "Tool Calling & Memory", "Prompt Engineering"]
  },
  {
    icon: "◇",
    title: "Machine Learning",
    skills: ["PyTorch", "TensorFlow", "Computer Vision", "NLP"]
  },
  {
    icon: "≡",
    title: "Backend & Data",
    skills: ["FastAPI", "Django Ninja", "PostgreSQL", "Pydantic & REST APIs", "Pandas & Data Pipelines"]
  },
  {
    icon: "⌬",
    title: "Research",
    skills: ["Machine learning", "Quantum computing"]
  }
];

export const COMMUNITY_ROLES: CommunityRole[] = [
  {
    number: "01",
    period: "OCT 2023 — JAN 2024",
    role: "Junior Teaching Assistant",
    organization: "Nile University",
    description: "Supported students across programming, data structures, algorithms, data analysis, preprocessing, and feature engineering. Helped make difficult concepts approachable, debugged code with students, and guided practical exercises—strengthening my ability to explain technical ideas clearly and adapt to different learning needs."
  },
  {
    number: "02",
    period: "FEB — JUN 2024",
    role: "ICPC Community Mentor",
    organization: "Nile University",
    description: "Prepared weekly Codeforces problem sheets, coached students in competitive programming and problem solving, and delivered a technical session. Also supported ECPC registration documentation, building practical habits around teamwork, reliability, and contributing beyond the technical work."
  },
  {
    number: "03",
    period: "STUDENT LEADERSHIP",
    role: "Vice President",
    organization: "University Gaming Club (Virtus NU)",
    description: "Helped manage the student community, co-organized casual gaming sessions and small tournaments, and supported event planning and logistics. Gained hands-on experience coordinating activities, collaborating with a team, and keeping students engaged in campus life."
  }
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "crossworkers",
    title: "Artificial Intelligence Internship",
    issuer: "CrossWorkers",
    categoryTag: "INDUSTRY",
    year: "2025",
    image: "certificates/INDUSTRIAL_INTERN_CERTIFICATE.jpg",
    filterGroup: "industry"
  },
  {
    id: "nu-research",
    title: "Research Internship",
    issuer: "Nile University · School of ITCS",
    categoryTag: "RESEARCH",
    year: "2024",
    image: "certificates/RESEARCH_INTERN_CERTIFICATION.png",
    filterGroup: "research"
  },
  {
    id: "coursera-mlops",
    title: "Machine Learning in Production",
    issuer: "DeepLearning.AI · Verified credential",
    categoryTag: "COURSERA",
    year: "2025",
    image: "certificates/Screenshot 2026-07-20 201430.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/TFMAN7NQ1XSC",
    filterGroup: "coursera"
  },
  {
    id: "coursera-genai",
    title: "Generative AI with Large Language Models",
    issuer: "DeepLearning.AI & AWS · Verified credential",
    categoryTag: "COURSERA",
    year: "2025",
    image: "certificates/Screenshot 2026-07-20 201505.png",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/IVFSARTGBXYC",
    filterGroup: "coursera"
  },
  {
    id: "deans-list",
    title: "Dean’s Honor",
    issuer: "Nile University · Fall 2024",
    categoryTag: "ACADEMIC",
    year: "2024",
    image: "certificates/DEAN_LIST.jpg",
    filterGroup: "academic"
  },
  {
    id: "jta",
    title: "Junior Teaching Assistant",
    issuer: "Nile University · Fall 2023",
    categoryTag: "COMMUNITY",
    year: "2023",
    image: "certificates/JTA_CERTIFICATE.jpg",
    filterGroup: "academic"
  },
  {
    id: "ecpc-2024",
    title: "ECPC 2024 Participant",
    issuer: "Egyptian Collegiate Programming Contest",
    categoryTag: "COMPETITION",
    year: "2024",
    image: "certificates/ecpc2024.png",
    filterGroup: "academic"
  },
  {
    id: "ecpc-2023",
    title: "ECPC 2023 Honorable Mention",
    issuer: "Egyptian Collegiate Programming Contest",
    categoryTag: "COMPETITION",
    year: "2023",
    image: "certificates/ecpc2023.png",
    filterGroup: "academic"
  },
  {
    id: "icpc-community",
    title: "ICPC Community Contribution",
    issuer: "Nile University Student Life",
    categoryTag: "COMMUNITY",
    year: "2024",
    image: "certificates/ICPC_CERTIFICATE.jpg",
    filterGroup: "academic"
  },
  {
    id: "ugrf",
    title: "UGRF 2nd Place Winner",
    issuer: "17th Undergraduate Research Forum",
    categoryTag: "RESEARCH",
    year: "2024",
    image: "certificates/ugrf_Cer.jpg",
    filterGroup: "research"
  },
  {
    id: "virtus-vp",
    title: "Vice President Recognition",
    issuer: "Virtus NU · Student Life",
    categoryTag: "LEADERSHIP",
    year: "2025",
    image: "certificates/VIRTUS_CERTIFICATE.jpg",
    filterGroup: "academic"
  }
];

export const PROOF_OF_WORK = [
  {
    badge: "Published",
    title: "Peer-reviewed Springer research on socioeconomic classification.",
    links: [
      { text: "Read paper ↗", url: "https://doi.org/10.1007/978-3-031-87719-3_16" },
      { text: "Google Scholar ↗", url: "https://scholar.google.com/citations?user=0GaeCUYAAAAJ&hl=en" }
    ]
  },
  {
    badge: "1st ranked",
    title: "FGaiB graduation group project in one of eight faculty committees."
  },
  {
    badge: "ECPC × 2",
    title: "Qualified for the Egyptian Collegiate Programming Contest in 2023 and 2024."
  }
];

export const NEXT_EXPLORATION = {
  title: "What I’m exploring next",
  lead: "I’m deepening my understanding of computer vision, reinforcement learning, and world models.",
  body: "I’m studying how intelligent systems understand visual environments, improve through interaction, and build internal representations for prediction and planning. My long-term interest is connecting these areas to develop agents that can perceive, reason, and make decisions in changing environments.",
  steps: [
    { num: "01", label: "Perceive" },
    { num: "02", label: "Learn" },
    { num: "03", label: "Model" },
    { num: "04", label: "Plan" }
  ]
};
