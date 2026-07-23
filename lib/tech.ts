import type { IconType } from "react-icons";
import { FaJava, FaAws } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiApachemaven,
  SiSpringboot,
  SiSpring,
  SiHibernate,
  SiSpringsecurity,
  SiJsonwebtokens,
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiGithubactions,
  SiDocker,
  SiGit,
  SiPostman,
  SiJunit5,
  SiSonarqubeserver,
  SiOwasp,
  SiMercadopago,
} from "react-icons/si";

export type Tech = {
  slug: string;
  label: string;
  /** react-icons component, or null → renders as a typographic chip. */
  icon: IconType | null;
  /** Brand color revealed on hover (chips fall back to copper). */
  color: string;
};

const COPPER = "#a87a42";

/** Master registry: single source of truth for every stack logo. */
export const TECH: Record<string, Tech> = {
  // Languages
  java: { slug: "java", label: "Java", icon: FaJava, color: "#ED8B00" },
  sql: { slug: "sql", label: "SQL", icon: null, color: COPPER },
  typescript: { slug: "typescript", label: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  javascript: { slug: "javascript", label: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },

  // Backend
  maven: { slug: "maven", label: "Maven", icon: SiApachemaven, color: "#C71A36" },
  springboot: { slug: "springboot", label: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
  springdata: { slug: "springdata", label: "Spring Data", icon: SiSpring, color: "#6DB33F" },
  hibernate: { slug: "hibernate", label: "JPA / Hibernate", icon: SiHibernate, color: "#BCAE79" },
  springsecurity: { slug: "springsecurity", label: "Spring Security", icon: SiSpringsecurity, color: "#6DB33F" },
  jwt: { slug: "jwt", label: "JWT", icon: SiJsonwebtokens, color: "#f2f2f2" },

  // Frontend
  nextjs: { slug: "nextjs", label: "Next.js", icon: SiNextdotjs, color: "#f2f2f2" },
  react: { slug: "react", label: "React", icon: SiReact, color: "#61DAFB" },
  angular: { slug: "angular", label: "Angular", icon: SiAngular, color: "#DD0031" },
  html5: { slug: "html5", label: "HTML5", icon: SiHtml5, color: "#E34F26" },
  css: { slug: "css", label: "CSS", icon: SiCss, color: "#1572B6" },
  tailwind: { slug: "tailwind", label: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },

  // Databases
  mysql: { slug: "mysql", label: "MySQL", icon: SiMysql, color: "#4479A1" },
  postgresql: { slug: "postgresql", label: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  supabase: { slug: "supabase", label: "Supabase", icon: SiSupabase, color: "#3FCF8E" },

  // DevOps & Cloud
  cicd: { slug: "cicd", label: "CI/CD", icon: null, color: COPPER },
  githubactions: { slug: "githubactions", label: "GitHub Actions", icon: SiGithubactions, color: "#2088FF" },
  docker: { slug: "docker", label: "Docker", icon: SiDocker, color: "#2496ED" },
  aws: { slug: "aws", label: "AWS", icon: FaAws, color: "#FF9900" },
  ec2: { slug: "ec2", label: "EC2", icon: null, color: COPPER },
  s3: { slug: "s3", label: "S3", icon: null, color: COPPER },
  rds: { slug: "rds", label: "RDS", icon: null, color: COPPER },
  iam: { slug: "iam", label: "IAM", icon: null, color: COPPER },
  securitygroups: { slug: "securitygroups", label: "Security Groups", icon: null, color: COPPER },

  // Testing & Tooling
  git: { slug: "git", label: "Git", icon: SiGit, color: "#F05032" },
  postman: { slug: "postman", label: "Postman", icon: SiPostman, color: "#FF6C37" },
  junit: { slug: "junit", label: "JUnit", icon: SiJunit5, color: "#25A162" },
  mockito: { slug: "mockito", label: "Mockito", icon: null, color: COPPER },
  sonarqube: { slug: "sonarqube", label: "SonarQube", icon: SiSonarqubeserver, color: "#4E9BCD" },
  owasp: { slug: "owasp", label: "OWASP", icon: SiOwasp, color: "#48A1CF" },

  // Extra (used only in project cards)
  mercadopago: { slug: "mercadopago", label: "Mercado Pago", icon: SiMercadopago, color: "#00B1EA" },
};

export type StackCategory = {
  label: string;
  /** Flat list of tech slugs. */
  items: string[];
  /** Optional nested group (used for AWS sub-services). */
  group?: { label: string; items: string[] };
};

/** Stack section content: exactly the 6 categories requested. */
export const STACK: StackCategory[] = [
  { label: "Languages", items: ["java", "sql", "typescript", "javascript"] },
  {
    label: "Backend",
    items: ["maven", "springboot", "springdata", "hibernate", "springsecurity", "jwt"],
  },
  { label: "Frontend", items: ["nextjs", "react", "angular", "html5", "css", "tailwind"] },
  { label: "Databases", items: ["mysql", "postgresql", "supabase"] },
  {
    label: "DevOps & Cloud",
    items: ["cicd", "githubactions", "docker", "aws"],
    group: { label: "AWS", items: ["ec2", "s3", "rds", "iam", "securitygroups"] },
  },
  {
    label: "Testing & Tooling",
    items: ["git", "postman", "junit", "mockito", "sonarqube", "owasp"],
  },
];
