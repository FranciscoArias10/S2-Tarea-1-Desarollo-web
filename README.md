# 🌐 Portafolio Web Profesional e Interactivo — Francisco Arias

![HTML5](https://img.shields.io/badge/HTML5-Semántico-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Custom_Properties-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Design-100%25_Responsive-059669?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=github)

Portafolio web personal e interactivo de **Francisco Arias**, estudiante de la carrera de **Ingeniería en Software** en la **Universidad Estatal de Milagro (UNEMI)**. Este proyecto ha sido diseñado, estructurado y programado desde cero aplicando estándares modernos de **HTML5 semántico**, arquitectura CSS escalable mediante **Custom Properties (Design Tokens)** e interactividad avanzada con **Vanilla JavaScript**, sin dependencia de frameworks externos.

---

## 📌 Tabla de Contenidos
1. [Resumen del Proyecto](#-resumen-del-proyecto)
2. [Estructura del Repositorio](#-estructura-del-repositorio)
3. [Secciones del Portafolio](#-secciones-del-portafolio)
4. [Capturas del Resultado & Proyectos](#-capturas-del-resultado--proyectos)
5. [Arquitectura CSS & Design System](#-arquitectura-css--design-system)
6. [Interactividad JavaScript Implementada](#-interactividad-javascript-implementada)
7. [Instrucciones de Ejecución Local](#-instrucciones-de-ejecución-local)
8. [Guía de Despliegue en GitHub Pages](#-guía-de-despliegue-en-github-pages)
9. [Control de Versiones & Commits](#-control-de-versiones--commits)
10. [Créditos & Contacto](#-créditos--contacto)

---

## 🚀 Resumen del Proyecto

El objetivo de este proyecto es comunicar de manera clara, atractiva y accesible la identidad profesional del desarrollador, su formación universitaria, sus proyectos más destacados y su dominio técnico justificado. 

### Principales aspectos técnicos:
* **HTML5 Semántico Estricto**: Uso exclusivo de etiquetas semánticas (`header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `figure`, `figcaption`, `dialog`, `form`) para garantizar máxima accesibilidad y SEO.
* **Arquitectura CSS Propia**: Modularización en archivos independientes (`variables.css`, `base.css`, `components.css`, `sections.css`, `responsive.css`) usando variables nativas (`:root` y `[data-theme="light"]`).
* **Design System Integrado**: Sección dedicada con documentación en vivo de tokens de color (con copiado al portapapeles), tipografía, escala de espaciados y componentes reutilizables.
* **Vanilla JavaScript ES6+**: Arquitectura modular basada en ES Modules, sin librerías pesadas ni dependencias externas.

---

## 📁 Estructura del Repositorio

```text
S2-Tarea#1-Desarollo-web/
├── index.html                   # Documento principal con estructura semántica
├── .gitignore                   # Archivos y carpetas excluidos del control de versiones
├── README.md                    # Documentación técnica completa y guía de despliegue
├── css/
│   ├── variables.css            # Design tokens: colores, tipografía, espaciado, sombras
│   ├── base.css                 # Resets modernos, normalización y utilidades
│   ├── components.css           # Botones, cards, badges, modal, toasts, inputs
│   ├── sections.css             # Estilos de cada sección (Hero, About, Skills, DS, Contact)
│   └── responsive.css           # Media queries para Desktop, Tablet y Móvil
├── js/
│   ├── theme.js                 # Controlador de Modo Claro/Oscuro con localStorage
│   ├── navigation.js            # Menú hamburguesa, ScrollSpy y botón Volver Arriba
│   ├── projects.js              # Filtro dinámico de proyectos y modal accesible
│   ├── form-validation.js       # Validación en tiempo real con Toast feedback
│   ├── design-system.js         # Copiado interactivo de tokens de diseño
│   └── main.js                  # Punto de entrada principal y orquestador
└── assets/
    └── img/                     # Imágenes optimizadas de proyectos y fotografía de perfil
        ├── profile.jpg          # Foto profesional oficial de Francisco Arias
        ├── project-librepdf.jpg # Captura del proyecto LibrePDF (React Native/Expo)
        ├── project-librefree.jpg# Captura del proyecto LibreFree (Lector & Audiolibros)
        ├── project-sesplatform.jpg # Captura del portal SES-Platform (Vercel)
        └── project-acuaia.jpg   # Captura de la plataforma de IA acuaIA (Vercel)
```

---

## 🧩 Secciones del Portafolio

1. **Inicio / Hero (`#hero`)**:
   - Saludo interactivo, indicador visual de disponibilidad para proyectos y pasantías.
   - Encabezado principal `<h1>` único con gradiente de texto moderno.
   - Fotografía profesional con animación orgánica (Blob morphing) y badges flotantes.
   - Botones de acción directa (*Call To Action*) y chips de tecnologías principales.

2. **Sobre Mí (`#about`)**:
   - `<article>` con la historia vocacional, formación en Ingeniería en Software en la **UNEMI** y filosofía de código limpio.
   - `<aside>` complementario con tarjetas de estadísticas: Carrera Universitaria, +4 Proyectos Desarrollados, +500 Horas de Programación y Metodologías Ágiles (Scrum & Gitflow).

3. **Habilidades Técnicas — Skills (`#skills`)**:
   - Organizadas en 3 categorías claras:
     - **Frontend**: HTML5 Semántico (90%), CSS3 & Variables (85%), JavaScript ES6+ (80%), React Basics (70%).
     - **Backend & Bases de Datos**: Node.js & Express (75%), PostgreSQL & MySQL (75%), APIs REST (80%).
     - **Herramientas & Entorno**: Git & GitHub (85%), Linux & Bash (75%), Figma & UI Design (70%).
   - Cada habilidad incluye ícono vectorial, porcentaje verificable, descripción técnica y barra de progreso con atributos ARIA accesibles.

4. **Proyectos Destacados (`#projects`)**:
   - Sistema de filtrado interactivo por categorías (*Todos*, *Mobile Apps*, *Full Stack & Web*).
   - Tarjetas reutilizables `<article class="project-card">` con proyectos reales:
     - **LibrePDF** (Mobile App): Alternativa libre y gratuita a CamScanner para digitalizar fotos a PDF con filtros de realce, rotación y exportación (React Native & TypeScript).
     - **LibreFree** (Mobile & Audio): Lector de libros electrónicos (EPUB, PDF) con síntesis de voz Text-to-Speech, SQLite offline y modo OLED (React Native & Expo).
     - **SES-Platform** (Full Stack Web): Plataforma web en producción para gestión académica institucional, métricas de rendimiento y asistencia desplegada en Vercel.
     - **acuaIA** (AI & Web Platform): Plataforma web inteligente para el sector acuícola que analiza telemetría y predice biomasa mediante modelos de IA desplegada en Vercel.
   - Cada proyecto cuenta con enlaces al código en GitHub, demo en vivo y botón "Ver detalles".

5. **Design System / Componentes (`#design-system`)**:
   - Sección viva que documenta el sistema de diseño:
     - **Paleta de Colores**: Muestrarios visuales interactivos (*swatches*) con copiado de código HEX al hacer clic.
     - **Jerarquía Tipográfica**: Ejemplos en vivo de H1, H2, H3, párrafos, texto secundario, enlaces y etiquetas `<code>`.
     - **Escala de Espaciado**: Representación visual y en píxeles de `--space-2xs` a `--space-3xl`.
     - **Galería de Componentes Reutilizables**: Botón primario, secundario, outline, variantes pequeñas y con ícono, badges de estado, inputs con estados de foco y validación, y estructura de tarjetas.

6. **Contacto (`#contact`)**:
   - Datos profesionales verificados (Correo institucional UNEMI, GitHub, LinkedIn y Ubicación en Guayas, Ecuador).
   - Formulario accesible con validación en tiempo real de nombre, correo regex, asunto y mensaje con contador dinámico de caracteres (`0 / 500`).
   - Simulación de envío con indicador de carga y notificación Toast accesible.

7. **Footer (`<footer>`)**:
   - Información de copyright semántica, enlaces de navegación y créditos técnicos.

---

## 📸 Capturas del Resultado & Proyectos

A continuación se presentan las capturas reales de los proyectos destacados y recursos visuales integrados en el portafolio:

### 1. LibrePDF — Conversor & Escáner Móvil
> Alternativa libre y gratuita a CamScanner desarrollada con React Native, TypeScript y Expo SDK 57.

![Captura de LibrePDF](./assets/img/project-librepdf.jpg)

* **Repositorio**: [GitHub - LibrePDF](https://github.com/FranciscoArias10/LibrePDF)
* **Categoría**: Mobile Application

---

### 2. LibreFree — Lector de Libros & Audiolibros
> Lector móvil para EPUB y PDF con síntesis de voz en tiempo real (Text-to-Speech), SQLite local y modo OLED.

![Captura de LibreFree](./assets/img/project-librefree.jpg)

* **Repositorio**: [GitHub - LibreFree](https://github.com/FranciscoArias10/librefree-React)
* **Categoría**: Mobile & Audio Application

---

### 3. SES-Platform — Portal de Gestión Educativa
> Plataforma web en producción para analítica académica institucional y control de métricas de rendimiento.

![Captura de SES-Platform](./assets/img/project-sesplatform.jpg)

* **Repositorio**: [GitHub - SES-Platform](https://github.com/FranciscoArias10/SES-Platform)
* **Demo en Vivo**: [ses-platform-two.vercel.app](https://ses-platform-two.vercel.app)
* **Categoría**: Full Stack Web

---

### 4. acuaIA — Inteligencia Artificial Acuícola
> Plataforma web inteligente que correlaciona telemetría de calidad de agua y predice biomasa mediante IA.

![Captura de acuaIA](./assets/img/project-acuaia.jpg)

* **Repositorio**: [GitHub - acuaIA](https://github.com/FranciscoArias10/acuaIA)
* **Demo en Vivo**: [acua-ia.vercel.app](https://acua-ia.vercel.app)
* **Categoría**: AI & Web Platform

---

### 5. Fotografía Profesional
> Avatar oficial de presentación profesional integrado en el Hero y el Brand Header del portafolio.

<p align="center">
  <img src="./assets/img/profile.jpg" alt="Francisco Arias - Fotografía Profesional" width="220" style="border-radius: 50%;">
</p>

---

## 🎨 Arquitectura CSS & Design System

El diseño utiliza **CSS Custom Properties** de manera exhaustiva en `:root` y `[data-theme="light"]`:

```css
:root {
  /* Tokens de Color Primarios */
  --color-primary: #ff1e42;
  --color-secondary: #8b5cf6;
  --color-accent: #06b6d4;
  --color-bg: #090d16;
  --color-surface: #131b2e;
  --color-text: #f8fafc;
  --color-text-muted: #94a3b8;

  /* Escala de Espaciados */
  --space-xs: 0.5rem;   /* 8px */
  --space-sm: 0.75rem;  /* 12px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
  --space-2xl: 3rem;    /* 48px */
}
```

* **Sin Frameworks**: Desarrollado 100% con CSS puro, aplicando Flexbox para alineaciones unidimensionales y CSS Grid para layouts bidimensionales.
* **Mobile-First & Fluid Typography**: Uso de `clamp()` para escalas de texto fluidas y fluid padding sin desbordamientos horizontales.

---

## ⚡ Interactividad JavaScript Implementada

Se han programado más de 6 funcionalidades interactivas:

1. **Modo Claro / Oscuro Dual**:
   - Alternancia mediante botón accesible con animación de rotación.
   - Persistencia de la elección del usuario en `localStorage`.
   - Detección automática del tema del sistema operativo mediante `matchMedia('(prefers-color-scheme: light)')`.
2. **Navegación Móvil Accesible**:
   - Menú tipo hamburguesa con control de atributos `aria-expanded` y `aria-controls`.
   - Cierre automático al pulsar un enlace de sección o la tecla `Escape`.
3. **ScrollSpy & Botón Flotante "Volver Arriba"**:
   - Detección dinámica de la sección activa al hacer scroll para iluminar el enlace correspondiente en el header.
   - Botón flotante que aparece suavemente después de 400px de scroll para retornar al inicio.
4. **Filtro de Proyectos en Tiempo Real**:
   - Filtrado dinámico por categoría con transiciones de opacidad y desplazamiento en CSS.
5. **Modal Accesible de Proyectos**:
   - Ventana modal que presenta el problema que resuelve cada software, descripción detallada, lista de características y enlaces.
   - Gestión de accesibilidad con bloqueo de scroll en el body, cierre con clic exterior, botón X y tecla `Escape`, atrapando el foco de teclado (*Focus Trap*).
6. **Validación de Formulario en Vivo**:
   - Comprobación inmediata al salir del campo (*blur*) o al escribir (*input*).
   - Mensajes de error específicos con atributos `role="alert"` y `aria-describedby`.
   - Contador de caracteres en tiempo real en el área de mensaje.
   - Notificación emergente (*Toast*) animada con confirmación de éxito.
7. **Copiado de Tokens en el Design System**:
   - Al hacer clic en cualquier muestra de color, el valor se copia al portapapeles mediante la API `navigator.clipboard` y se confirma mediante un Toast interactivo.

---

## 💻 Instrucciones de Ejecución Local

Para visualizar el portafolio en tu máquina local:

### Opción 1: Con Python (Recomendado)
Al utilizar módulos de JavaScript (`type="module"`), se recomienda ejecutar un servidor HTTP local:
```bash
# 1. Clonar o ingresar al directorio del proyecto
cd S2-Tarea#1-Desarollo-web

# 2. Iniciar servidor local en el puerto 4321
python3 -m http.server 4321

# 3. Abrir en tu navegador favorito:
# http://localhost:4321
```

### Opción 2: Con la extensión Live Server de VS Code
1. Abre la carpeta del proyecto en Visual Studio Code.
2. Haz clic derecho sobre `index.html`.
3. Selecciona **"Open with Live Server"**.

---

## 🚀 Guía de Despliegue en GitHub Pages

Sigue estos sencillos pasos para publicar el portafolio en la web:

1. **Crear repositorio en GitHub**:
   - Ingresa a tu cuenta de GitHub y crea un nuevo repositorio público (ejemplo: `portafolio-francisco-arias`).
   - No marques la opción de inicializar con README (ya tenemos nuestro propio repositorio local inicializado).

2. **Vincular el repositorio remoto y subir los commits**:
   ```bash
   git remote add origin https://github.com/FranciscoArias10/S2-Tarea-1-Desarollo-web.git
   git branch -M main
   git push -u origin main
   ```

3. **Activar GitHub Pages**:
   - En tu repositorio de GitHub, haz clic en la pestaña **Settings** (Configuración).
   - En el menú lateral izquierdo, haz clic en **Pages**.
   - En la sección **Build and deployment**:
     - **Source**: Selecciona `Deploy from a branch`.
     - **Branch**: Selecciona `main` y la carpeta `/(root)`.
     - Haz clic en **Save**.

4. **Verificar la URL pública**:
   - En un par de minutos, GitHub Pages generará tu enlace público:
     `https://franciscoarias10.github.io/S2-Tarea-1-Desarollo-web/`
   - Ábrelo en una ventana en modo incógnito para verificar la carga fluida de hojas de estilo, scripts e imágenes.

---

## 📜 Control de Versiones & Commits

El desarrollo se realizó siguiendo el estándar de **Conventional Commits**, garantizando un historial progresivo y atómico:

* `7fb0f58`: `feat: initial repository structure and assets setup`
* `e09b036`: `feat: create semantic HTML5 structure for all sections`
* `aa9c68c`: `feat: implement CSS custom properties, base typography and theme system`
* `91888c1`: `feat: style components, layout grids, and responsive design`
* `0749ea6`: `feat: implement JavaScript theme switcher, mobile navigation, and scrollspy`
* `9553f86`: `feat: add project filtering, interactive modal dialog, and form validation`
* `5551949`: `feat: build interactive design system and main script orchestrator`
* `docs`: `docs: add comprehensive README.md with live demo info and project guide`

---

## 📬 Créditos & Contacto

* **Autor**: Francisco Arias
* **Carrera**: Ingeniería en Software
* **Institución**: Universidad Estatal de Milagro (UNEMI)
* **Correo institucional**: [fariasp2@unemi.edu.ec](mailto:fariasp2@unemi.edu.ec)
* **GitHub**: [@FranciscoArias10](https://github.com/FranciscoArias10)
* **LinkedIn**: [Francisco Steven Arias Pérez](https://www.linkedin.com/in/francisco-steven-arias-p%C3%A9rez-5b8663219/)

Desarrollado con dedicación para la materia de Desarrollo Web.
