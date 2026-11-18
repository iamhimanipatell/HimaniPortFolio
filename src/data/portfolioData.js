/**
 * =============================================================================
 * HIMANI PATEL — PORTFOLIO DATA SOURCE
 * =============================================================================
 * All portfolio information is centralized here for quick and simple updates.
 * Modify details, projects, timeline items, or skills directly in this file.
 */

export const personalInfo = {
  name: "Himani Patel",
  role: "Software Engineer",
  location: "Hyderabad, India",
  timezone: "Asia/Kolkata",
  pitch: "Software Engineer based in Hyderabad building full stack web apps with React and .NET Core.",
  bio: [
    "Software Engineer based in Hyderabad with a B.Tech in Computer Science Engineering (CSE). Builds full stack web apps with React and .NET Core, delivering clean, scalable, and intuitive digital solutions."
  ],
  openToRoles: [
    "SDE",
    "Full Stack Developer",
    "Backend Developer",
    "UI/UX & Figma"
  ],
  email: "himanipatel.riya@gmail.com",
  linkedin: "https://linkedin.com/in/himanipatelll",
  github: "https://github.com/iamhimanipatell",
  heroImage: "/himani1.png",
  avatar: "/himani2.png",
  resumeUrl: "#contact", // or PDF path if provided
  availability: "Available for Software Engineering Roles",
};

export const keyStats = [
  {
    id: "stat-1",
    value: "25%",
    label: "Page Load Reduction",
    desc: "Cut page load time by 25% via optimized component rendering and asset compression.",
    suffix: "Faster",
  },
  {
    id: "stat-2",
    value: "40%",
    label: "Content Upload Speedup",
    desc: "Reduced upload processing time by 40% with streamlined backend workflows.",
    suffix: "Gain",
  },
  {
    id: "stat-3",
    value: "15+",
    label: "Agents Supported",
    desc: "Engineered real-time call-tracking dashboards actively utilized by 15+ agents.",
    suffix: "Active",
  },
  {
    id: "stat-4",
    value: "Agile",
    label: "Team Leadership",
    desc: "Led an Agile team as Team Leader to successfully deliver an IoT monitoring system.",
    suffix: "Delivered",
  },
];

export const experienceData = [
  {
    id: "cognizant-pat",
    role: "Programmer Analyst Trainee (PAT)",
    company: "Cognizant",
    location: "Hyderabad, India",
    period: "Aug 2026 - Present",
    current: true,
    type: "Full-time",
    summary: "Working as a Programmer Analyst Trainee focusing on enterprise full-stack development, software craftsmanship, and scalable cloud-ready architectures.",
    responsibilities: [
      "Contributing to full-stack engineering initiatives utilizing modern software frameworks and enterprise best practices.",
      "Collaborating with cross-functional Agile engineering squads to design, review, and ship reliable software components.",
      "Enhancing code quality, automated testing, and backend performance for enterprise applications."
    ],
    tech: [".NET Core", "C#", "SQL Server", "React.js", "Enterprise Architecture", "RESTful APIs"],
  },
  {
    id: "cognizant-intern",
    role: "IoT .NET Full-Stack Intern (Team Leader)",
    company: "Cognizant",
    location: "Chennai, India",
    period: "Feb 2026 - May 2026",
    current: false,
    type: "Internship",
    summary: "Built an IoT-based Inventory Bin Monitoring System with React.js, C#, ASP.NET Core Web API, EF Core and SQL Server; led the team as Team Leader in Agile.",
    responsibilities: [
      "Architected and deployed an IoT-based Inventory Bin Monitoring System to provide real-time status and sensor tracking.",
      "Engineered high-throughput backend services using C#, ASP.NET Core Web API, EF Core, and SQL Server.",
      "Developed a clean, responsive frontend dashboard in React.js for operational visibility and threshold alert management.",
      "Served as Team Leader in Agile methodology, orchestrating daily standups, sprint milestones, and code reviews."
    ],
    tech: ["React.js", "C#", "ASP.NET Core Web API", "EF Core", "SQL Server", "IoT Systems", "Agile Leadership"],
  },
  {
    id: "nniit-intern",
    role: "Full-Stack Web Developer Intern",
    company: "NNIIT",
    location: "Hyderabad, India",
    period: "Dec 2025 - Feb 2026",
    current: false,
    type: "Internship",
    summary: "Built a complete multi-page website alone in 4 weeks with React and GSAP; real-time call-tracking dashboards for 15+ agents; blog module that cut upload time by 40%; page load time cut by 25%.",
    responsibilities: [
      "Independently designed and developed a full-featured multi-page production website from scratch within a 4-week deadline using React and GSAP.",
      "Constructed live call-tracking dashboards serving 15+ operational agents with real-time state synchronization.",
      "Engineered an optimized blog management and upload module that slashed content upload turnaround by 40%.",
      "Achieved a 25% reduction in overall page load time through strategic asset minification, lazy loading, and bundle optimization."
    ],
    tech: ["React.js", "GSAP", "JavaScript", "Real-time Dashboards", "Performance Optimization", "Web APIs"],
  },
];

