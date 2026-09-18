const app = document.querySelector('#app');
const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-navigation');
const navigationLinks = document.querySelectorAll('[data-route]');

const homeView = `
	<section class="hero-section" aria-labelledby="hero-title">
		<div class="container hero-grid">
			<div class="hero-copy">
				<h1 id="hero-title">Santiago<br><span>Eusse Gil</span></h1>
				<p class="hero-role">Desarrollador DevSecOps Semi Senior</p>
				<p class="hero-intro">Construyo y mejoro plataformas de entrega de software seguras, automatizadas y confiables. Mi enfoque integra desarrollo, operaciones y seguridad para convertir ideas en productos sostenibles.</p>
				<div class="hero-actions" aria-label="Accesos principales">
					<a class="button button-primary" data-route href="/proyectos">Ver proyectos <span aria-hidden="true">&#8599;</span></a>
					<a class="button button-secondary" href="mailto:santiagoegla@gmail.com">Contactarme <span aria-hidden="true">&#8594;</span></a>
				</div>
				<div class="contact-links" aria-label="Medios de contacto">
					<div class="contact-links-primary">
					<a href="https://wa.me/573197994175" target="_blank" rel="noopener noreferrer"><svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 8.5c.3-.3.7-.2.9.1l.7 1c.2.3.2.6 0 .8l-.5.6a6 6 0 0 0 2.9 2.9l.6-.5c.2-.2.5-.2.8 0l1 .7c.3.2.4.6.1.9l-.4.5c-.4.5-1.1.7-1.7.5a8.5 8.5 0 0 1-5.7-5.7c-.2-.6 0-1.3.5-1.7z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg><span>WhatsApp</span><span aria-hidden="true">&#8599;</span></a>
					<a href="https://www.linkedin.com/in/santiago-eusse-gil-638b83220/" target="_blank" rel="noopener noreferrer"><svg class="contact-icon contact-icon-fill" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/><path d="M6.2 9.4H4.1v7.7h2.1V9.4Zm.1-2.4c0-.7-.5-1.2-1.2-1.2S4 6.3 4 7s.5 1.2 1.2 1.2S6.3 7.7 6.3 7ZM10.1 9.4H8v7.7h2.1v-3.8c0-1 .2-1.7 1.3-1.7s1.1.9 1.1 1.7v3.8h2.1v-4.2c0-2- .4-3.5-2.7-3.5-1 0-1.6.5-1.8 1v-1Z" fill="#0a0a0a"/></svg><span>LinkedIn</span><span aria-hidden="true">&#8599;</span></a>
					<a href="https://github.com/eusse701sg" target="_blank" rel="noopener noreferrer"><svg class="contact-icon contact-icon-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2V22c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z"/></svg><span>GitHub</span><span aria-hidden="true">&#8599;</span></a>
					</div>
					<div class="contact-links-secondary">
					<a href="mailto:santiagoegla@gmail.com"><svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg><span>Email: santiagoegla@gmail.com</span></a>
					<a href="tel:+573197994175"><svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 6.3 8.2 9a14.5 14.5 0 0 0 6.8 6.8l2.7-1.8 2.8 2.8-1.7 3.2c-.5.9-1.5 1.3-2.5 1.1A17.8 17.8 0 0 1 3 7.4c-.2-1 .2-2 1.1-2.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><span>Teléfono: +57 319 799 4175</span></a>
					</div>
				</div>
			</div>
			<div class="hero-portrait-wrap">
				<div class="portrait-frame"><img class="hero-portrait" src="assets/profile_picture.png" alt="Santiago Eusse Gil, Desarrollador DevSecOps Semi Senior"></div>
			</div>
		</div>
		<div class="home-lower-content container">
			<div class="home-divider" aria-hidden="true"></div>
			<section class="featured-projects" aria-labelledby="featured-projects-title">
				<h2 id="featured-projects-title">Proyectos destacados</h2>
				<div class="featured-projects-grid">
					<a class="featured-project" href="https://github.com/eusse701sg/Implementacion-Loteria" target="_blank" rel="noopener noreferrer">
						<img src="assets/loteria/Loteria1.png" alt="Vista de Implementación Lotería">
						<span><strong>Implementación Lotería</strong><small>Python · Django</small></span>
					</a>
					<a class="featured-project" href="https://github.com/eusse701sg/CamaraDelTiempo" target="_blank" rel="noopener noreferrer">
						<img src="assets/camara/Camara1.png" alt="Vista de Cámara del Tiempo">
						<span><strong>Cámara del Tiempo</strong><small>React · TypeScript</small></span>
					</a>
					<a class="featured-project" href="https://github.com/eusse701sg/Sportex" target="_blank" rel="noopener noreferrer">
						<img src="assets/sportex/sportex1.png" alt="Vista de Sportex">
						<span><strong>Sportex</strong><small>Python · Flet</small></span>
					</a>
				</div>
			</section>
		</div>
	</section>`;

