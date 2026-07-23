import type { Localized } from "./i18n";

/* ── Identity / contact ───────────────────────────────────────────── */
export const PROFILE = {
  name: "Roque Othacehe",
  role: { es: "Fullstack Developer", en: "Fullstack Developer" } as Localized,
  specialization: "Spring Boot & Next.js Developer",
  location: { es: "Mar del Plata, Argentina", en: "Mar del Plata, Argentina" } as Localized,
  email: "roqueotha04@gmail.com",
  whatsapp: "https://wa.me/5492236680996",
  whatsappLabel: "+54 9 223 668-0996",
  github: "https://github.com/roqueotha04",
  linkedin: "https://linkedin.com/in/roque-othacehe-a15085243",
  studio: "https://estudiove.com",
  photo: "/me/me.jpeg",
  cv: { es: "/Cv - Roque Othacehe.pdf", en: "/Cv - Roque Othacehe - EN.pdf" } as Localized,
};

/* ── Navbar ───────────────────────────────────────────────────────── */
export const NAV = {
  links: [
    { id: "hero", label: { es: "Inicio", en: "Home" } as Localized },
    { id: "experience", label: { es: "Experiencia", en: "Experience" } as Localized },
    { id: "projects", label: { es: "Proyectos", en: "Projects" } as Localized },
    { id: "stack", label: { es: "Stack", en: "Stack" } as Localized },
    { id: "contact", label: { es: "Contacto", en: "Contact" } as Localized },
  ],
};

/* ── Hero ─────────────────────────────────────────────────────────── */
export const HERO = {
  status: { es: "Disponible para proyectos", en: "Available for projects" } as Localized,
  downloadCv: { es: "Descargar CV", en: "Download CV" } as Localized,
  githubBtn: "GitHub",
  linkedinBtn: "LinkedIn",
  marqueeTech: ["java", "springboot", "nextjs", "react", "postgresql", "docker", "aws"],
};

/* ── About ────────────────────────────────────────────────────────── */
export const ABOUT = {
  label: { es: "Sobre Mí", en: "About Me" } as Localized,
  subtitle: {
    es: "Desarrollador Fullstack y Docente",
    en: "Fullstack Developer & Educator",
  } as Localized,
  paragraphs: [
    {
      es: "Desarrollador Fullstack con experiencia en proyectos utilizando Spring Boot, Next.js y AWS, con un fuerte foco en desarrollo backend, principios de Clean Code y arquitecturas escalables.",
      en: "Fullstack developer with hands-on experience building projects with Spring Boot, Next.js, and AWS, with a strong focus on backend development, Clean Code principles, and scalable architectures.",
    },
    {
      es: "Combino mi experiencia como desarrollador con mi rol docente en UTN, donde acompaño la formación de estudiantes en desarrollo end-to-end.",
      en: "I combine my experience as a developer with my teaching role at UTN, where I mentor students in end-to-end development.",
    },
  ] as Localized[],
  tags: ["Clean Code", "Mentoring", "SOLID", "AI-assisted"],
};

/* ── Experience ───────────────────────────────────────────────────── */
export type ExperienceEntry = {
  logo: string;
  role: Localized;
  company: string;
  companyUrl?: string;
  period: Localized;
  bullets: Localized[];
};