export const projectsData = [
  // --- NEW FEATURED PROJECTS AT THE TOP ---
  {
    id: "pet-boarding",
    title: "Pet-Boarding & Hostel",
    featured: true,
    tagline: "Full-Stack Pet Care & Booking Management Platform",
    category: "Full Stack",
    image: "/PetBoardingAndHostel.png",
    description: "Comprehensive booking platform featuring intuitive customer reservation workflows, dedicated administrator control panel, live analytical dashboard metrics, and strict booking status business rules.",
    highlights: [
      "Engineered robust backend with ASP.NET Core Web API and Entity Framework Core connected to SQL Server.",
      "Secured API endpoints and user sessions using JSON Web Tokens (JWT) and role-based permissions.",
      "Built dynamic customer booking flow paired with an administrative console for occupancy tracking and status updates.",
      "Crafted an interactive, mobile-responsive UI with React.js and modern component architecture."
    ],
    tech: ["ASP.NET Core", "SQL Server", "React.js", "JWT", "Entity Framework Core", "REST API"],
    githubUrl: "https://github.com/iamhimanipatell/Pet-Boarding",
    liveUrl: "https://pet-boarding-hql3.vercel.app/",
  },
  {
    id: "stitch-noor",
    title: "Stitch Noor",
    featured: true,
    tagline: "MERN Stack E-Commerce Fashion Platform",
    category: "Full Stack",
    image: "/Stitch_Noor.png",
    description: "Full-stack e-commerce platform built on the MERN stack with segregated admin and user panels, role-based access control, multi-part image uploads, and fluid shopping interactions.",
    highlights: [
      "Developed full-stack architecture using React.js, Node.js, Express.js, and MongoDB.",
      "Implemented secure JWT authentication and authorization distinguishing customer and admin privileges.",
      "Integrated Multer middleware for streamlined product image uploads and media management.",
      "Designed an earth-toned, editorial aesthetic with fluid animation states and responsive layout."
    ],
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Multer", "Tailwind CSS"],
    githubUrl: "https://github.com/iamhimanipatell/Stitch-Noor-MERN",
    liveUrl: "https://stitch-noor-mern.vercel.app/",
  },

  // --- PRESERVED ORIGINAL PORTFOLIO PROJECTS WITH EXACT LINKS ---
  {
    id: "blossom-planner",
    title: "Blossom Planner",
    featured: false,
    tagline: "Mindful Productivity & Schedule Management Web App",
    category: "Frontend",
    image: "/BlossomPlanner.png",
    description: "A beautifully designed personal planning website tailored for students and young professionals. It helps users stay organized, manage daily tasks, set goals, and track progress with a clean and calming interface.",
    highlights: [
      "Tailored for students and young professionals to balance daily productivity and long-term milestones.",
      "Calm, aesthetic interface focusing on distraction-free task management.",
      "Deployed and optimized for rapid global edge delivery on Vercel."
    ],
    tech: ["React.js", "JavaScript", "CSS3", "Vercel"],
    githubUrl: "https://github.com/iamhimanipatell",
    liveUrl: "https://blossom-planner.vercel.app/",
  },
  {
    id: "react-gift-shop",
    title: "Gift Shop React (Charm & Cheer)",
    featured: false,
    tagline: "Vibrant E-Commerce Gift Ordering Platform",
    category: "Frontend",
    image: "/ReactGiftShop.png",
    description: "Charm & Cheer – Gift Shop is a sleek and responsive web app built using React, designed to make gifting easier and more joyful. Users can browse curated gift collections, manage cart state, and experience seamless navigation.",
    highlights: [
      "Curated shopping categories with dynamic product browsing and reactive cart counter.",
      "Vibrant visual aesthetics and optimized client-side state transitions in React.",
      "Fully responsive mobile and desktop shopping workflow."
    ],
    tech: ["React.js", "JavaScript", "CSS Modules", "Render"],
    githubUrl: "https://github.com/iamhimanipatell",
    liveUrl: "https://gift-shoppp.onrender.com/",
  },
  {
    id: "modern-clothing-ux-1",
    title: "Modern Clothing UX 1",
    featured: false,
    tagline: "High-Fidelity Fashion Store Layout & Research",
    category: "UI/UX",
    image: "/Uiux.png",
    description: "Modern and user-centric online clothing store layout designed using Figma. The project involved thorough user research, competitor analysis, wireframing, and high-fidelity prototyping to ensure an intuitive shopping journey.",
    highlights: [
      "In-depth user research and competitor benchmarking to optimize customer conversion.",
      "Interactive high-fidelity wireframes featuring smart product filters and streamlined checkout.",
      "Engineered consistent typography, spacing hierarchy, and component design tokens."
    ],
    tech: ["Figma", "UI/UX Design", "Wireframing", "User Research", "Prototyping"],
    githubUrl: null,
    liveUrl: "https://www.figma.com/design/1kxXBkpDkhOGNJPY4s8Zlz/ca-4-high-wireframe",
    isFigma: true,
  },
  {
    id: "modern-clothing-ux-2",
    title: "Clothing Website Ui/Ux 2",
    featured: false,
    tagline: "Design System & Interactive Prototype",
    category: "UI/UX",
    image: "/uiux2.png",
    description: "User-centric online clothing store layout designed using Figma, focusing on intuitive navigation, visual balance, modern product grids, and frictionless checkout prototyping.",
    highlights: [
      "Comprehensive design system with reusable UI components and color variants.",
      "Interactive micro-interactions mapped across mobile and tablet viewport sizes.",
      "Focus on accessible contrast ratios and frictionless navigation."
    ],
    tech: ["Figma", "UI/UX", "Design Systems", "Interactive Prototyping"],
    githubUrl: null,
    liveUrl: "https://www.figma.com/design/DX4ts8bKtfC4Kbh8fmszOe/ca4-sem06?node-id=0-1&t=UBTKoopdRODfZlFF-1",
    isFigma: true,
  },
  {
    id: "stitch-noor-legacy",
    title: "Stitch Noor (Netlify Edition)",
    featured: false,
    tagline: "Original Fashion Brand Web Experience",
    category: "Frontend",
    image: "/Stitch_Noor.png",
    description: "Original live fashion storefront deployed on Netlify, blending earth-toned aesthetics, editorial typography, and fluid responsive styling.",
    highlights: [
      "Preserved live deployment from legacy portfolio with exact Netlify URL.",
      "Minimalist earth-toned design system and interactive product catalog showcase.",
    ],
    tech: ["React.js", "JavaScript", "CSS3", "Netlify"],
    githubUrl: "https://github.com/iamhimanipatell",
    liveUrl: "https://welcometostitchnoor.netlify.app/",
  },
];

