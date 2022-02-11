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
            overlay.setAttribute("style", "display: flex; justify-content:center;align-items:center");
            overlay.innerHTML = ""
            var a = document.createElement('a'); 
                
            // Create the text node for anchor element.
            var link = document.createTextNode("Click for Full Version");
                
            // Append the text node to anchor element.
            a.appendChild(link); 
                
            // Set the href property.
            a.href = "/musicplayer.html"; 
                
            a.target = "_blank"
            // Append the anchor element to the body.
            overlay.appendChild(a);
        }, 2000);
})
