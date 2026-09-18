const app = document.querySelector('#app');
const menuToggle = document.querySelector('.menu-toggle');
const siteNavigation = document.querySelector('.site-navigation');
const navigationLinks = document.querySelectorAll('[data-route]');

const homeView = `
	<section class="hero-section" aria-labelledby="hero-title">
		<div class="container hero-grid">
			<div class="hero-copy">
				<h1 id="hero-title">Santiago<br><span>Eusse Gil</span></h1>
				<p class="hero-role">Ingeniero DevSecOps SemiSenior</p>
				<p class="hero-intro">Construyo y mejoro plataformas de entrega de software seguras, automatizadas y confiables. Mi enfoque integra desarrollo, operaciones y seguridad para convertir ideas en productos sostenibles.</p>
				<div class="hero-actions" aria-label="Accesos principales">
					<a class="button button-primary" data-route href="/proyectos">Ver proyectos <span aria-hidden="true">&#8599;</span></a>
					<a class="button button-secondary" href="mailto:santiagoegla@gmail.com">Contactarme <span aria-hidden="true">&#8594;</span></a>
				</div>
				<div class="contact-links" aria-label="Medios de contacto">
					<a href="mailto:santiagoegla@gmail.com"><svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5.5h18v13H3z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="m4 7 8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg><span>Correo: santiagoegla@gmail.com</span></a>
					<a href="tel:+573197994175"><svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.5 10 6.3 8.2 9a14.5 14.5 0 0 0 6.8 6.8l2.7-1.8 2.8 2.8-1.7 3.2c-.5.9-1.5 1.3-2.5 1.1A17.8 17.8 0 0 1 3 7.4c-.2-1 .2-2 1.1-2.5z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/></svg><span>Teléfono: +57 319 799 4175</span></a>
					<a href="https://wa.me/573197994175" target="_blank" rel="noopener noreferrer"><svg class="contact-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 11.5a8 8 0 0 1-11.8 7L4 20l1.5-4.1A8 8 0 1 1 20 11.5Z" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 8.5c.3-.3.7-.2.9.1l.7 1c.2.3.2.6 0 .8l-.5.6a6 6 0 0 0 2.9 2.9l.6-.5c.2-.2.5-.2.8 0l1 .7c.3.2.4.6.1.9l-.4.5c-.4.5-1.1.7-1.7.5a8.5 8.5 0 0 1-5.7-5.7c-.2-.6 0-1.3.5-1.7z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg><span>WhatsApp</span><span aria-hidden="true">&#8599;</span></a>
					<a href="https://www.linkedin.com/in/santiago-eusse-gil-638b83220/" target="_blank" rel="noopener noreferrer"><svg class="contact-icon contact-icon-fill" viewBox="0 0 24 24" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor"/><path d="M6.2 9.4H4.1v7.7h2.1V9.4Zm.1-2.4c0-.7-.5-1.2-1.2-1.2S4 6.3 4 7s.5 1.2 1.2 1.2S6.3 7.7 6.3 7ZM10.1 9.4H8v7.7h2.1v-3.8c0-1 .2-1.7 1.3-1.7s1.1.9 1.1 1.7v3.8h2.1v-4.2c0-2- .4-3.5-2.7-3.5-1 0-1.6.5-1.8 1v-1Z" fill="#0a0a0a"/></svg><span>LinkedIn</span><span aria-hidden="true">&#8599;</span></a>
					<a href="https://github.com/eusse701sg" target="_blank" rel="noopener noreferrer"><svg class="contact-icon contact-icon-fill" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .8a11.2 11.2 0 0 0-3.5 21.8c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.4-4-1.4-.5-1.4-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.8 1.2 1.8 1.2 1.1 1.8 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.4-5.5-6a4.7 4.7 0 0 1 1.2-3.2c-.1-.3-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.3 11.3 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.6.2 2.9.1 3.2a4.7 4.7 0 0 1 1.2 3.2c0 4.6-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2V22c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z"/></svg><span>GitHub</span><span aria-hidden="true">&#8599;</span></a>
				</div>
			</div>
			<div class="hero-portrait-wrap">
				<div class="portrait-frame"><img class="hero-portrait" src="profile_picture.png" alt="Santiago Eusse Gil, Ingeniero DevSecOps SemiSenior"></div>
				<p class="portrait-caption"><span class="status-dot" aria-hidden="true"></span> Disponible para nuevos retos</p>
			</div>
		</div>
	</section>`;

const experienceView = `
	<section class="page-section page-section--muted" aria-labelledby="experience-title">
		<div class="container placeholder-inner">
			<h1 id="experience-title">Experiencia</h1>
			<p class="hero-intro">Esta vista está preparada para presentar la trayectoria profesional, responsabilidades y resultados de Santiago.</p>
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
