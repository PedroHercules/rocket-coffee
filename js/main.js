const mobileBtn = document.querySelector(".mobile-btn");
const navMenu = document.querySelector(".header-block");

mobileBtn.addEventListener('click', () => {
	mobileBtn.classList.toggle("active");
	navMenu.classList.toggle("active");
})