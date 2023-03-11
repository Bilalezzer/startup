import './styles/style.css';

// Hamburger / Mobile Menu

const menuToggler = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('#navigation');

menuToggler?.addEventListener('click', function () {
	if (navMenu?.getAttribute('aria-expended') === 'true') {
		navMenu.setAttribute('aria-expended', 'false');
	} else {
		navMenu?.setAttribute('aria-expended', 'true');
	}
});

// Scroll button

const scrollBtn = document.querySelector('.scroll-btn');

addEventListener('scroll', () => {
	if (scrollY !== 0) {
		scrollBtn?.classList.add('show');
	} else {
		scrollBtn?.classList.remove('show');
	}
});
