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
				<div class="portrait-frame"><img class="hero-portrait" src="profile_picture.png" alt="Santiago Eusse Gil, Desarrollador DevSecOps Semi Senior"></div>
			</div>
		</div>
		<div class="home-lower-content container">
			<div class="home-divider" aria-hidden="true"></div>
			<section class="featured-projects" aria-labelledby="featured-projects-title">
				<h2 id="featured-projects-title">Proyectos destacados</h2>
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
	<section class="page-section" aria-labelledby="projects-title">
		<div class="container placeholder-inner">
			<h1 id="projects-title">Proyectos</h1>
			<p class="hero-intro">Esta vista está preparada para presentar proyectos, resultados y aprendizajes.</p>
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
	const routeLink = event.target.closest('[data-route]');

	if (!routeLink) {
		return;
	}

	event.preventDefault();
	navigate(routeLink.getAttribute('href'));
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