export const skillsData = {
  "Languages & Code": [
    "C#",
    "JavaScript",
    "SQL",
    "Python"
  ],
  "Frontend": [
    "React.js",
    "HTML",
    "CSS"
  ],
  "Backend & Integration": [
    "Node.js",
    ".NET Core",
    "ASP.NET Web API",
    "Entity Framework Core",
    "API integration"
  ],
  "Database": [
    "SQL Server",
    "MongoDB"
  ],
  "DevOps & Cloud": [
    "Azure",
    "Docker",
    "Git/GitHub"
  ],
  "Design": [
    "UI/UX",
    "Figma",
    "user research",
    "user experience"
  ],
  "Tools": [
    "Postman"
  ],
  "AI (familiar)": [
    "AI tools",
    "Generative AI",
    "LLMs",
    "RAG",
    "Agentic AI"
  ],
  "Practices": [
    "Agile / Scrum Leadership",
    "Performance Tuning",
    "Clean Architecture"
  ]
};

export const marqueeSkills = [
  ".NET Core", "React.js", "C#", "ASP.NET Core Web API", "Node.js", "SQL Server",
  "MongoDB", "GSAP & ScrollTrigger", "Tailwind CSS", "IoT Monitoring", "TypeScript",
  "EF Core", "Express.js", "Agile Leadership", "RESTful APIs", "JWT Security", "Figma UI/UX"
];

