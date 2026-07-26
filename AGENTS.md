<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Guía para Agentes de Desarrollo (AI Agent Rules)

Instrucciones y contexto del proyecto para agentes de IA que trabajen en este repositorio.

## 1. Identidad y Contexto del Desarrollador
- **Nombre:** Roque Othacehe
- **Rol:** Fullstack Developer (Next.js & Spring Boot)
- **Empresa / Estudio:** Estudio Ve (estudiove.com)
- **Docencia:** Instructor de Programación en la Universidad Tecnológica Nacional (UTN)
- **Idioma del Sitio:** Bilingüe (Español / Inglés). El idioma por defecto es **Español**.

## 2. Paleta de Colores (Design System / CSS Variables)
Los estilos deben respetar la paleta de colores definida en `:root`:

```css
:root {
  --black-deep:   #0d0d0f;   /* Fondo global body */
  --project-bg:   #0D0C0C;   /* Fondo sección proyectos */
  --graphite:     #1c1c1f;
  --dark-gray:    #2a2a2e;
  --light-gray:   #bfbfbf;   /* Texto secundario / párrafos */
  --white-smoke:  #f2f2f2;   /* Texto principal */
  --copper:       #A87A42;   /* Acento principal (cobre / dorado apagado) */
  --gold-bright:  #FFAA40;   /* Dorado brillante (CTA, hover, glow) */
  --gold-glow:    rgba(255, 170, 64, 0.5);
  --tech-lime:    #CFE838;   /* Acento lima */
}
```
- **Next.js Tech Brand Color Override:** `#A87A42` (Cobre).

## 3. Estilo Visual y UI
- **Tipografía:** Moderna vía `next/font` (Geist, Inter o Outfit).
- **Efectos Glassmorphism:** Usar `backdrop-filter: blur(10px - 18px)` sobre fondos semitransparentes en tarjetas y navbar.
- **Animaciones:** Utilizar **Framer Motion** para transiciones de entrada (fade-in + translateY), animaciones de scroll (`whileInView`) y efectos interactivos.
- **Iconografía:** Lucide Icons / React Icons / Phosphor Icons.

## 4. Convenciones i18n
- Mapear el contenido con soporte bilingüe (`es` / `en`).
- Mantener la coherencia de copies entre ambas versiones (Español default).

## 5. Estructura de Proyectos y Stack Técnico
Los proyectos destacados deben incluir:
- Badge de estado (`Producción` / `Production`).
- Descripción detallada por párrafos.
- Badges con iconos de stack tecnológico.
- Enlaces a demos en vivo y repositorios de GitHub.
