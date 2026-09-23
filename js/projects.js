export const projectsData = [
  {
    id: 'librepdf',
    title: 'LibrePDF - Conversor & Escáner Móvil a PDF',
    category: 'mobile',
    categoryName: 'Mobile App',
    problem: 'Apps comerciales imponen marcas de agua, suscripciones y anuncios',
    shortDesc: 'Aplicación móvil libre, rápida y 100% gratuita desarrollada con React Native y Expo Go para digitalizar fotos y convertirlas a PDF con filtros tipo CamScanner, reordenamiento de páginas y exportación.',
    fullDesc: 'LibrePDF surge como una alternativa de código abierto y sin publicidad a herramientas comerciales de digitalización. Desarrollada con React Native, Expo Go y Expo SDK, permite a los usuarios capturar documentos desde la cámara o galería, aplicar filtros avanzados de realce, rotar y reordenar páginas dinámicamente, y configurar márgenes y formatos de hoja (A4, Carta, Oficio) para compartir al instante.',
    features: [
      'Captura mediante cámara y selección múltiple masiva desde la galería.',
      'Filtros de realce profesionales: Magic Color, Alto Contraste B/N y Escala de Grises.',
      'Reordenamiento visual de páginas, rotación nativa en 90° y eliminación dinámica.',
      'Configuración avanzada de formatos (A4, Carta, Oficio), orientación y márgenes.',
      'Exportación y compartición directa vía WhatsApp, correo y Google Drive sin marcas de agua.'
    ],
    technologies: ['React Native', 'Expo Go', 'TypeScript', 'Expo SDK 57', 'Image Manipulator', 'Print & FileSystem'],
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
    shortDesc: 'Lector de libros electrónicos (EPUB y PDF) desarrollado con React Native y Expo Go, con motor de lectura Ultra-HD, síntesis de voz en tiempo real (Text-to-Speech), almacenamiento local SQLite y modo oscuro OLED.',
    fullDesc: 'LibreFree es una aplicación móvil moderna, libre y privada diseñada para la lectura y el aprendizaje continuo, desarrollada con React Native y Expo Go. Incorpora un lector adaptativo para formatos EPUB y PDF junto con un sintetizador de voz (TTS) integrado que transforma cualquier libro en audiolibro con control de velocidad. Toda la información de lectura, historial y marcadores se almacena 100% offline mediante SQLite, sin recopilar datos ni requerir cuentas.',
    features: [
      'Motor de lectura ultra nítido para archivos EPUB y PDF con escalado Retina.',
      'Síntesis de voz Text-to-Speech (TTS) con selector de velocidades (0.75x a 2.0x).',
      'Temas de lectura ergonómicos: Modo Claro, Sepia, Modo Noche y Modo OLED Puro.',
      'Base de datos interna SQLite para almacenamiento seguro y sin conexión a internet.',
      'Diseño moderno con barra flotante cápsula y navegación táctil optimizada.'
    ],
    technologies: ['React Native', 'Expo Go', 'TypeScript', 'Expo Speech & Audio', 'SQLite WAL', 'ePub.js / PDF.js'],
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
    demo: 'https://ses-platform-ten.vercel.app/'
  },
  {
    id: 'acuaia',
    title: 'AquaScan AI (acuaIA) - Diagnóstico Patológico con Redes Neuronales',
    category: 'ai fullstack',
    categoryName: 'IA & Visión Artificial',
    problem: 'Diagnóstico tardío de patologías e infecciones en camarón de cultivo (Penaeus vannamei)',
    shortDesc: 'Plataforma inteligente de diagnóstico patológico para camarón de cultivo mediante análisis de imágenes estáticas o cámara en tiempo real con redes neuronales convolucionales profundas.',
    fullDesc: 'AquaScan AI (acuaIA) es una plataforma inteligente orientada al sector acuícola que permite diagnosticar patologías en camarón de cultivo (*Penaeus vannamei*). Emplea redes neuronales convolucionales (CNN) profundas y modelos de visión por computador para clasificar muestras patológicas en tiempo real a través de cámaras o imágenes estáticas, entregando métricas de certeza diagnóstica y mitigando pérdidas operativas.',
    features: [
      'Diagnóstico patológico automatizado mediante redes neuronales convolucionales (CNN).',
      'Modos de adquisición versátiles: captura fotográfica, análisis estático o inferencia por video en tiempo real.',
      'Soporte para múltiples arquitecturas de modelos CNN y selección dinámica de pesos.',
      'Interfaz web moderna con visualización inmediata de resultados y nivel de confianza diagnóstica.'
    ],
    technologies: ['Deep Learning', 'CNN Models', 'Computer Vision', 'JavaScript / Web', 'PyTorch / ONNX'],
    image: 'assets/img/project-acuaia.jpg',
    github: 'https://github.com/FranciscoArias10/acuaIA',
    demo: 'https://acua-ia.vercel.app'
  },
  {
    id: 'searchpineapple',
    title: 'SearchPineapple - Buscador y Comparador de Precios Tech',
    category: 'fullstack',
    categoryName: 'Web & Comparador',
    problem: 'Precios dispersos y desactualizados en locales de tecnología',
    shortDesc: 'Sitio web interactivo para encontrar y comparar los mejores precios en locales de tecnología y artefactos electrónicos en Ecuador, con información actualizada sin costo.',
    fullDesc: 'SearchPineapple es un portal web desarrollado para facilitar a los consumidores la búsqueda y comparación de precios en tecnología, computadoras, celulares, suministros y soporte técnico en Ecuador (CompuCentro, Computron, Novicompu, etc.). Centraliza catálogos comerciales, ubicaciones de locales físicos y disponibilidad para ayudar al usuario a tomar decisiones de compra informadas y económicas.',
    features: [
      'Buscador y comparador de precios de locales tecnológicos en tiempo real.',
      'Mapeo de locales físicos y cadenas de tecnología asociadas.',
      'Catálogo clasificado por categorías de artefactos, laptops y accesorios.',
      'Diseño web alegre, responsivo y adaptado a dispositivos móviles y desktop.',
      'Despliegue ágil en producción mediante Netlify con alta disponibilidad.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Netlify'],
    image: 'assets/img/project-searchpineapple.png',
    github: 'https://github.com/FranciscoArias10/SearchPineapple',
    demo: 'https://6508ea205d971a6e18e26809--mellow-treacle-e9c680.netlify.app/'
  },
  {
    id: 'copyeasy',
    title: 'CopyEasy - Transferencia Ultrarrápida de Archivos P2P',
    category: 'mobile fullstack',
    categoryName: 'Web & Mobile App',
    problem: 'Falta de métodos rápidos y sin registro para transferir archivos entre PC y móvil',
    shortDesc: 'Solución multiplataforma (Web y Android) para compartir archivos, fotos, textos y enlaces al instante entre dispositivos mediante salas temporales con códigos QR y Supabase Realtime.',
    fullDesc: 'CopyEasy es una aplicación multiplataforma desarrollada con React Native, Expo Router y Supabase Realtime que permite transferir archivos, imágenes con previsualización, documentos y fragmentos de texto entre computadoras, tablets y teléfonos sin necesidad de cables ni registros. Cuenta con salas temporales seguras generadas con código único y QR, auto-destrucción por inactividad o desconexión del último usuario, despliegue web en producción en Netlify y distribución de APK para Android.',
    features: [
      'Transferencia instantánea sin registro mediante salas temporales y códigos QR.',
      'Sincronización en tiempo real basada en Supabase Realtime (Presence & Broadcast).',
      'Soporte completo para imágenes, documentos (hasta 5MB), notas de texto y enlaces.',
      'Privacidad garantizada con auto-destrucción de salas por inactividad o desconexión.',
      'Despliegue web en Netlify y distribución móvil mediante APK para Android (EAS Build).'
    ],
    technologies: ['React Native', 'Expo Router', 'Expo Go', 'Supabase Realtime', 'TypeScript', 'Netlify', 'EAS Build'],
    image: 'assets/img/project-copyeasy.png',
    github: 'https://github.com/FranciscoArias10/CopyEasy-',
    demo: 'https://copyeasy.netlify.app/'
  }
];

export function initProjects() {
  const filterBtns = document.querySelectorAll('.project-filters .filter-btn');
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
          item.style.transform = 'translateY(20px)';
          setTimeout(() => {
            item.classList.add('hidden');
          }, 300);
        }
      });
    });
  });

  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    lastFocusedElement = document.activeElement;

    const modalImg = document.getElementById('modal-img');
    modalImg.src = project.image;
    modalImg.alt = `Captura de pantalla de ${project.title}`;
    if (project.id === 'librepdf' || project.id === 'librefree') {
      modalImg.classList.add('modal-img-mobile');
    } else {
      modalImg.classList.remove('modal-img-mobile');
    }
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