export const educationData = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "Lovely Professional University",
  period: "2022 - 2026",
  cgpa: "7.68",
  location: "Punjab, India",
  description: "Comprehensive coursework in Data Structures, Algorithms, Software Engineering, Database Systems, Cloud Computing, and Web Technologies. Actively built full-stack solutions and held Agile team leadership roles.",
};

export const certificatesData = [
  {
    id: "cert-frontend",
    title: "Frontend Web Development",
    issuer: "Coursera",
    image: "/images/Frontendwebdevelopmentcertificate.png",
    description: "In-depth coursework and project implementations in modern HTML, CSS, JavaScript, and React.",
  },
  {
    id: "cert-dsa",
    title: "Data Structures & Algorithms",
    issuer: "Ebox",
    image: "/images/DataStructurescertificate.png",
    description: "Rigorous problem-solving, algorithmic efficiency, complexity analysis, and data structure optimizations.",
  },
  {
    id: "cert-cloud",
    title: "Cloud Computing Certification",
    issuer: "NPTEL",
    image: "/images/cloudcomputingcertificate.png",
    description: "Distributed architectures, virtualization, cloud delivery models, and scalable computing principles.",
  },
];

export const whyWorkWithMe = [
  {
    id: "why-1",
    scriptTitle: "Full-Stack Builder",
    heading: "End-to-End Delivery",
    description: "Hands-on engineering across React.js, ASP.NET Core, Node.js, SQL Server, and MongoDB.",
    rotation: "-2deg",
    tape: "washi-pink-gingham",
  },
  {
    id: "why-2",
    scriptTitle: "Performance-Minded",
    heading: "Speed & Optimization",
    description: "Proven track record cutting page load time by 25% and content upload time by 40%.",
    rotation: "1.5deg",
    tape: "washi-gold-dotted",
  },
  {
    id: "why-3",
    scriptTitle: "Team Player & Leader",
    heading: "Agile Ownership",
    description: "Served as Team Leader in an Agile environment to build and ship an IoT monitoring system.",
    rotation: "-1deg",
    tape: "washi-cream-floral",
  },
  {
    id: "why-4",
    scriptTitle: "Quick Learner",
    heading: "Adaptive Engineering",
    description: "Rapid mastery of IoT telemetry, cloud edge deployments, enterprise APIs, and modern UI systems.",
    rotation: "2deg",
    tape: "washi-pink-gingham",
  },
];

export const servicesData = [
  {
    id: "service-1",
    index: "01",
    title: "Full-Stack Web Applications",
    scriptTag: "Modern Architectures",
    description: "Building responsive, resilient web platforms with React frontends, robust state management, and enterprise-grade backend infrastructure.",
    deliverables: ["Component-Driven React UIs", "Scalable Database Schemas", "Auth & State Workflows"],
  },
  {
    id: "service-2",
    index: "02",
    title: "REST APIs & Backend Systems",
    scriptTag: "High-Throughput Services",
    description: "Architecting modular, secure backend services using C#, ASP.NET Core Web API, Node.js, EF Core, and JWT authentication.",
    deliverables: ["Role-Based Access Control", "Entity Framework Core", "Clean Architecture & Indexing"],
  },
  {
    id: "service-3",
    index: "03",
    title: "Dashboards & Real-Time UIs",
    scriptTag: "Live Telemetry & Visuals",
    description: "Designing live data dashboards and operational interfaces that empower active teams and agents with fluid animations.",
    deliverables: ["Real-Time Call Tracking", "GSAP & ScrollTrigger Animations", "Responsive Mobile-First UX"],
  },
  {
    id: "service-4",
    index: "04",
    title: "IoT Monitoring Systems",
    scriptTag: "Hardware to Cloud",
    description: "Engineering connected IoT solutions (like inventory bin monitoring) tracking live sensor telemetry, alert thresholds, and automated rules.",
    deliverables: ["Sensor Data Ingestion", "Automated Business Rules", "Agile Team Sprint Delivery"],
  },
];

