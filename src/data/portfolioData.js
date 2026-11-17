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
  pitch: "I build full-stack products with .NET Core, Node.js, React, SQL Server and MongoDB, plus IoT monitoring systems.",
  bio: [
    "Software Engineer based in Hyderabad with hands-on experience delivering scalable full-stack web applications and connected IoT solutions.",
    "Specialized in architecting high-performance backends (.NET Core, Node.js, SQL Server, MongoDB) and fluid, modern frontends with React and GSAP.",
    "Proven track record of optimizing page load times by 25%, slashing content upload times by 40%, and spearheading Agile sprints to deliver enterprise-grade systems."
  ],
  email: "himanipatel.riya@gmail.com",
  linkedin: "https://linkedin.com/in/himanipatelll",
  github: "https://github.com/iamhimanipatell",
  avatar: "/finalestphot.JPG",
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
  Languages: [
    { name: "C#", level: 90, icon: "Code2" },
    { name: "JavaScript (ES6+)", level: 95, icon: "FileCode" },
    { name: "TypeScript", level: 80, icon: "FileCode2" },
    { name: "C++", level: 80, icon: "Cpu" },
    { name: "Python", level: 75, icon: "Terminal" },
    { name: "SQL", level: 88, icon: "Database" },
    { name: "HTML5 & CSS3", level: 95, icon: "Layout" },
  ],
  Backend: [
    { name: ".NET Core", level: 90, icon: "Server" },
    { name: "ASP.NET Core Web API", level: 92, icon: "Server" },
    { name: "Node.js", level: 88, icon: "Terminal" },
    { name: "Express.js", level: 85, icon: "Layers" },
    { name: "Entity Framework Core", level: 88, icon: "Database" },
    { name: "RESTful API Design", level: 92, icon: "Globe" },
    { name: "JWT Authentication", level: 90, icon: "ShieldCheck" },
    { name: "Multer File Uploads", level: 85, icon: "UploadCloud" },
  ],
  Frontend: [
    { name: "React.js", level: 95, icon: "Layers" },
    { name: "GSAP & ScrollTrigger", level: 90, icon: "Sparkles" },
    { name: "Tailwind CSS", level: 95, icon: "Palette" },
    { name: "Responsive UI", level: 95, icon: "Smartphone" },
    { name: "Vite", level: 90, icon: "Zap" },
    { name: "State Management", level: 85, icon: "Sliders" },
  ],
  Databases: [
    { name: "SQL Server (SSMS)", level: 90, icon: "Database" },
    { name: "MongoDB", level: 85, icon: "Database" },
    { name: "Mongoose ODM", level: 85, icon: "Boxes" },
    { name: "LINQ Queries", level: 88, icon: "Search" },
    { name: "Schema Design & Indexing", level: 84, icon: "Table" },
  ],
  IoT: [
    { name: "IoT Bin Monitoring", level: 90, icon: "Radio" },
    { name: "Sensor Telemetry", level: 85, icon: "Activity" },
    { name: "Real-time Data Streams", level: 85, icon: "Wifi" },
    { name: "Hardware-to-Cloud Integration", level: 82, icon: "Cpu" },
  ],
  "Cloud & DevOps": [
    { name: "Vercel", level: 92, icon: "Cloud" },
    { name: "Netlify", level: 90, icon: "CloudRain" },
    { name: "Render", level: 85, icon: "Server" },
    { name: "Git & GitHub", level: 92, icon: "GitBranch" },
    { name: "Cloud Computing Basics", level: 80, icon: "CloudLightning" },
  ],
  Practices: [
    { name: "Agile / Scrum Leadership", level: 92, icon: "Users" },
    { name: "Performance Optimization", level: 90, icon: "Gauge" },
    { name: "Data Structures & Algorithms", level: 85, icon: "Binary" },
    { name: "UI/UX Prototyping (Figma)", level: 88, icon: "Figma" },
    { name: "Clean Architecture", level: 88, icon: "CheckCircle2" },
  ],
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

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/iamhimanipatell",
    handle: "@iamhimanipatell",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/himanipatelll",
    handle: "in/himanipatelll",
  },
  {
    name: "Email",
    url: "mailto:himanipatel.riya@gmail.com",
    handle: "himanipatel.riya@gmail.com",
  },
];