export const EXPERIENCE = {
  label: { es: "Experiencia Profesional", en: "Professional Experience" } as Localized,
  entries: [
    {
      logo: "/experience/Dark Logo with Bright Orange Accent (5).jpg",
      role: { es: "Desarrollador Full Stack", en: "Fullstack Developer" },
      company: "Estudio Ve — estudiove.com",
      companyUrl: "https://estudiove.com",
      period: { es: "02/2026 – Actualidad", en: "02/2026 – Present" },
      bullets: [
        {
          es: "Desarrollo de aplicaciones web con Next.js, implementando arquitecturas full stack desde bases de datos SQL hasta interfaces de usuario responsivas.",
          en: "Web application development with Next.js, implementing full stack architectures from SQL databases to responsive user interfaces.",
        },
        {
          es: "Integración de IA mediante Claude Code y desarrollo de skills personalizadas para automatización de flujos de trabajo.",
          en: "AI integration using Claude Code and development of custom skills for workflow automation.",
        },
        {
          es: "Implementación de APIs y servicios de terceros (TN) para soluciones de negocio end-to-end.",
          en: "Implementation of APIs and third-party services (TN) for end-to-end business solutions.",
        },
      ],
    },
    {
      logo: "/experience/logo utn.png",
      role: { es: "Docente de Programación", en: "Programming Instructor" },
      company: "Universidad Tecnológica Nacional",
      period: { es: "02/2024 – Actualidad", en: "02/2024 – Present" },
      bullets: [
        {
          es: "Docente de programación en la Universidad Tecnológica Nacional, con foco en desarrollo backend.",
          en: "Programming instructor at the National Technological University, focused on backend development.",
        },
        {
          es: "Experiencia con grupos de hasta 100 alumnos en materias como Programación III (Spring Boot), Programación IV (Angular), Bases de datos (MySQL) y Metodología de sistemas (Scrum y Agile).",
          en: "Experience with groups of up to 100 students in subjects such as Programming III (Spring Boot), Programming IV (Angular), Databases (MySQL), and Systems Methodology (Scrum and Agile).",
        },
        {
          es: "Experiencia en talleres de programación con lenguajes como Excel, Python e IA.",
          en: "Experience in programming workshops with Excel, Python, and AI.",
        },
      ],
    },
  ] as ExperienceEntry[],
};

/* ── Projects ─────────────────────────────────────────────────────── */
export type Project = {
  id: string;
  title: string | Localized;
  badge?: Localized;
  description: Localized<string[]>;
  links: { label: Localized; url: string }[];
  tech: string[];
  images: string[];
  note?: Localized;
};

export const PROJECTS_INTRO = {
  label: { es: "Proyectos Destacados", en: "Featured Projects" } as Localized,
  intro: {
    es: "Una selección de mis proyectos más relevantes. Para conocer más de mi trabajo pueden visitar estudiove.com",
    en: "A selection of my most relevant projects. To see more of my work, visit estudiove.com",
  } as Localized,
};

