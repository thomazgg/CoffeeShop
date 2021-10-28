// Active Menu

const sec = document.querySelectorAll("section");
const li = document.querySelectorAll(".nav__item");

function activeMenu() {
    let len = sec.length;
    while (--len && window.scrollY + 97 < sec[len].offsetTop) {}
    li.forEach(ltx => ltx.classList.remove("active"));
    li[len].classList.add("active");
}
activeMenu();
window.addEventListener("scroll", activeMenu);

// Search

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    cartItem.classList.remove('active');
}

// Itens

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}

window.onscroll = () => {
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// SHOW SCROLL
window.addEventListener("scroll", function() {
    let s = document.querySelector('.scrollup');
    s.classList.toggle('show-scroll', window.scrollY > 0); // if scrollY > 0 show scroll
})

// ABRIR FOTOS

document.getElementsByClassName("image")[1].onclick = function() {
    window.open("assets/img/p1.png", "minhaJanela", "height=350,width=500");
}
document.getElementsByClassName("image")[2].onclick = function() {
    window.open("assets/img/p2.png", "minhaJanela", "height = 350, width = 500");
}
document.getElementsByClassName("image")[3].onclick = function() {
    window.open("assets/img/p3.png", "minhaJanela", "height=350,width=500");
}
document.getElementsByClassName("image")[4].onclick = function() {
    window.open("assets/img/p4.png", "minhaJanela", "height=350,width=500");
}
document.getElementsByClassName("image")[5].onclick = function() {
    window.open("assets/img/p5.png", "minhaJanela", "height=350,width=500");
}
document.getElementsByClassName("image")[6].onclick = function() {
    window.open("assets/img/p6.png", "minhaJanela", "height=350,width=500");
}