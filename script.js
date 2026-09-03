const menuToggle = document.getElementById('menuToggle');
const menu = document.querySelector('.menu');
const darkModeButton = document.querySelector('#darkModeBtn');
const scrollTopButton = document.querySelector('#scrollTopBtn');

if (localStorage.getItem('darkMode') === 'true') {
	document.body.classList.add('dark-mode');
	darkModeButton.textContent = '☀️';
	darkModeButton.setAttribute('aria-label', 'Aktifkan mode terang');
	darkModeButton.setAttribute('aria-pressed', 'true');
}

darkModeButton.addEventListener('click', () => {
	const isDarkMode = document.body.classList.toggle('dark-mode');
	darkModeButton.textContent = isDarkMode ? '☀️' : '🌙';
	darkModeButton.setAttribute('aria-label', isDarkMode ? 'Aktifkan mode terang' : 'Aktifkan mode gelap');
	darkModeButton.setAttribute('aria-pressed', isDarkMode);
	localStorage.setItem('darkMode', isDarkMode);
});

window.addEventListener('scroll', () => {
	scrollTopButton.classList.toggle('visible', window.scrollY > 400);
});

scrollTopButton.addEventListener('click', () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
});

menuToggle.addEventListener('click', () => {
	const isOpen = menu.classList.toggle('active');
	menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.menu a').forEach((link) => {
	link.addEventListener('click', () => {
		menu.classList.remove('active');
		menuToggle.setAttribute('aria-expanded', 'false');
	});
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
	link.addEventListener('click', (event) => {
		event.preventDefault();
		const target = document.querySelector(link.getAttribute('href'));

		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
		}
	});
});

document.querySelector('#contact-form').addEventListener('submit', (event) => {
	event.preventDefault();
	const status = document.querySelector('.form-status');
	status.textContent = 'Terima kasih. Pesan Anda sudah diterima.';
	event.target.reset();
});