export const PROJECTS: Project[] = [
  {
    id: "stockeo",
    title: "Stockeo",
    badge: { es: "En Producción", en: "In Production" },
    description: {
      es: [
        "SaaS B2B para gestión de stock e insumos, con importación de datos desde Excel/PDF y cobros integrados vía Mercado Pago.",
        "Frontend en Next.js consumiendo una API REST propia, con el backend en Java / Spring Boot desplegado en AWS.",
      ],
      en: [
        "B2B SaaS for stock and supplies management, with data import from Excel/PDF and integrated payments via Mercado Pago.",
        "Next.js frontend consuming a custom REST API, with a Java / Spring Boot backend deployed on AWS.",
      ],
    },
    links: [{ label: { es: "Ver stockeo.app →", en: "Visit stockeo.app →" }, url: "https://stockeo.app" }],
    tech: ["nextjs", "typescript", "java", "springboot", "postgresql", "aws", "mercadopago"],
    images: ["/projects/Stockeo 1.webp"],
  },
  {
    id: "avi-salud",
    title: "AVI Salud",
    badge: { es: "En Producción", en: "In Production" },
    description: {
      es: [
        "Sistema de gestión interno para una empresa de internación domiciliaria, centralizando pacientes, personal de salud, turnos e incidencias operativas, con alertas en tiempo real ante ausencias y retrasos.",
        "Incluye una web pública en Next.js conectada al sistema, construido end-to-end con Java, Spring Boot y AWS.",
      ],
      en: [
        "Internal management system for a home-hospitalization company, centralizing patients, healthcare staff, shifts, and operational incidents, with real-time alerts for absences and delays.",
        "Includes a public website built in Next.js connected to the system, developed end-to-end with Java, Spring Boot, and AWS.",
      ],
    },
    links: [
      { label: { es: "Ver avisalud.com.ar →", en: "Visit avisalud.com.ar →" }, url: "https://avisalud.com.ar" },
    ],
    tech: ["nextjs", "java", "springboot", "springsecurity", "postgresql", "aws"],
    images: ["/projects/Avi Salud 2.webp"],
    note: {
      es: "El enlace corresponde a la web pública; el sistema de gestión (turnos, personal, insumos, balance) es interno.",
      en: "The link points to the public website; the management system (shifts, staff, supplies, balance) is internal.",
    },
  },
  {
    id: "felton",
    title: "Felton",
    badge: { es: "Producción", en: "Production" },
    description: {
      es: [
        "E-commerce desarrollado end-to-end para Felton, un negocio de venta de ropa de alta calidad. Construido con Next.js, TypeScript y Tailwind CSS, con foco en una experiencia de compra cuidada y código de calidad profesional.",
        "Integración completa con la API de Tienda Nube para gestión de catálogo, carrito y procesamiento de pagos. Desarrollado en equipo dentro de Estudio Ve, aplicando componentización, buenas prácticas y flujo de trabajo colaborativo.",
      ],
      en: [
        "End-to-end e-commerce built for Felton, a premium clothing brand. Developed with Next.js, TypeScript, and Tailwind CSS, focused on a refined shopping experience and professional-quality code.",
        "Full integration with the Tienda Nube API for catalog management, cart, and payment processing. Developed collaboratively within Estudio Ve, applying componentization, best practices, and team workflow.",
      ],
    },
    links: [{ label: { es: "Ver felton.ar →", en: "Visit felton.ar →" }, url: "https://felton.ar" }],
    tech: ["nextjs", "typescript", "tailwind"],
    images: ["/projects/Felton web1.webp"],
  },
  {
    id: "estudio-ve",
    title: "Estudio Ve",
    badge: { es: "Producción", en: "Production" },
    description: {
      es: [
        "Sitio web desarrollado end-to-end para la venta y exposición de Estudio Ve, una agencia de servicios digitales. Un proyecto que representa la identidad técnica y visual del estudio, construido con Next.js, TypeScript y Tailwind CSS.",
        "Implementación de Prisma ORM para gestión de base de datos y sistema de blogs dinámicos. Arquitectura escalable, SEO optimizado y rendimiento superior como pilares del proyecto.",
      ],
      en: [
        "Website developed end-to-end for the sales and exposure of Estudio Ve, a digital services agency. A project that represents the studio's technical and visual identity, built with Next.js, TypeScript, and Tailwind CSS.",
        "Implementation of Prisma ORM for database management and a dynamic blog system. Scalable architecture, optimized SEO, and superior performance as core pillars of the project.",
      ],
    },
    links: [{ label: { es: "Ver estudiove.com →", en: "Visit estudiove.com →" }, url: "https://estudiove.com" }],
    tech: ["nextjs", "typescript", "tailwind"],
    images: ["/projects/Estudio Ve web.webp"],
  },
  {
    id: "superherogame",
    title: { es: "Proyecto Final UTN", en: "UTN Final Project" },
    badge: { es: "Producción", en: "Production" },
    description: {
      es: [
        "Plataforma de batalla de superhéroes utilizando Spring Boot 3 y Angular. Focalizado en la creación de un sistema de usuarios real, con registro seguro, cifrado de contraseñas con BCrypt y validación de cuentas mediante envío de correos automáticos con Brevo.",
        "Infraestructura desplegada en la nube (Vercel/Render/Neon), implementé un sistema de health-checks con Uptime Robot y warm-ups automáticos, bajando la latencia de 140 ms a 60 ms comparado al backend anterior.",
      ],
      en: [
        "Superhero battle platform built with Spring Boot 3 and Angular. Focused on creating a real user system with secure registration, BCrypt password encryption, and account validation via automated emails using Brevo.",
        "Cloud-deployed infrastructure (Vercel/Render/Neon), where I implemented a health-check system with Uptime Robot and automated warm-ups, reducing latency from 140 ms to 60 ms compared to the previous backend.",
      ],
    },
    links: [
      { label: { es: "Ver Demo en Vivo →", en: "View Live Demo →" }, url: "https://superherogame-xi.vercel.app/" },
      {
        label: { es: "Backend repo en Github →", en: "Backend repo on Github →" },
        url: "https://github.com/Roqueotha04/SuperHeroGame-Backend",
      },
      {
        label: { es: "Frontend repo en Github →", en: "Frontend repo on Github →" },
        url: "https://github.com/Tincho1612/SuperHeroGames",
      },
    ],
    tech: ["java", "springboot", "postgresql", "docker", "angular", "html5", "css", "typescript"],
    images: ["/projects/SuperHeroGame.webp"],
  },
  {
    id: "book-loan",
    title: "Book Loan System",
    description: {
      es: [
        "Sistema de gestión de préstamos bibliotecarios. API REST diseñada bajo Clean Architecture con un fuerte enfoque en la integridad de datos y seguridad. Implementa Role-Based Access Control (RBAC) con Spring Security 6 para la gestión de permisos diferenciados entre administradores, bibliotecarios y usuarios.",
        "Proyecto orientado a altos estándares de calidad de software: cuenta con cobertura de tests unitarios superior al 80% (JaCoCo), validaciones de negocio estrictas mediante Bean Validation y documentación técnica interactiva con Swagger/OpenAPI.",
      ],
      en: [
        "Library loan management system. REST API designed under Clean Architecture with a strong focus on data integrity and security. Implements Role-Based Access Control (RBAC) with Spring Security 6 to manage permissions for admins, librarians, and users.",
        "Project oriented towards high software quality standards: features unit test coverage exceeding 80% (JaCoCo), strict business validations using Bean Validation, and interactive technical documentation with Swagger/OpenAPI.",
      ],
    },
    links: [
      { label: { es: "Explorar en Github →", en: "Explore on Github →" }, url: "https://github.com/Roqueotha04/book-loan-system" },
    ],
    tech: ["java", "springboot", "springsecurity", "mysql", "junit", "docker"],
    images: ["/projects/Book-Loan.webp"],
    note: {
      es: "Nota: la Swagger UI puede consultarse en /swagger-ui.html al desplegar el código localmente.",
      en: "Note: Swagger UI can be accessed at /swagger-ui.html when deploying the code locally.",
    },
  },
];

