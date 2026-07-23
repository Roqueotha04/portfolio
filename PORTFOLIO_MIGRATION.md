# Portfolio — Documento de Migración a Next.js

Referencia completa del portfolio actual (Angular 20) para reconstruirlo en Next.js con un estilo más moderno, fluido y destacable. Contiene **todos los copies (ES/EN), colores, stack, descripciones de proyectos, assets y decisiones de estilo**.

> El proyecto es **bilingüe (Español / Inglés)** con un toggle global. El idioma por defecto es **Español** (`isEnglish = false`). Cada bloque de texto tiene su versión ES y EN.

---

## 1. Identidad y datos personales

| Campo | Valor |
|---|---|
| Nombre | **Roque Othacehe** |
| Rol | Fullstack Developer |
| Especialización | Next.js & Spring Boot Developer |
| Ubicación | Mar del Plata, Argentina |
| Email | roqueotha04@gmail.com |
| WhatsApp | +54 9 223 668-0996 (link: `https://wa.me/5492236680996`) |
| GitHub | https://github.com/roqueotha04 |
| LinkedIn | https://linkedin.com/in/roque-othacehe-a15085243 |
| Sitio del estudio | https://estudiove.com |

### CVs (descargables desde `/public`)
- ES: `/Cv - Roque Othacehe.docx.pdf`
- EN: `/Cv - Roque Othacehe - EN.docx.pdf`

### Meta / SEO (OpenGraph actual)
- Título OG: `Portfolio Backend – Roque Othacehe`
- Descripción OG: `Portfolio orientado a desarrollo backend con Spring Boot, SQL, Angular y Docker.`
- Imagen OG: `preview.png` (1200×630)
- Favicon: `favicon.ico`

> Nota: para la nueva versión conviene actualizar el OG hacia el nuevo posicionamiento **Next.js & Spring Boot** (hoy el copy OG está desactualizado hacia "backend/Angular").

---

## 2. Paleta de colores (design tokens)

Definidos como CSS variables en `:root`. **Conservar esta paleta.**

```css
:root {
  --black-deep:   #0d0d0f;   /* fondo global body */
  --project-bg:   #0D0C0C;   /* fondo sección proyectos */
  --graphite:     #1c1c1f;
  --dark-gray:    #2a2a2e;
  --light-gray:   #bfbfbf;   /* texto secundario / párrafos */
  --white-smoke:  #f2f2f2;   /* texto principal */
  --copper:       #A87A42;   /* ACENTO PRINCIPAL (cobre/dorado apagado) */
  --gold-bright:  #FFAA40;   /* dorado brillante (CTA, hover, glow) */
  --gold-glow:    rgba(255, 170, 64, 0.5);
  --tech-lime:    #CFE838;   /* acento lima (poco usado) */
}
```

### Otros colores en uso (no tokenizados, conviene tokenizar en Next)
| Uso | Color |
|---|---|
| Fondo hero | `#0c0b09` |
| Fondo navbar | `#2b2b2b` |
| Naranja Java / navbar accent | `#f89820` |
| Borde foto perfil | `#CFAC7A` |
| Botón primario hero (bg) | `#CFAC7A` sobre texto `#2b2b2b` |
| Texto navbar links | `#a0a0a0` |
| Fondo tarjetas de imagen | `#161618` |
| Hover intro-link | `#c99a5a` |
| Gradiente rol (hero title) | `linear-gradient(135deg, #FFAA40 0%, #FFD580 40%, #FF8C00 70%, #FFAA40 100%)` |
| Gradiente nombre | `linear-gradient(135deg, #FFAA40, #C4922C)` |

### Colores de logos de tecnología (overrides devicon)
```css
.devicon-spring-original  { color: #6DB33F; }
.devicon-postgresql-plain { color: #4169E1; }
.devicon-nextjs-plain     { color: #A87A42; }  /* Next se pinta en cobre, no negro */
.devicon-docker-plain     { color: #2496ED; }
.devicon-angular-plain    { color: #DD0031; }
```

