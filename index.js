const burger = document.getElementById("burger");
const menu = document.querySelector(".menu-items");
const start = document.querySelector(".iframe-start");

burger.addEventListener("click", () => {
    menu.classList.toggle("toggle")
    if (menu.className.includes("toggle")){
        burger.className = "fa fa-solid fa-burger"
    }
    else {
        burger.className = "fa fa-solid fa-bars"
    }
})

start.addEventListener("click", () => {
    let overlay = document.querySelector(".iframe-overlay");
    overlay.style.display = "none";

    setTimeout(
        function() {
            overlay.style.display = "block";
        }, 5000);
})
