const toggleButton = document.getElementById("toggleButton");
const navWrap = document.getElementById("navWrap");

toggleButton.addEventListener("click", () => {
    navWrap.classList.toggle("active");
})

const navbar = document.querySelector('.navbar-fixed');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-active');
    } else {
        navbar.classList.remove('navbar-active');
    }
};