---

## 3. Tipografía y estilo base

- **Fuente:** `"Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande", "Lucida Sans", Arial, sans-serif`
  - En Next se recomienda reemplazar por una fuente moderna vía `next/font` (p. ej. Geist, Inter o Sora) manteniendo el mismo peso visual. Trebuchet es el look actual; queda a criterio del rediseño.
- `line-height` body: `1.6`
- `-webkit-font-smoothing: antialiased`
- `scroll-behavior: smooth`
- Contenedor: `max-width: 1260px` (1380px en sección proyectos), `padding: 0 20px` (40px en proyectos)
- `box-sizing: border-box` global, reset de márgenes.

### Encabezados de sección (patrón reutilizable)
Cada sección usa un `.section-label` centrado con subrayado de acento:
```css
.section-label {
  color: var(--copper);
  font-size: 39px;
  font-weight: bold;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-align: center;
  margin: 20px 0 60px;
}
.section-label::after {          /* barrita cobre debajo del título */
  content: '';
  display: block;
  width: 85px;
  height: 4px;
  background-color: var(--copper);
  margin: 15px auto 0;
}
```

### Animación fade-in on-scroll (patrón clave)
Todas las secciones aparecen con un fade + translateY al entrar al viewport. En Angular es una directiva `appFadeIn` con `IntersectionObserver` (threshold `0.08`) y soporte de `fadeInDelay` (ms) para escalonar.

```css
.fade-in-init    { opacity: 0; transform: translateY(28px); transition: opacity .65s ease, transform .65s ease; }
.fade-in-visible { opacity: 1; transform: translateY(0); }
```

**En Next.js:** reimplementar con `IntersectionObserver` en un hook (`useInView`) o usar **Framer Motion** (`whileInView`, `viewport={{ once: true }}`) que encaja perfecto con el objetivo de "más fluido y moderno". El `fadeInDelay` escalonado (0, 150ms…) se mapea a `transition={{ delay }}`.

---

## 4. Iconos de tecnología (devicon)

Los logos de stack se traen desde **devicon** vía CDN, usando clases `<i>`. **Así se traen los logos:**

```html
<!-- En <head> (index.html) -->
<link rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
```

Uso: `<i class="devicon-nextjs-plain colored"></i>`
- Sufijo `-plain` / `-original`: variante del ícono.
- Clase `colored`: usa el color oficial de la marca. Sin `colored` → hereda `currentColor` (monocromo).

**En Next.js** hay dos caminos:
1. Mantener devicon por CDN (rápido, idéntico) — importar el CSS en `layout.tsx` o vía `<link>`.
2. Instalar `devicon` como paquete npm e importar el CSS, o migrar a `react-icons` / SVGs locales para mejor control y performance (recomendado para el rediseño). Si se migra, mantener el **override de color de Next.js a cobre `#A87A42`**, que es una decisión de branding intencional.

### Inventario de íconos devicon usados
`nextjs-plain`, `typescript-plain`, `tailwindcss-plain`, `prisma-original`, `react-original`, `angular-plain`, `html5-plain`, `css3-plain`, `java-plain`, `spring-original`, `postgresql-plain`, `mysql-original`, `hibernate-plain`, `openapi-plain`, `supabase-plain`, `junit-plain`, `docker-plain`, `git-plain`, `github-original`, `vercel-original`, `microsoftsqlserver-plain`, `codepen-plain` (usado como stand-in de Mockito), `whatsapp-plain`, `google-plain`, `linkedin-plain`.

> Tecnologías sin ícono devicon se muestran con un punto (`<span class="dot">`): **NeonDB, JaCoCo Coverage, Render, Tienda Nube**.

---

## 5. Estructura de la página

Orden de secciones (single page, scroll con anclas):

