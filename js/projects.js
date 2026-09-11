/**
 * PROJECTS CONTROLLER - FRANCISCO ARIAS PORTFOLIO
 * Filtrado interactivo por categoría y modal detallado de proyectos con accesibilidad
 */

export const projectsData = [
  {
    id: 'edutrack',
    title: 'EduTrack UNEMI - Portal Académico',
    category: 'fullstack',
    categoryName: 'Full Stack',
    problem: 'Gestión dispersa de calificaciones y horarios',
    shortDesc: 'Plataforma web integral para el seguimiento académico universitario, centralizando notas, asistencia, tareas y horarios en tiempo real.',
    fullDesc: 'EduTrack UNEMI surge para resolver la fragmentación en la consulta de notas, tareas y horarios académicos. Proporciona a estudiantes y docentes una interfaz unificada, intuitiva y en tiempo real para el seguimiento del rendimiento universitario.',
    features: [
      'Visualización gráfica del progreso académico y promedio ponderado.',
      'Horario interactivo semanal con alertas de inicio de clases.',
      'Gestión de entrega de tareas y repositorio de materiales por asignatura.',
      'Arquitectura basada en componentes reutilizables con API REST.'
    ],
    technologies: ['HTML5 Semántico', 'CSS3 Grid/Flexbox', 'JavaScript ES6+', 'Node.js', 'PostgreSQL'],
    image: 'assets/img/project-edutrack.jpg',
    github: 'https://github.com/FranciscoArias10/edutrack-unemi',
    demo: 'https://franciscoarias10.github.io/edutrack-unemi'
  },
  {
    id: 'ecomarket',
    title: 'EcoMarket - E-commerce Sostenible',
    category: 'frontend',
    categoryName: 'Frontend',
    problem: 'Poca visibilidad para productos ecológicos y compras lentas',
    shortDesc: 'Catálogo de comercio electrónico centrado en productos sostenibles con carrito de compra reactivo, filtros dinámicos y persistencia local.',
    fullDesc: 'EcoMarket es una aplicación web pensada para potenciar a productores ecológicos locales. Cuenta con una experiencia de compra fluida con filtros multicriterio, carrito reactivo en tiempo real y persistencia en localStorage sin recargar la página.',
    features: [
      'Carrito de compras interactivo con cálculo automático de totales e impuestos.',
      'Filtros dinámicos por categorías (Bambú, Orgánico, Reutilizable) y rango de precio.',
      'Diseño responsive adaptado meticulosamente a smartphones y tablets.',
      'Almacenamiento persistente del estado del carrito en el navegador.'
    ],
    technologies: ['HTML5', 'CSS Variables', 'JavaScript Vanilla', 'LocalStorage API'],
    image: 'assets/img/project-ecomarket.jpg',
    github: 'https://github.com/FranciscoArias10/ecomarket-store',
    demo: 'https://franciscoarias10.github.io/ecomarket-store'
  },
  {
    id: 'devpulse',
    title: 'DevPulse Metrics - API & Performance Monitor',
    category: 'herramientas',
    categoryName: 'Herramientas',
    problem: 'Dificultad para diagnosticar cuellos de botella en APIs',
    shortDesc: 'Dashboard analítico de rendimiento y disponibilidad de endpoints con visualización en tiempo real de latencias y códigos HTTP.',
    fullDesc: 'DevPulse Metrics es una herramienta de observabilidad para desarrolladores que monitorea servicios web y microservicios. Permite identificar latencias anómalas, caídas de servicio y tasas de error 4xx/5xx en cuestión de segundos.',
    features: [
      'Gráficas en tiempo real de tiempos de respuesta por región geográfica.',
      'Medidores de latencia con alertas visuales ante degradación del servicio.',
      'Distribución porcentual de códigos de estado HTTP (2xx, 4xx, 5xx).',
      'Filtrado y búsqueda instantánea en logs recientes de peticiones.'
    ],
    technologies: ['JavaScript ES6+', 'CSS Custom Properties', 'SVG Canvas', 'REST API', 'WebSockets'],
    image: 'assets/img/project-devpulse.jpg',
    github: 'https://github.com/FranciscoArias10/devpulse-metrics',
    demo: 'https://franciscoarias10.github.io/devpulse-metrics'
  },
  {
    id: 'taskflow',
    title: 'TaskFlow Pro - Gestor Ágil Kanban',
    category: 'frontend',
    categoryName: 'Frontend',
    problem: 'Seguimiento desorganizado de tareas en equipos ágiles',
    shortDesc: 'Tablero Kanban interactivo para flujos de trabajo Scrum y Kanban con asignación de etiquetas de prioridad y estados personalizables.',
    fullDesc: 'TaskFlow Pro agiliza la gestión de proyectos de desarrollo mediante tableros dinámicos. Los usuarios pueden crear tareas, priorizarlas por etiquetas de criticidad y moverlas entre columnas para visualizar el avance del sprint.',
    features: [
      'Columnas de flujo de trabajo: Backlog, En Progreso, Revisión de Código y Finalizado.',
      'Etiquetado por criticidad (Crítico, UI/UX, Backend, Feature).',
      'Contador en tiempo real de tarjetas activas por columna.',
      'Persistencia automática de estados y tareas en almacenamiento local.'
    ],
    technologies: ['HTML5 Drag & Drop', 'CSS Modern Flexbox', 'JavaScript Modular', 'LocalStorage'],
    image: 'assets/img/project-taskflow.jpg',
    github: 'https://github.com/FranciscoArias10/taskflow-pro',
    demo: 'https://franciscoarias10.github.io/taskflow-pro'
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

  // ==========================================================================
  // FILTRADO DINÁMICO DE PROYECTOS
  // ==========================================================================
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filterValue = btn.getAttribute('data-filter');

      // Actualizar botón activo
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filtrar tarjetas
      projectItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filterValue === 'all' || itemCategory === filterValue) {
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

  // ==========================================================================
  // MODAL DE DETALLES DE PROYECTO
  // ==========================================================================
  const openModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !modal) return;

    lastFocusedElement = document.activeElement;

    // Rellenar contenido del modal
    document.getElementById('modal-img').src = project.image;
    document.getElementById('modal-img').alt = `Captura de pantalla de ${project.title}`;
    document.getElementById('modal-category-badge').textContent = project.categoryName;
    document.getElementById('modal-title').textContent = project.title;
    document.getElementById('modal-problem').textContent = project.problem;
    document.getElementById('modal-description').textContent = project.fullDesc;

    // Lista de características clave
    const featuresList = document.getElementById('modal-features');
    featuresList.innerHTML = '';
    project.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });

    // Tecnologías
    const techContainer = document.getElementById('modal-tech-tags');
    techContainer.innerHTML = '';
    project.technologies.forEach(tech => {
      const span = document.createElement('span');
      span.className = 'tech-tag';
      span.textContent = tech;
      techContainer.appendChild(span);
    });

    // Enlaces
    const repoBtn = document.getElementById('modal-repo-link');
    const demoBtn = document.getElementById('modal-demo-link');
    repoBtn.href = project.github;
    demoBtn.href = project.demo;

    // Mostrar modal
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Focus en el botón de cerrar
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

  // Botones "Ver detalles"
  const detailButtons = document.querySelectorAll('.btn-view-details');
  detailButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const projectId = btn.getAttribute('data-project-id');
      openModal(projectId);
    });
  });

  // Cerrar modal por clic en backdrop o botón X
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);

  // Cerrar con Escape y atrapar el foco
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
