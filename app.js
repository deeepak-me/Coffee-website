let navbar = document.querySelector(".navbar");
let cartItem = document.querySelector(".cart-items-container");


document.querySelector("#menu-btn").onclick = () => {
    navbar.classList.toggle('active');
}

document.querySelector("#cart-btn").onclick = () => {
    cartItem.classList.toggle('active');
}