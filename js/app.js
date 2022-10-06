// navbar animation
const btnNav = document.querySelector(".responsive-nav-btn");
const listNav = document.querySelector("nav ul");
let imgBtn = document.querySelector(".responsive-nav-btn img");
//
btnNav.addEventListener("click", () => {
    //
    listNav.classList.toggle("active-nav");
    // condition display croix/menu.svg index/others
    if (window.location.href.includes("index")) {
        if (imgBtn.src.includes("menu")) {
            imgBtn.src = "./ressources/croix.svg";
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = "./ressources/menu.svg";
            imgBtn.style.width = "40px";
            imgBtn.style.height = "40px";
        }
    } else {
        if (imgBtn.src.includes("menu")) {
            imgBtn.src = "../ressources/croix.svg";
            imgBtn.style.width = "30px";
            imgBtn.style.height = "30px";
        } else {
            imgBtn.src = "../ressources/menu.svg";
            imgBtn.style.width = "40px";
            imgBtn.style.height = "40px";
        }
    }
});
// FAQ animation
const allCross = document.querySelectorAll(".display-panel img");
allCross.forEach((logo) => {
    logo.addEventListener("click", function () {
        const height = this.parentNode.parentNode.childNodes[3].scrollHeight;
        const currentChoice = this.parentNode.parentNode.childNodes[3];
        // console.log(height);
        if (this.src.includes("plus")) {
            this.src = "./ressources/minus.svg";
            currentChoice.style.height = height + 40 + "px";
            currentChoice.style.opacity = 1;
            currentChoice.style.padding = "20px 15px";
        } else {
            this.src = "./ressources/plus.svg";
            currentChoice.style.height = 0;
            currentChoice.style.opacity = 0;
            currentChoice.style.padding = "0 15px";
        }
    });
});
// Onglets animation
const choixTarifs = Array.from(document.querySelectorAll(".choix"));
const contenuTarifs = Array.from(document.querySelectorAll(".panneau"));
//
choixTarifs.forEach((choix) => {
    choix.addEventListener("click", (index) => {
        let indexClic = choixTarifs.indexOf(index.target);
        //
        for (let i = 0; i < choixTarifs.length; i++) {
            if (i === indexClic) {
                choixTarifs[i].classList.add("active-choix");
                contenuTarifs[i].classList.add("panneau-active");
            } else {
                choixTarifs[i].classList.remove("active-choix");
                contenuTarifs[i].classList.remove("panneau-active");
            }
        }
    });
});

// *** scroll to top ***
//display btn
window.addEventListener("scroll", function () {
    let scroll = this.document.querySelector(".btn-scrollup");
    scroll.classList.toggle("active", window.scrollY > 200);
});
// scroll to top
const btn = document.querySelector(".btn-scrollup");
btn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});