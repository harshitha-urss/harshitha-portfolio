const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach((el) => {
let windowHeight = window.innerHeight;
let elementTop = el.getBoundingClientRect().top;

if (elementTop < windowHeight - 100) {
el.classList.add("active");
}
});
});
