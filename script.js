const burgerBtn = document.getElementById("hamburgerToggler");
const menuItemList = document.getElementById("menuItemList");
const main = document.getElementById("main");

function burgerMenu() {
    menuItemList.classList.toggle("activeBurgerMenu");
    main.classList.toggle("pushdown");
}

burgerBtn.addEventListener("click", burgerMenu);
console.log("test");