```
<Navbar />        (fixed, top)
<Hero />          #hero
<About />         #about
<Experience />    #experience
<Projects />      #projects
<Stack />         #stack
<Contact />       #contact
<Footer />
```

Navbar links: Inicio/Home (`#hero`), Experiencia/Experience (`#experience`), Proyectos/Projects (`#projects`), Stack (`#stack`), Contacto/Contact (`#contact`).

---

## 6. COPIES completos (ES / EN)

### 6.1 Navbar
| Elemento | ES | EN |
|---|---|---|
| Logo | `ROQUE OTHACEHE` + ícono Java | igual |
| Link 1 | Inicio | Home |
| Link 2 | Experiencia | Experience |
| Link 3 | Proyectos | Projects |
| Link 4 | Stack | Stack |
| Link 5 | Contacto | Contact |
| Toggle idioma | `ESP` / `ENG` | igual |

### 6.2 Hero
| Elemento | ES | EN |
|---|---|---|
| Botón CV | Descargar CV | Download CV |
| Rol (h1) | `Fullstack Developer` | igual |
| Nombre (h2) | `Roque Othacehe` | igual |
| Especialización | `Next.js & Spring Boot Developer` | igual |
| Botón 1 | GitHub | GitHub |
| Botón 2 | LinkedIn | LinkedIn |

Íconos flotantes debajo del hero (fila): Spring, PostgreSQL, React (colored), Next.js, Docker.
Imagen de perfil: `me/me.jpeg`.

### 6.3 About (Sobre Mí)
**Título sección:** Sobre Mí / About Me
**Subtítulo:** Desarrollador Fullstack y Docente / Fullstack Developer & Educator

**Párrafo 1 (ES):**
> Desarrollador fullstack con experiencia en proyectos completos con **Next.js**, **Spring Boot** y SQL, integrando agentes IA (**Claude Code / MCP**) aplicando principios SOLID y Clean Code.

**Párrafo 1 (EN):**
> Fullstack developer with hands-on experience in complete projects using **Next.js**, **Spring Boot**, and SQL, integrating AI agents (**Claude Code / MCP**) while applying SOLID principles and Clean Code.

**Párrafo 2 (ES):**
> Combino experiencia en proyectos reales con mi rol docente en **UTN**, donde formo desarrolladores en arquitecturas backend y desarrollo end-to-end.

**Párrafo 2 (EN):**
> I combine real-world project experience with my teaching role at **UTN**, where I train developers in backend architectures and end-to-end development.

**Tarjeta visual (about-visual):** ícono Spring + tags `Clean Code`, `Mentoring`.

### 6.4 Experience (Experiencia Profesional)
**Título sección:** Experiencia Profesional / Professional Experience

