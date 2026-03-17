// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
reveals.forEach(el => {
let top = el.getBoundingClientRect().top;
if (top < window.innerHeight - 100) {
el.classList.add("active");
}
});
});

// TYPING EFFECT
const text = [
"AI & ML Engineer",
"Full Stack Developer",
"Deep Learning Project Designer",
"Generative AI Developer",
"AI Solutions Builder",
"Computer Vision Engineer",
"Freelancer"
];
let i = 0, j = 0, current = "", deleting = false;

function type() {
current = text[i];

if (!deleting) {
document.querySelector(".typing").textContent = current.substring(0, j++);
if (j > current.length) {
deleting = true;
setTimeout(type, 1000);
return;
}
} else {
document.querySelector(".typing").textContent = current.substring(0, j--);
if (j == 0) {
deleting = false;
i = (i + 1) % text.length;
}
}

setTimeout(type, deleting ? 50 : 100);
}

type();
