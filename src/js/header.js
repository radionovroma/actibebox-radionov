const menuIcon = document.querySelector('.menu__icon');
const menuNav = document.querySelector('.menu__nav');
const bannerBlock = document.querySelector('.banner');
if (menuIcon) {
	menuIcon.addEventListener("click", function (e) {
		menuIcon.classList.toggle('_active');
		menuNav.classList.toggle('_active');
		bannerBlock.classList.toggle('_active');
	});
}

const navLink = [...document.querySelectorAll('.nav-item__link')].forEach(navLink => {
	if (navLink) {
		navLink.addEventListener("click", function (e) {
			menuIcon.classList.remove('_active');
			menuNav.classList.remove('_active');
			bannerBlock.classList.remove('_active');
		});
	}
})