const experienceView = `
	<section class="experience-page" aria-labelledby="experience-title">
		<div class="container experience-layout">
			<header class="experience-heading">
				<p class="eyebrow">Trayectoria profesional</p>
				<h1 id="experience-title">Experiencia</h1>
			</header>

			<div class="experience-content">
				<section class="experience-block" aria-labelledby="work-title">
					<div class="section-label"><h2 id="work-title">Experiencia laboral</h2></div>
					<article class="experience-entry">
						<div class="entry-meta">
							<span class="entry-period">2023 - Actualidad</span>
							<span class="entry-type">Profesional</span>
						</div>
						<div class="entry-body">
							<h3>Profesional del equipo DevSecOps</h3>
							<p class="entry-company">Aportes en Línea</p>
							<p>Participación en el desarrollo, automatización y mantenimiento de procesos de integración y despliegue continuo (CI/CD) para APIs, aplicaciones web, funciones y servicios Windows en ambientes productivos y no productivos.</p>
							<h4>Principales responsabilidades</h4>
							<ul class="responsibility-list">
								<li>Diseño y mantenimiento de pipelines CI/CD en Azure DevOps para compilación, generación de paquetes, artefactos y despliegues.</li>
								<li>Automatización de procesos de build y deployment para proyectos .NET, aplicaciones web, APIs, Azure Functions y Windows Services.</li>
								<li>Implementación de controles de calidad y seguridad mediante SonarQube, Fortify y Quality Gates.</li>
								<li>Automatización y ejecución de pruebas funcionales y no funcionales con Playwright, Robot Framework, JMeter y Postman.</li>
								<li>Gestión de paquetes y dependencias con NuGet y npm, además de repositorios y control de versiones con Git y GitHub.</li>
								<li>Trabajo con APIs, microservicios, archivos JSON y diferentes tecnologías de bases de datos.</li>
								<li>Automatización de tareas operativas mediante Power Automate y scripts.</li>
								<li>Participación bajo metodología Scrum, con historias de usuario, solución de errores, análisis de logs y colaboración con equipos de desarrollo y QA.</li>
							</ul>
							<h4>Lenguajes y tecnologías</h4>
							<div class="skill-tags" aria-label="Tecnologías utilizadas en Aportes en Línea">
								<span>.NET</span><span>Azure DevOps</span><span>Azure Functions</span><span>SonarQube</span><span>Fortify</span><span>Playwright</span><span>Robot Framework</span><span>JMeter</span><span>Postman</span><span>Git</span><span>GitHub</span><span>NuGet</span><span>npm</span><span>Power Automate</span><span>APIs</span><span>Microservicios</span>
							</div>
						</div>
					</article>
				</section>

			<section class="experience-block academic-block" aria-labelledby="academic-title">
					<div class="section-label"><h2 id="academic-title">Formación académica</h2></div>
					<article class="experience-entry">
						<div class="entry-meta">
							<span class="entry-period">2021 - Actualidad</span>
							<span class="entry-type">Académica</span>
						</div>
						<div class="entry-body">
							<h3>Ingeniería de Sistemas</h3>
							<p class="entry-company">Universidad Nacional de Colombia</p>
							<p>Formación en desarrollo de software, ingeniería de sistemas, bases de datos, automatización y tecnologías cloud.</p>
							<div class="academic-focus" aria-label="Áreas de formación">
								<span>Desarrollo de software</span><span>Automatización y DevOps</span><span>Bases de datos</span><span>Cloud Computing</span><span>Redes y Telecomunicaciones</span><span>Desarrollo Web</span>
							</div>
						</div>
					</article>
				</section>

			<section class="experience-block skills-block" aria-labelledby="skills-title">
					<div class="section-label"><h2 id="skills-title">Habilidades</h2></div>
					<div class="skills-grid">
						<div class="skill-category">
							<h3>Lenguajes de programación</h3>
							<div class="skill-tags"><span>Python</span><span>Java</span><span>PowerShell</span><span>Bash</span><span>HTML</span><span>YAML</span><span>SQL</span></div>
						</div>
						<div class="skill-category">
							<h3>Tecnologías</h3>
							<div class="skill-tags"><span>.NET</span><span>Azure DevOps</span><span>Azure Pipelines</span><span>CI/CD</span><span>MSBuild</span><span>.NET CLI / dotnet</span><span>Power Automate</span><span>Microsoft Azure</span><span>AWS</span></div>
						</div>
						<div class="skill-category">
							<h3>Herramientas</h3>
							<div class="skill-tags"><span>Visual Studio Code</span><span>Visual Studio</span><span>GitHub</span><span>Git</span><span>PostgreSQL</span><span>NuGet</span><span>npm</span></div>
						</div>
						<div class="skill-category">
							<h3>DevSecOps</h3>
							<div class="skill-tags"><span>SonarQube</span><span>Fortify</span><span>Análisis estático de código (SAST)</span><span>Quality Gates</span><span>Controles de calidad y seguridad</span></div>
						</div>
						<div class="skill-category">
							<h3>Testing / QA</h3>
							<div class="skill-tags"><span>Playwright</span><span>Robot Framework</span><span>JMeter</span><span>Postman</span><span>Pruebas automatizadas</span><span>Pruebas de carga y estrés</span></div>
						</div>
						<div class="skill-category">
							<h3>Metodologías / prácticas</h3>
							<div class="skill-tags"><span>Scrum</span><span>Historias de usuario</span><span>Resolución de errores</span><span>Análisis de logs</span><span>Troubleshooting</span><span>Gestión de artefactos y paquetes</span><span>Compilación y empaquetado</span><span>Despliegue multiambiente</span></div>
						</div>
						<div class="skill-category skill-category-wide">
							<h3>Idiomas</h3>
							<div class="language-item"><span class="language-flag" aria-hidden="true">US</span><span>Inglés B2</span><span class="language-level">Upper Intermediate</span></div>
						</div>
					</div>
				</section>

			<section class="experience-block certifications-block" aria-labelledby="certifications-title">
					<div class="section-label"><h2 id="certifications-title">Certificaciones</h2></div>
					<div class="certifications-grid">
						<article class="certification-card">
							<div class="certification-card-top"><span class="certification-year">2023</span><span class="certification-index">01</span></div>
							<h3>Azure DevOps: Flujos de CI/CD</h3>
							<p class="certification-issuer">Platzi</p>
							<a class="credential-button" href="https://platzi.com/p/santiagoegla/curso/3275-course/diploma/detalle/" target="_blank" rel="noopener noreferrer">Ver credencial <span aria-hidden="true">&#8599;</span></a>
						</article>

						<article class="certification-card">
							<div class="certification-card-top"><span class="certification-year">2023</span><span class="certification-index">02</span></div>
							<h3>Fundamentos de Python</h3>
							<p class="certification-issuer">Platzi</p>
						</article>

						<article class="certification-card">
							<div class="certification-card-top"><span class="certification-year">2022</span><span class="certification-index">03</span></div>
							<h3>Nivel de Inglés</h3>
							<p class="certification-issuer">EF SET</p>
							<a class="credential-button" href="https://cert.efset.org/MwKX22" target="_blank" rel="noopener noreferrer">Ver credencial <span aria-hidden="true">&#8599;</span></a>
						</article>

						<article class="certification-card">
							<div class="certification-card-top"><span class="certification-year">2026</span><span class="certification-index">04</span></div>
							<h3>Responsive Web Design</h3>
							<p class="certification-issuer">freeCodeCamp</p>
							<a class="credential-button" href="https://www.freecodecamp.org/certification/fcc-3f57db3e-f794-4e48-98a7-51d5eb433048/responsive-web-design-v9" target="_blank" rel="noopener noreferrer">Ver credencial <span aria-hidden="true">&#8599;</span></a>
						</article>

						<article class="certification-card">
							<div class="certification-card-top"><span class="certification-year">2020</span><span class="certification-index">05</span></div>
							<h3>Introduction to Cybersecurity</h3>
							<p class="certification-issuer">Cisco</p>
							<a class="credential-button" href="https://www.credly.com/badges/d7c4c604-94f4-4751-8341-6bbb361a453d/public_url" target="_blank" rel="noopener noreferrer">Ver credencial <span aria-hidden="true">&#8599;</span></a>
						</article>

						<article class="certification-card">
							<div class="certification-card-top"><span class="certification-year">2025</span><span class="certification-index">06</span></div>
							<h3>AWS Academy Graduate - Cloud Foundations</h3>
							<p class="certification-issuer">AWS Academy</p>
							<a class="credential-button" href="https://www.credly.com/badges/2815f1f9-4128-47e1-b744-fdce36d2107c/print" target="_blank" rel="noopener noreferrer">Ver credencial <span aria-hidden="true">&#8599;</span></a>
						</article>
					</div>
				</section>
			</div>
		</div>
	</section>`;

