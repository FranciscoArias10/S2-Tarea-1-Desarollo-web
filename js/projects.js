export const projectsData = [
  {
    id: 'librepdf',
    title: 'LibrePDF - Conversor & Escáner Móvil a PDF',
    category: 'mobile',
    categoryName: 'Mobile App',
    problem: 'Apps comerciales imponen marcas de agua, suscripciones y anuncios',
    shortDesc: 'Aplicación móvil libre, rápida y 100% gratuita para digitalizar fotos y convertirlas a PDF con filtros tipo CamScanner, reordenamiento de páginas y exportación.',
    fullDesc: 'LibrePDF surge como una alternativa de código abierto y sin publicidad a herramientas comerciales de digitalización. Desarrollada con React Native y Expo SDK, permite a los usuarios capturar documentos desde la cámara o galería, aplicar filtros avanzados de realce, rotar y reordenar páginas dinámicamente, y configurar márgenes y formatos de hoja (A4, Carta, Oficio) para compartir al instante.',
    features: [
      'Captura mediante cámara y selección múltiple masiva desde la galería.',
      'Filtros de realce profesionales: Magic Color, Alto Contraste B/N y Escala de Grises.',
      'Reordenamiento visual de páginas, rotación nativa en 90° y eliminación dinámica.',
      'Configuración avanzada de formatos (A4, Carta, Oficio), orientación y márgenes.',
      'Exportación y compartición directa vía WhatsApp, correo y Google Drive sin marcas de agua.'
    ],
    technologies: ['React Native', 'TypeScript', 'Expo SDK 57', 'Image Manipulator', 'Print & FileSystem'],
    image: 'assets/img/project-librepdf.jpg',
    github: 'https://github.com/FranciscoArias10/LibrePDF',
    demo: 'https://github.com/FranciscoArias10/LibrePDF'
  },
  {
    id: 'librefree',
    title: 'LibreFree - Lector de Libros & Audiolibros',
    category: 'mobile',
    categoryName: 'Mobile & Audio',
    problem: 'Falta de lectores de libros offline con síntesis de voz gratuita y privacidad',
    shortDesc: 'Lector de libros electrónicos (EPUB y PDF) con motor de lectura Ultra-HD, síntesis de voz en tiempo real (Text-to-Speech), almacenamiento local SQLite y modo oscuro OLED.',
    fullDesc: 'LibreFree es una aplicación móvil moderna, libre y privada diseñada para la lectura y el aprendizaje continuo. Incorpora un lector adaptativo para formatos EPUB y PDF junto con un sintetizador de voz (TTS) integrado que transforma cualquier libro en audiolibro con control de velocidad. Toda la información de lectura, historial y marcadores se almacena 100% offline mediante SQLite, sin recopilar datos ni requerir cuentas.',
    features: [
      'Motor de lectura ultra nítido para archivos EPUB y PDF con escalado Retina.',
      'Síntesis de voz Text-to-Speech (TTS) con selector de velocidades (0.75x a 2.0x).',
      'Temas de lectura ergonómicos: Modo Claro, Sepia, Modo Noche y Modo OLED Puro.',
      'Base de datos interna SQLite para almacenamiento seguro y sin conexión a internet.',
      'Diseño moderno con barra flotante cápsula y navegación táctil optimizada.'
    ],
    technologies: ['React Native', 'TypeScript', 'Expo Speech & Audio', 'SQLite WAL', 'ePub.js / PDF.js'],
    image: 'assets/img/project-librefree.jpg',
    github: 'https://github.com/FranciscoArias10/librefree-React',
    demo: 'https://github.com/FranciscoArias10/librefree-React'
  },
  {
    id: 'sesplatform',
    title: 'SES-Platform - Portal de Gestión Educativa',
    category: 'fullstack',
    categoryName: 'Full Stack Web',
    problem: 'Descentralización de métricas académicas y seguimiento de estudiantes',
    shortDesc: 'Plataforma web en producción para gestión académica institucional, métricas de rendimiento en tiempo real, seguimiento de asistencia y analítica de cursos.',
    fullDesc: 'SES-Platform es una solución web empresarial desplegada en Vercel orientada a la administración educativa. Permite centralizar la gestión de asignaturas, calificaciones y progreso estudiantil a través de paneles analíticos interactivos y una experiencia de usuario rápida y moderna.',
    features: [
      'Panel de control interactivo con métricas clave de rendimiento y curvas de interacción.',
      'Seguimiento automatizado de tendencias de asistencia y reportes de progreso.',
      'Módulo de administración de cursos activos, tareas pendientes y calificaciones.',
      'Despliegue continuo de alta disponibilidad en Vercel con arquitectura escalable.'
    ],
    technologies: ['TypeScript', 'React', 'CSS Custom Props', 'REST APIs', 'Vercel'],
    image: 'assets/img/project-sesplatform.jpg',
    github: 'https://github.com/FranciscoArias10/SES-Platform',
    demo: 'https://ses-platform-two.vercel.app'
  },
  {
    id: 'acuaia',
    title: 'acuaIA - Inteligencia Artificial Acuícola',
    category: 'ai fullstack',
    categoryName: 'IA & Web Platform',
    problem: 'Monitoreo manual ineficiente de calidad de agua y predicción tardía de biomasa',
    shortDesc: 'Plataforma web inteligente para el sector acuícola que analiza telemetría de piscinas camaroneras, oxígeno disuelto, pH y realiza predicciones de biomasa con IA.',
    fullDesc: 'acuaIA es un sistema tecnológico desplegado en Vercel que aplica modelos de inteligencia artificial para la optimización de granjas camaroneras y acuícolas. Integra telemetría de sensores de oxígeno disuelto, temperatura y pH, correlacionando datos históricos para predecir el crecimiento de biomasa, la tasa de supervivencia y recomendar ventanas óptimas de cosecha.',
    features: [
      'Monitoreo en tiempo real de telemetría de agua (oxígeno disuelto, temperatura y pH).',
      'Predicción algorítmica de biomasa semanal y eficiencia de factor de conversión alimenticia (FCR).',
      'Mapeo geoespacial de piscinas acuícolas con alertas críticas tempranas.',
      'Interfaz web moderna de alta fidelidad estética con visualizaciones dinámicas.'
    ],
    technologies: ['JavaScript', 'Machine Learning', 'Data Visualization', 'CSS Custom Props', 'Vercel'],
    image: 'assets/img/project-acuaia.jpg',
    github: 'https://github.com/FranciscoArias10/acuaIA',
    demo: 'https://acua-ia.vercel.app'
  }
];