/* ── Stack ────────────────────────────────────────────────────────── */
export const STACK_INTRO = {
  label: { es: "Habilidades Técnicas", en: "Technical Skills" } as Localized,
};

/* ── Contact ──────────────────────────────────────────────────────── */
export const CONTACT = {
  label: { es: "Conectemos", en: "Connect" } as Localized,
  title: {
    es: "¿Listo para el siguiente despliegue?",
    en: "Ready for the next deploy?",
  } as Localized,
  lead: {
    es: "Si buscás un desarrollador enfocado en arquitecturas robustas, contactate conmigo si te interesa.",
    en: "If you are looking for a developer focused on robust architectures, contact me if you are interested.",
  } as Localized,
  whatsappBtn: { es: "WhatsApp", en: "WhatsApp" } as Localized,
  emailBtn: { es: "Email Directo", en: "Direct Email" } as Localized,
  copiedToast: {
    es: "¡EMAIL COPIADO AL PORTAPAPELES!",
    en: "EMAIL COPIED TO CLIPBOARD!",
  } as Localized,
};

/* ── Footer ───────────────────────────────────────────────────────── */
export const FOOTER = {
  copyright: "© 2026 ROQUE OTHACEHE",
  tagline: {
    es: "Construyendo arquitecturas escalables.",
    en: "Building scalable architectures.",
  } as Localized,
  stackLabel: { es: "Stack del Sitio", en: "Site Stack" } as Localized,
  siteTech: "Next.js 16",
  status: { es: "SISTEMA ONLINE", en: "SYSTEM ONLINE" } as Localized,
};
