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

// Sticky Header

const header = document.querySelector<HTMLElement>('.header');

window.addEventListener('scroll', handleScroll);

function handleScroll() {
	const shouldStick = header && header.offsetTop < window.scrollY;
	header?.classList.toggle('sticky', shouldStick ? true : false);
}