const projectsView = `
	<section class="projects-page" aria-labelledby="projects-title">
		<div class="container projects-layout">
			<header class="projects-heading">
				<p class="eyebrow">Trabajo seleccionado</p>
				<h1 id="projects-title">Proyectos</h1>
			</header>

			<div class="projects-grid">
				<article class="project-card">
					<div class="project-gallery">
						<div class="project-visual project-visual-lottery"><img src="assets/loteria/Loteria1.png" alt="Interfaz principal del sistema de gestión de números de lotería"></div>
						<button class="gallery-toggle" type="button" aria-expanded="false">Ver todas las imágenes <span aria-hidden="true">&#8595;</span></button>
						<div class="project-gallery-list" aria-label="Galería de Implementación Lotería">
							<img src="assets/loteria/Loteria1.png" alt="Pantalla de inicio de Implementación Lotería">
							<img src="assets/loteria/Loteria2.png" alt="Pantalla de registro de números de lotería">
							<img src="assets/loteria/Loteria3.png" alt="Pantalla de consulta de números de lotería">
							<img src="assets/loteria/Loteria4.png" alt="Pantalla adicional del sistema de lotería">
						</div>
					</div>
					<div class="project-card-body">
						<p class="project-index">01 <span>/</span> Django web app</p>
						<h2>Implementación Lotería</h2>
						<p class="project-description">Sistema web para administrar el ciclo completo de los números de lotería. Permite registrar nuevos números, consultar listados, actualizar información y eliminar registros mediante flujos definidos para el operador. El proyecto incorpora documentación de casos de uso, diagramas de secuencia y una suite de pruebas que cubre validaciones de modelo, formularios, vistas, integración y escenarios de seguridad.</p>
						<div class="project-technologies" aria-label="Tecnologías de Implementación Lotería"><span>Python</span><span>Django</span><span>HTML</span><span>CSS</span></div>
						<a class="project-link" href="https://github.com/eusse701sg/Implementacion-Loteria" target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">&#8599;</span></a>
					</div>
				</article>

				<article class="project-card">
					<div class="project-gallery">
						<div class="project-visual project-visual-time"><img src="assets/camara/Camara1.png" alt="Pantalla principal de la aplicación Cámara del Tiempo"></div>
						<button class="gallery-toggle" type="button" aria-expanded="false">Ver todas las imágenes <span aria-hidden="true">&#8595;</span></button>
						<div class="project-gallery-list" aria-label="Galería de Cámara del Tiempo">
							<img src="assets/camara/Camara1.png" alt="Pantalla de inicio de Cámara del Tiempo">
							<img src="assets/camara/Camara2.png" alt="Pantalla de Cámara del Tiempo 2">
							<img src="assets/camara/Camara3.png" alt="Pantalla de Cámara del Tiempo 3">
							<img src="assets/camara/camara4.png" alt="Pantalla de Cámara del Tiempo 4">
							<img src="assets/camara/camara5.png" alt="Pantalla de Cámara del Tiempo 5">
							<img src="assets/camara/camara6.png" alt="Pantalla de Cámara del Tiempo 6">
							<img src="assets/camara/camara7.png" alt="Pantalla de Cámara del Tiempo 7">
							<img src="assets/camara/camara8.png" alt="Pantalla de Cámara del Tiempo 8">
							<img src="assets/camara/camara9.png" alt="Pantalla de Cámara del Tiempo 9">
							<img src="assets/camara/camara10.png" alt="Pantalla de Cámara del Tiempo 10">
							<img src="assets/camara/camara11.png" alt="Pantalla de Cámara del Tiempo 11">
							<img src="assets/camara/camara12.png" alt="Pantalla de Cámara del Tiempo 12">
							<img src="assets/camara/camara13.png" alt="Pantalla de Cámara del Tiempo 13">
						</div>
					</div>
					<div class="project-card-body">
						<p class="project-index">02 <span>/</span> React application</p>
						<h2>Cámara del Tiempo</h2>
						<p class="project-description">Aplicación full stack orientada a la gestión de citas y a la creación de un espacio de concentración para sesiones de estudio. Su experiencia toma inspiración visual de Dragon Ball y permite organizar usuarios, reservas y acceso a las cámaras del tiempo. El frontend está construido con React, Vite y TypeScript, mientras que el backend trabaja con servicios conectados a MySQL.</p>
						<div class="project-technologies" aria-label="Tecnologías de Cámara del Tiempo"><span>React</span><span>Vite</span><span>TypeScript</span><span>MySQL</span></div>
						<a class="project-link" href="https://github.com/eusse701sg/CamaraDelTiempo" target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">&#8599;</span></a>
					</div>
				</article>

				<article class="project-card">
					<div class="project-gallery">
						<div class="project-visual project-visual-sportex"><img src="assets/sportex/sportex1.png" alt="Pantalla principal y marca de la plataforma Sportex"></div>
						<button class="gallery-toggle" type="button" aria-expanded="false">Ver todas las imágenes <span aria-hidden="true">&#8595;</span></button>
						<div class="project-gallery-list" aria-label="Galería de Sportex">
							<img src="assets/sportex/sportex1.png" alt="Pantalla de inicio de Sportex">
							<img src="assets/sportex/sportex2.png" alt="Pantalla de Sportex 2">
							<img src="assets/sportex/sportex3.png" alt="Pantalla de Sportex 3">
							<img src="assets/sportex/sportex4.png" alt="Pantalla de Sportex 4">
							<img src="assets/sportex/sportex5.png" alt="Pantalla de Sportex 5">
						</div>
					</div>
					<div class="project-card-body">
						<p class="project-index">03 <span>/</span> Local sports platform</p>
						<h2>Sportex</h2>
						<p class="project-description">Plataforma de escritorio que conecta a los aficionados con eventos, torneos y espacios deportivos cercanos. Sportex permite consultar, crear y gestionar eventos, filtrar actividades por ubicación y visualizar información estadística para apoyar la toma de decisiones. La solución combina una interfaz desarrollada con Flet, manejo de datos tabulares y análisis geoespacial mediante el ecosistema científico de Python.</p>
						<div class="project-technologies" aria-label="Tecnologías de Sportex"><span>Python</span><span>Flet</span><span>Pandas</span><span>GeoPandas</span></div>
						<a class="project-link" href="https://github.com/eusse701sg/Sportex" target="_blank" rel="noopener noreferrer">Ver repositorio <span aria-hidden="true">&#8599;</span></a>
					</div>
				</article>
			</div>
		</div>
	</section>`;

