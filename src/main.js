import './styles/style.css';

const menuToggler = document.querySelector('.menu-toggler');
const navMenu = document.querySelector('#navigation');

menuToggler?.addEventListener('click', function () {
	if (navMenu?.getAttribute('aria-expended') === 'true') {
		navMenu.setAttribute('aria-expended', 'false');
	} else {
		navMenu?.setAttribute('aria-expended', 'true');
	}
});

function zip(...arrays: number[][]): number[][] {
	let zipped: number[][] = [];
	arrays.forEach((array) => zipped.push(array));
	return zipped;
}

console.log(zip([1, 2], [3, 4]));
