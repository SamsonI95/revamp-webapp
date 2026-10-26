export type ProjectVisual =
  | { kind: "image"; src: string; alt: string; width: number; height: number }
  | { kind: "cube" }
  | { kind: "mock"; variant: "dashboard" | "fintech" | "shop" | "editorial" };

export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  index: string;
  name: string;
  category: string;
  status:
    | "Live"
    | "Live - Limited Access"
    | "Case study"
    | "Concept"
    | "Interactive";
  summary: string;
  purpose: string;
  role: string;
  stack: string[];
  visual: ProjectVisual;
  liveUrl?: string;
  features?: { label: string; items: string[] };
  secondaryImages?: ProjectImage[];
};

export const profile = {
  name: "Samson Iweibo",
  shortName: "Built by Ebunorun",
  eyebrow: "Independent Frontend Developer · Nigeria",
  currentFocus: "Frontend product interfaces",
  intro:
    "I build engaging web experiences that turn complex ideas into intuitive, accessible interfaces. From product dashboards to interactive experiments, I care about the details that make digital products feel right.",
  github: "https://github.com/SamsonI95",
  email: "",
  linkedin: "",
};

export const projects: Project[] = [
  {
    index: "01",
    name: "WarbleLive",
    category: "Event ticketing and digital experiences",
    status: "Live",
    summary:
      "A ticketing platform designed around discovering events, purchasing tickets, claiming free tickets, and managing attendee experiences.",
    purpose:
      "Give attendees one place to find events, buy or claim tickets, and keep every ticket in a wallet with QR-based validation.",
    role: "Frontend developer",
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Redux Toolkit",
      "RTK Query",
    ],
    visual: {
      kind: "image",
      src: "/AboutUsTicketWallet.png",
      alt: "WarbleLive ticket wallet dashboard",
      width: 758,
      height: 576,
    },
    secondaryImages: [
      {
        src: "/AboutUsDashboard.png",
        alt: "WarbleLive events page with recommended events",
        width: 507,
        height: 368,
      },
      { src: "/Screen1.png", alt: "WarbleLive mobile ticket wallet", width: 393, height: 1136 },
      { src: "/Screen2.png", alt: "WarbleLive mobile trending events", width: 393, height: 1136 },
    ],
    liveUrl: "https://warblelive.com",
  },
  {
    index: "02",
    name: "Ziona Admin Dashboard",
    category: "Admin tools and community management",
    status: "Live - Limited Access",
    summary:
      "A GraphQL-powered administration interface for managing users, circles, contacts, reports, notifications, analytics, and moderation workflows.",
    purpose:
      "Give administrators a structured workspace for users, reports, and moderation without losing track of the data behind each decision.",
    role: "Frontend developer",
    stack: ["Next.js", "TypeScript", "GraphQL", "Tailwind CSS"],
    visual: {
      kind: "image",
      src: "/ziona-admin-screen.png",
      alt: "Ziona admin dashboard",
      width: 774,
      height: 573,
    },
  },
  {
    index: "03",
    name: "NaijaTax",
    category: "Fintech and tax filing",
    status: "Concept",
    summary:
      "A tax filing product concept tailored to Nigerian users, covering tax estimation, taxpayer onboarding, income and deduction records, document uploads, payments, and filing confirmation.",
    purpose:
      "Explore how filing taxes can feel clear, trustworthy, and accessible for individuals who are new to the process.",
    role: "Product and frontend concept",
    stack: [],
    visual: {
      kind: "image",
      src: "/naija-tax-screen.png",
      alt: "NaijaTax interface",
      width: 1365,
      height: 544,
    },
    features: {
      label: "Planned and conceptual scope",
      items: [
        "Tax estimation",
        "Taxpayer onboarding",
        "Income and deduction records",
        "Document uploads",
        "Payments",
        "Filing confirmation",
      ],
    },
  },
  {
    index: "04",
    name: "Coinomad.xyz",
    category: "Crypto and payroll interfaces",
    status: "Live",
    summary:
      "A live MVP built around payroll and crypto-related user experiences, with a focus on clear presentation and modern interactions.",
    purpose:
      "Make payroll and crypto actions understandable through clear presentation and calm, modern interaction patterns.",
    role: "Frontend developer",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    visual: {
      kind: "image",
      src: "/coinomad-screen.png",
      alt: "Coinomad.xyz interface",
      width: 1352,
      height: 679,
    },
    liveUrl: "https://coinomad.xyz",
  },
  {
    index: "05",
    name: "Michaelson",
    category: "Brand-focused web design",
    status: "Case study",
    summary:
      "A website for a Nigerian-owned footwear brand based in the UK, with an emphasis on refined presentation, product storytelling, and a luxury-oriented visual experience.",
    purpose:
      "Present the brand with editorial layouts, elegant typography, and generous whitespace so the products can lead.",
    role: "Frontend developer",
    stack: ["React", "React Router"],
    visual: { 
      kind: "image",
      src: "/michaelson-screen.png",
      alt: "Michaelson Hero screen",
      width: 1352,
      height: 544,
    },
  },
  {
    index: "06",
    name: "Interactive Rubik's Cube",
    category: "Creative coding and 3D interaction",
    status: "Interactive",
    summary:
      "An interactive 3D Rubik's Cube experience demonstrating experimentation with Three.js and browser-based 3D interfaces.",
    purpose:
      "Test how a browser-based 3D object can respond to pointer and keyboard input while staying light enough for everyday pages.",
    role: "Creative developer",
    stack: ["Three.js"],
    visual: { kind: "cube" },
  },
];

export const principles = [
  "Details matter.",
  "Make complex things feel simple.",
  "Build for real people.",
  "Good interfaces should feel effortless.",
];

export const aboutParagraphs = [
  "I'm a frontend developer who enjoys turning ideas into polished, usable digital experiences. Most of my work has been on products rather than isolated landing pages, which means working through real states, real data, and the edge cases that come with them.",
  "I'm comfortable connecting interfaces to APIs, handling application state and authentication, and working with backend concepts when a feature needs them. I'm also drawn to motion, interactive interfaces, and creative coding.",
  "I aim for readable code, responsive layouts, accessibility, and the small details that make an interface easier to use.",
];

export const skillGroups = [
  {
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML and CSS",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "State and data",
    items: ["Redux Toolkit", "RTK Query", "REST API integration", "GraphQL"],
  },
  {
    title: "Interaction and visual development",
    items: ["Framer Motion", "Three.js", "Responsive UI development"],
  },
  {
    title: "Additional experience",
    items: [
      "Node.js and backend fundamentals",
      "Authentication and session handling",
      "Git and GitHub",
      "Formik and Yup",
    ],
  },
];

export const workSteps = [
  {
    title: "Understand",
    body: "Get clear on the product, its users, and the problem the interface needs to solve.",
  },
  {
    title: "Build",
    body: "Translate the design into responsive, maintainable components and connect the interface to real data.",
  },
  {
    title: "Refine",
    body: "Test the experience, improve the details, and make sure the finished product works across screen sizes.",
  },
];