#### Entrada 1 — Estudio Ve
- Logo: `/experience/Dark Logo with Bright Orange Accent (5).jpg`
- Rol: Desarrollador Full Stack / Fullstack Developer
- Empresa: `Estudio Ve — estudiove.com` (link a https://estudiove.com)
- Período: `02/2026 – Actualidad` / `02/2026 – Present`
- Bullets (ES):
  - Desarrollo de aplicaciones web con **Next.js**, implementando arquitecturas full stack desde bases de datos SQL hasta interfaces de usuario responsivas.
  - Integración de IA mediante **Claude Code** y desarrollo de skills personalizadas para automatización de flujos de trabajo.
  - Implementación de APIs y servicios de terceros **(TN)** para soluciones de negocio end-to-end.
- Bullets (EN):
  - Web application development with **Next.js**, implementing full stack architectures from SQL databases to responsive user interfaces.
  - AI integration using **Claude Code** and development of custom skills for workflow automation.
  - Implementation of APIs and third-party services **(TN)** for end-to-end business solutions.

#### Entrada 2 — UTN
- Logo: `/experience/utn-nacional.jpg`
- Rol: Docente de Programación / Programming Instructor
- Empresa: `Universidad Tecnológica Nacional` (sin link)
- Período: `02/2024 – Actualidad` / `02/2024 – Present`
- Bullets (ES):
  - Docente de programación en la Universidad Tecnológica Nacional, con foco en desarrollo backend.
  - Experiencia con grupos de hasta **100 alumnos** en materias como Programación III (Spring Boot), Programación IV (Angular), Bases de datos (MySQL) y Metodología de sistemas (Scrum y Agile).
  - Experiencia en talleres de programación con lenguajes como **Excel, Python e IA**.
- Bullets (EN):
  - Programming instructor at the National Technological University, focused on backend development.
  - Experience with groups of up to **100 students** in subjects such as Programming III (Spring Boot), Programming IV (Angular), Databases (MySQL), and Systems Methodology (Scrum and Agile).
  - Experience in programming workshops with **Excel, Python, and AI**.

> Las entradas usan `fadeInDelay` escalonado: Estudio Ve = 0ms, UTN = 150ms.

### 6.5 Projects (Proyectos Destacados)
**Título sección:** Proyectos Destacados / Featured Projects

**Intro (ES):**
> Una selección de mis proyectos más relevantes. Para conocer más de mi trabajo pueden visitar [estudiove.com →](https://estudiove.com)

**Intro (EN):**
> A selection of my most relevant projects. To see more of my work, visit [estudiove.com →](https://estudiove.com)

> UI actual: **carrusel** de 5 slides con flechas prev/next, dots indicadores y transición fade (300ms). En el rediseño Next se puede mantener carrusel o pasar a grid/stack más moderno — pero conservar el orden y todos los copies.

Ver detalle completo de cada proyecto en la **Sección 7**.

### 6.6 Stack (Habilidades Técnicas)
**Título sección:** Habilidades Técnicas / Technical Skills

5 categorías (ver Sección 8 para el detalle con íconos):
- Backend
- Bases de Datos / Databases
- Frontend
- Testing & Quality
- CI/CD & DevOps

### 6.7 Contact (Conectemos)
| Elemento | ES | EN |
|---|---|---|
| Título sección | Conectemos | Connect |
| Título | ¿Listo para el siguiente despliegue? | Ready for the next deploy? |
| Lead | Si buscás un desarrollador enfocado en arquitecturas robustas, contactate conmigo si te interesa. | If you are looking for a developer focused on robust architectures, contact me if you are interested. |
| Botón WhatsApp | WhatsApp · +54 9 223 668-0996 | igual |
| Botón Email | Email Directo · roqueotha04@gmail.com | Direct Email · roqueotha04@gmail.com |
| Toast al copiar | ¡EMAIL COPIADO AL PORTAPAPELES! | EMAIL COPIED TO CLIPBOARD! |

Comportamiento email: botón copia `roqueotha04@gmail.com` al portapapeles vía `navigator.clipboard.writeText`, muestra toast por 2000ms.

### 6.8 Footer
| Elemento | ES | EN |
|---|---|---|
| Copyright | © 2026 ROQUE OTHACEHE | igual |
| Tagline | Construyendo arquitecturas escalables. | Building scalable architectures. |
| Label stack | Stack del Sitio | Site Stack |
| Tech del sitio | `Angular 19` → **cambiar a `Next.js`** en la migración | |
| Estado | SISTEMA ONLINE | SYSTEM ONLINE |
| Ubicación | Mar del Plata, Argentina | igual |

---

## 7. Proyectos — datos estructurados completos

Orden actual del carrusel (índices 0–4). Los 4 primeros llevan badge **Producción / Production**; el último (Book Loan) no lleva badge.

### Proyecto 0 — Felton Web  `[Producción]`
- **Imágenes:** `projects/Felton web1.webp`, `projects/Felton web2.webp`
- **Link:** https://felton.ar (label: `Ver felton.ar —>` / `Visit felton.ar —>`)
- **Tech icons:** Next.js, TypeScript, Tailwind CSS
- **Descripción (ES):**
  > E-commerce desarrollado **end-to-end** para **Felton**, un negocio de venta de ropa de alta calidad. Construido con **Next.js**, **TypeScript** y **Tailwind CSS**, con foco en una experiencia de compra cuidada y código de calidad profesional.
  >
  > Integración completa con la API de **Tienda Nube** para gestión de catálogo, carrito y procesamiento de pagos. Desarrollado en equipo dentro de **Estudio Ve**, aplicando componentización, buenas prácticas y flujo de trabajo colaborativo.
- **Descripción (EN):**
  > **End-to-end** e-commerce built for **Felton**, a premium clothing brand. Developed with **Next.js**, **TypeScript**, and **Tailwind CSS**, focused on a refined shopping experience and professional-quality code.
  >
  > Full integration with the **Tienda Nube** API for catalog management, cart, and payment processing. Developed collaboratively within **Estudio Ve**, applying componentization, best practices, and team workflow.

### Proyecto 1 — Estudio Ve  `[Producción]`
- **Imágenes:** `projects/Estudio Ve web.webp`, `projects/Estudio ve web2.webp`
- **Link:** https://estudiove.com (label: `Ver estudiove.com —>` / `Visit estudiove.com —>`)
- **Tech icons:** Next.js, TypeScript, Tailwind CSS, Prisma
- **Descripción (ES):**
  > Sitio web desarrollado **end-to-end** para la venta y exposición de **Estudio Ve**, una agencia de servicios digitales. Un proyecto que representa la identidad técnica y visual del estudio, construido con **Next.js**, **TypeScript** y **Tailwind CSS**.
  >
  > Implementación de **Prisma ORM** para gestión de base de datos y sistema de **blogs dinámicos**. Arquitectura escalable, SEO optimizado y rendimiento superior como pilares del proyecto.
- **Descripción (EN):**
  > Website developed **end-to-end** for the sales and exposure of **Estudio Ve**, a digital services agency. A project that represents the studio's technical and visual identity, built with **Next.js**, **TypeScript**, and **Tailwind CSS**.
  >
  > Implementation of **Prisma ORM** for database management and a **dynamic blog** system. Scalable architecture, optimized SEO, and superior performance as core pillars of the project.

### Proyecto 2 — Velmor  `[Producción]`
- **Imágenes:** `projects/Velmor1.webp`, `projects/Velmor2.webp`
- **Link:** (sin link externo)
- **Tech icons:** Next.js, TypeScript, Tailwind CSS
- **Descripción (ES):**
  > E-commerce desarrollado **end-to-end** para **Velmor**, un negocio especializado en la venta de accesorios de cuero premium, con foco principal en billeteras y cinturones de alta calidad. Construido con **Next.js**, **TypeScript** y **Tailwind CSS**, el sitio combina un diseño elegante con una experiencia de compra cuidada.
  >
  > Integración completa con la **API de Tienda Nube** para la gestión del catálogo, carrito y procesamiento de pagos, garantizando un flujo de compra fluido y profesional. Desarrollado dentro de **Estudio Ve**, aplicando buenas prácticas de desarrollo y arquitectura escalable.
- **Descripción (EN):**
  > **End-to-end** e-commerce built for **Velmor**, a business specialized in premium leather accessories, with a primary focus on high-quality wallets and belts. Developed with **Next.js**, **TypeScript**, and **Tailwind CSS**, the site combines an elegant design with a refined shopping experience.
  >
  > Full integration with the **Tienda Nube** API for catalog management, cart, and payment processing, ensuring a smooth and professional purchase flow. Developed within **Estudio Ve**, applying best development practices and scalable architecture.

### Proyecto 3 — Proyecto Final UTN / UTN Final Project  `[Producción]`
- **Imágenes:** `projects/SuperHeroGame.webp`, `projects/SuperHeroGame2.webp`
- **Links:**
  - Demo en vivo: https://superherogame-xi.vercel.app/ (`Ver Demo en Vivo —>` / `View Live Demo —>`)
  - Backend repo: https://github.com/Roqueotha04/SuperHeroGame-Backend (`Backend repo en Github —>` / `Backend repo on Github —>`)
  - Frontend repo: https://github.com/Tincho1612/SuperHeroGames (`Frontend repo en Github —>` / `Frontend repo on Github —>`)
- **Tech icons (2 filas):** Java, Spring, PostgreSQL, Docker / Angular, HTML5, CSS3, TypeScript
- **Descripción (ES):**
  > Plataforma de batalla de superhéroes utilizando Spring Boot 3 y Angular. Focalizado en la creacion de un sistema de usuarios real, con registro seguro, cifrado de contraseñas con BCrypt y validación de cuentas mediante envío de correos automáticos con Brevo.
  >
  > Infraestructura desplegada en la nube (Vercel/Render/Neon), implementé un sistema de health-checks con Uptime Robot y warm-ups automáticos, bajando la latencia de 140 ms a 60 ms comparado al backend anterior.
- **Descripción (EN):**
  > Superhero battle platform built with Spring Boot 3 and Angular. Focused on creating a real user system with secure registration, BCrypt password encryption, and account validation via automated emails using Brevo.
  >
  > Cloud-deployed infrastructure (Vercel/Render/Neon), where I implemented a health-check system with Uptime Robot and automated warm-ups, reducing latency from 140 ms to 60 ms compared to the previous backend.

### Proyecto 4 — Book Loan System  *(sin badge)*
- **Imágenes:** `projects/Book-Loan.webp`, `projects/Book-LoanSQL.webp`
- **Link:** https://github.com/Roqueotha04/book-loan-system (`Explorar en Github —>` / `Explore on Github —>`)
- **Tech icons:** Java, Spring, MySQL, JUnit, Docker, SQL Server
- **Nota Swagger (ES):** 💡 Nota: La **Swagger UI** puede consultarse en `/swagger-ui.html` al desplegar el código localmente.
- **Nota Swagger (EN):** 💡 Note: **Swagger UI** can be accessed at `/swagger-ui.html` when deploying the code locally.
- **Descripción (ES):**
  > Sistema de gestión de préstamos bibliotecarios. API REST diseñada bajo Clean Architecture con un fuerte enfoque en la integridad de datos y seguridad. Implementa Role-Based Access Control (RBAC) con Spring Security 6 para la gestión de permisos diferenciados entre administradores, bibliotecarios y usuarios.
  >
  > Proyecto orientado a altos estándares de calidad de software: cuenta con cobertura de tests unitarios superior al 80% (JaCoCo), validaciones de negocio estrictas mediante Bean Validation y documentación técnica interactiva con Swagger/OpenAPI.
- **Descripción (EN):**
  > Library loan management system. REST API designed under Clean Architecture with a strong focus on data integrity and security. Implements Role-Based Access Control (RBAC) with Spring Security 6 to manage permissions for admins, librarians, and users.
  >
  > Project oriented towards high software quality standards: features unit test coverage exceeding 80% (JaCoCo), strict business validations using Bean Validation, and interactive technical documentation with Swagger/OpenAPI.

### Sugerencia de modelo de datos para Next.js
```ts
type Project = {
  id: string;
  title: { es: string; en: string };
  badge?: { es: string; en: string };           // "Producción" / "Production"
  description: { es: string[]; en: string[] };   // array de párrafos
  links: { label: { es: string; en: string }; url: string }[];
  techIcons: string[];                            // ["nextjs", "typescript", ...]
  images: string[];
  note?: { es: string; en: string };             // ej. nota Swagger
};
```

---

## 8. Stack técnico completo (sección Skills)

Renderizado en grid de 5 categorías. Cada item = ícono devicon + label.

### Backend
| Ícono | Label |
|---|---|
| java-plain | Java 17 / 21 |
| spring-original | Spring Boot |
| spring-original | Spring Security & JWT |
| spring-original | Spring Cloud |
| hibernate-plain | JPA / Hibernate |
| openapi-plain | Swagger / OpenAPI |

### Bases de Datos / Databases
| Ícono | Label |
|---|---|
| postgresql-plain | PostgreSQL |
| mysql-original | MySQL |
| prisma-original | Prisma ORM |
| supabase-plain | Supabase |
| (dot) | NeonDB |

### Frontend
| Ícono | Label |
|---|---|
| react-original | React |
| nextjs-plain | Next.js |
| angular-plain | Angular |
| typescript-plain | TypeScript |
| html5-plain | HTML5 |
| css3-plain | CSS3 |

### Testing & Quality
| Ícono | Label |
|---|---|
| junit-plain | JUnit 5 |
| codepen-plain | Mockito |
| (dot) | JaCoCo Coverage |

### CI/CD & DevOps
| Ícono | Label |
|---|---|
| docker-plain | Docker |
| git-plain | Git |
| github-original | GitHub Actions |
| vercel-original | Vercel |
| (dot) | Render |
| (dot) | Tienda Nube |

---

## 9. Assets (mover a `/public` del proyecto Next)

```
public/
├── favicon.ico
├── preview.png                                   (OG image 1200×630)
├── Cv - Roque Othacehe.docx.pdf                  (CV ES)
├── Cv - Roque Othacehe - EN.docx.pdf             (CV EN)
├── me/
│   └── me.jpeg                                    (foto de perfil)
├── experience/
│   ├── Dark Logo with Bright Orange Accent (5).jpg   (logo Estudio Ve)
│   └── utn-nacional.jpg                              (logo UTN)
└── projects/
    ├── Felton web1.webp / Felton web2.webp
    ├── Estudio Ve web.webp / Estudio ve web2.webp
    ├── Velmor1.webp / Velmor2.webp
    ├── SuperHeroGame.webp / SuperHeroGame2.webp
    └── Book-Loan.webp / Book-LoanSQL.webp
```

> **Recomendación Next:** renombrar los archivos con espacios (`Felton web1.webp` → `felton-web1.webp`, etc.) para evitar el `%20` en las URLs, y usar `next/image` para optimización automática. Las imágenes de proyecto ya están en **.webp** (bien).

---

## 10. Detalles de estilo por sección (para preservar el "look" al rediseñar)

### Hero
- Fondo `#0c0b09` con **aura radial animada** (2 gradientes radiales naranja/cobre muy sutiles, `heroAura` 12s alternate).
- Foto: 275×275px, `border-radius: 30px`, borde `2px solid #CFAC7A`, sombra offset `15px 15px 0 rgba(207,172,122,.1)`, hover que la desplaza `translate(-5px,-5px)`.
- Título rol: gradiente dorado con **shimmer animado** (`shimmerText` 5s) + `background-clip: text`.
- Botón CV: pill outline dorado con **glow pulsante** (`glowPulse` 3.5s).
- **Animaciones de entrada escalonadas** (slideDown/slideLeft/slideRight/fadeUp con delays 0.1s → 1s). Reproducir con Framer Motion stagger.
- Layout: 2 columnas (texto + foto) con `gap: 78px`; en ≤950px pasa a columna (foto arriba) y centrado.

### Navbar
- `fixed`, altura 80px, fondo `#2b2b2b` con `backdrop-filter: blur(10px)`, 3 secciones (logo / links centrados / socials+toggle).
- Links uppercase gris `#a0a0a0`, hover naranja `#f89820`.
- Toggle idioma tipo pill (ESP/ENG), activo con fondo `#f89820`.
- En ≤950px se oculta el bloque central de links.

### Projects (carrusel)
- Fondo `#0D0C0C`, `border-top: 1px solid rgba(168,122,66,.1)`.
- Card: grid 2 col (texto | imágenes), `gap: 80px`, fondo `rgba(14,13,11,.75)` con **`backdrop-filter: blur(18px)`** (efecto glass), `border-radius: 16px`, `padding: 48px`.
- Badge: outline cobre, uppercase, `letter-spacing: 2px`.
- Título proyecto: 44px bold `#f5f5f5`.
- Párrafos: 18px `#bfbfbf`, `line-height: 1.8`, justificado.
- Links: subrayado cobre (`border-bottom: 2px solid #A87A42`), hover cobre.
- Íconos tech: 48px, hover `translateY(-5px)`.
- Imágenes: fondo `#161618`, borde sutil, `border-radius: 8px`, hover borde cobre.
- Flechas nav: cobre translúcido → hover `#FFAA40` + `scale(1.15)`.
- Dots: 8px, activo cobre con `scale(1.4)`.
- Transición de slide: fade + `translateY(6px)` en 300ms.
- ≤900px: card pasa a 1 columna.

### About / Experience / Contact / Stack / Footer
- Comparten el `.section-label` con subrayado cobre y el patrón `appFadeIn`.
- Contact: 2 botones grandes (WhatsApp + Email) tipo card con ícono a la izquierda y texto a la derecha; toast animado al copiar email.
- Footer: 3 columnas (copyright+tagline / stack del sitio / estado online + ubicación), con indicador `dot` de "sistema online".

---

## 11. Comportamiento / lógica a reimplementar en Next

| Feature | Implementación actual (Angular) | Equivalente Next.js sugerido |
|---|---|---|
| Toggle de idioma ES/EN | `LanguageService` con `signal(isEnglish)` global | Context + `useState`, o `next-intl` / diccionario propio. Default = ES. |
| Fade-in on scroll | Directiva `appFadeIn` + IntersectionObserver | Hook `useInView` o **Framer Motion** `whileInView` (once) |
| Delay escalonado | `[fadeInDelay]` input (ms) | `transition={{ delay }}` |
| Carrusel proyectos | `signal(currentIndex)`, `navigate()`, fade 300ms, módulo sobre `total=5` | Estado local + Framer Motion `AnimatePresence`, o librería (Embla/Swiper) |
| Copiar email | `navigator.clipboard.writeText` + toast 2s | Idéntico con `useState` + timeout |
| Smooth scroll anclas | `scroll-behavior: smooth` + `href="#seccion"` | Igual, o `scrollIntoView` |
| SSR | Angular SSR (`@angular/ssr`, express) | Nativo en Next (App Router / RSC) |

---

## 12. Checklist de migración

- [ ] Setup Next.js (App Router) + TypeScript + Tailwind.
- [ ] Portar paleta de colores a `tailwind.config` / CSS variables (Sección 2).
- [ ] Definir estrategia i18n (ES default / EN) con diccionario de todos los copies (Sección 6).
- [ ] Copiar assets a `/public` (Sección 9), renombrar archivos con espacios.
- [ ] Resolver logos de tech: devicon por CDN vs. paquete/SVG — mantener override Next→cobre.
- [ ] Componentes: Navbar, Hero, About, Experience, Projects, Stack, Contact, Footer.
- [ ] Modelar proyectos como data (Sección 7) y mapear.
- [ ] Reimplementar fade-in on scroll + animaciones hero (Framer Motion).
- [ ] Actualizar copies desactualizados: footer `Angular 19` → `Next.js`; meta OG hacia Next.js/Spring Boot.
- [ ] SEO/metadata con `metadata` API de Next + OG image.
- [ ] Responsive: breakpoints principales en 950px (navbar/hero) y 900px (proyectos).
```
```

---

*Documento generado a partir del portfolio Angular 20 actual. Todos los copies (ES/EN), colores, stack, descripciones de proyectos y decisiones de estilo están incluidos para reconstruir el sitio en Next.js con un rediseño más moderno preservando la identidad.*
