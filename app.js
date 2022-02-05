const hamburger = document.querySelector('#hamburgerContainer');
let hamburgerBars = document.querySelectorAll('hamburgerContainer span')
let showNavbarItems = false;
const navbarItems = document.querySelector('#navbarItems');

hamburger.addEventListener('click', () => {
    showNavbarItems = !showNavbarItems;

    if (showNavbarItems) {
        navbarItems.style.display = "block"
        // hamburger.style.display = "none"
        for (let i = 0; i<hamburgerBars.length; i++)
        hamburgerBars[i].style.transform = "rotate(45deg) translate(-2px, -1px)"
    } else {
        navbarItems.style.display = "none"
        hamburger.style.display = "block"
    }
});