export function initProjects() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-item');
  const modal = document.getElementById('project-modal');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalDialog = document.getElementById('modal-dialog');
  let lastFocusedElement = null;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      projectItems.forEach(item => {
        const itemCategories = (item.getAttribute('data-category') || '').split(' ');
        if (filterValue === 'all' || itemCategories.includes(filterValue)) {
          item.classList.remove('hidden');
          setTimeout(() => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
          }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'translateY(15px)';
          setTimeout(() => {
            item.classList.add('hidden');
          }, 250);
        }
      });
    });
  });

  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    lastFocusedElement = document.activeElement;

    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-img').alt = `Captura de pantalla de ${project.title}`;
    document.getElementById('modal-category-badge').textContent = project.categoryName;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-problem').textContent = project.problem;
    document.getElementById('modal-description').textContent = project.fullDesc;

    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });

    const techContainer = document.getElementById('modal-tech-tags');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      techContainer.appendChild(span);
    });

    const repoBtn = document.getElementById('modal-repo-link');
    const demoBtn = document.getElementById('modal-demo-link');
    repoBtn.href = project.github;
    demoBtn.href = project.demo;

    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      if (modalCloseBtn) modalCloseBtn.focus();
    }, 100);
  };

  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  };

  const detailButtons = document.querySelectorAll('.btn-view-details');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id');
      openModal(projectId);
    });
  });

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (!modal || !modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeModal();
    }

    if (e.key === 'Tab') {
      const focusableElements = modalDialog.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}