const views = {
	'/': homeView,
	'/experiencia': experienceView,
	'/proyectos': projectsView
};

const closeMenu = () => {
	if (!siteNavigation || !menuToggle) {
		return;
	}

	siteNavigation.classList.remove('is-open');
	menuToggle.setAttribute('aria-expanded', 'false');
};

const updateActiveLink = (path) => {
	navigationLinks.forEach((link) => {
		link.classList.toggle('is-active', link.getAttribute('href') === path);
	});
};

const renderRoute = (path = window.location.pathname) => {
	const normalizedPath = views[path] ? path : '/';

	app.innerHTML = views[normalizedPath];
	updateActiveLink(normalizedPath);
	closeMenu();
	window.scrollTo(0, 0);
};

const navigate = (path) => {
	if (path === window.location.pathname) {
		renderRoute(path);
		return;
	}

	history.pushState({}, '', path);
	renderRoute(path);
};

document.addEventListener('click', (event) => {
	const galleryToggle = event.target.closest('.gallery-toggle');

	if (galleryToggle) {
		const gallery = galleryToggle.closest('.project-gallery');
		const card = gallery.closest('.project-card');
		const images = [...gallery.querySelectorAll('.project-gallery-list img')];
		const modal = document.createElement('div');
		modal.className = 'gallery-modal';
		modal.setAttribute('role', 'dialog');
		modal.setAttribute('aria-modal', 'true');
		modal.setAttribute('aria-label', `Galería de ${card.querySelector('h2').textContent}`);
		modal.innerHTML = `
			<div class="gallery-modal-panel">
				<div class="gallery-modal-header">
					<h2>${card.querySelector('h2').textContent}</h2>
					<button class="gallery-modal-close" type="button" aria-label="Cerrar galería">&times;</button>
				</div>
				<div class="gallery-modal-viewer">
					<button class="gallery-modal-arrow gallery-modal-previous" type="button" aria-label="Imagen anterior">&#8592;</button>
					<figure class="gallery-modal-figure">
						<img class="gallery-modal-image" src="${images[0].src}" alt="${images[0].alt}">
						<figcaption class="gallery-modal-caption">1 / ${images.length}</figcaption>
					</figure>
					<button class="gallery-modal-arrow gallery-modal-next" type="button" aria-label="Siguiente imagen">&#8594;</button>
				</div>
			</div>`;

		document.body.append(modal);
		document.body.classList.add('modal-open');
		galleryToggle.setAttribute('aria-expanded', 'true');
		modal.querySelector('.gallery-modal-close').focus();

		let currentImageIndex = 0;
		const modalImage = modal.querySelector('.gallery-modal-image');
		const modalCaption = modal.querySelector('.gallery-modal-caption');
		const updateModalImage = (index) => {
			currentImageIndex = (index + images.length) % images.length;
			modalImage.src = images[currentImageIndex].src;
			modalImage.alt = images[currentImageIndex].alt;
			modalCaption.textContent = `${currentImageIndex + 1} / ${images.length}`;
		};

		modal.querySelector('.gallery-modal-previous').addEventListener('click', () => updateModalImage(currentImageIndex - 1));
		modal.querySelector('.gallery-modal-next').addEventListener('click', () => updateModalImage(currentImageIndex + 1));
		modal._updateModalImage = updateModalImage;
		return;
	}

	const closeButton = event.target.closest('.gallery-modal-close');
	const modal = event.target.closest('.gallery-modal');

	if (closeButton || (modal && event.target === modal)) {
		modal.remove();
		document.body.classList.remove('modal-open');
		document.querySelectorAll('.gallery-toggle').forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
		return;
	}

	const routeLink = event.target.closest('[data-route]');

	if (!routeLink) {
		return;
	}

	event.preventDefault();
	navigate(routeLink.getAttribute('href'));
});

document.addEventListener('keydown', (event) => {
	if (event.key === 'Escape') {
		const modal = document.querySelector('.gallery-modal');

		if (modal) {
			modal.remove();
			document.body.classList.remove('modal-open');
			document.querySelectorAll('.gallery-toggle').forEach((toggle) => toggle.setAttribute('aria-expanded', 'false'));
		}
	}

	const modal = document.querySelector('.gallery-modal');

	if (modal && (event.key === 'ArrowLeft' || event.key === 'ArrowRight')) {
		const direction = event.key === 'ArrowLeft' ? -1 : 1;
		const currentCaption = modal.querySelector('.gallery-modal-caption').textContent;
		const currentIndex = Number.parseInt(currentCaption.split(' ')[0], 10) - 1;
		modal._updateModalImage(currentIndex + direction);
	}
});

if (menuToggle && siteNavigation) {
	menuToggle.addEventListener('click', () => {
		const isOpen = siteNavigation.classList.toggle('is-open');
		menuToggle.setAttribute('aria-expanded', String(isOpen));
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth > 760) {
			closeMenu();
		}
	});
}

window.addEventListener('popstate', () => renderRoute());
renderRoute();
