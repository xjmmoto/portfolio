// Body
const body = document.querySelector("body");

// Loader
const loader = document.querySelector("#loader");
const header = document.querySelector("header");
const section = document.querySelector("section");
const contacts = document.querySelector(".contacts");
const footer = document.querySelector("footer");

// Mobile View
const menu = document.querySelector(".navbar__hamMenu");
const menuList = document.querySelector(".navbar__menu");
const navList = document.querySelectorAll(".navbar__menu--lists");

menu.addEventListener("click", (e)=> {
    menu.classList.toggle("active");
    menuList.classList.toggle("active");

    if(menu.classList.contains("active")) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "auto";
    }

    for(let l = 0; l < navList.length; l++){
        navList[l].addEventListener("click", function(){
            menu.classList.remove("active");
            menuList.classList.remove("active");
            if(!menu.classList.contains("active")) {
                document.body.style.overflow = "auto";
            }
        })
    }
});

// Rotating Cards
const cardImage = document.querySelectorAll(".projects");
const cardDetails = document.querySelectorAll(".description");

for (let x = 0; x < cardImage.length; x++) {
    cardImage[x].addEventListener("click", function() {
        cardImage[x].classList.toggle("flipped");
        cardDetails[x].classList.toggle("flipped");
    });
}

for (let y = 0; y < cardDetails.length; y++) {
    cardDetails[y].addEventListener("click", function() {
        cardDetails[y].classList.add("flipped");
        cardImage[y].classList.add("flipped");
    });
}

// Display Array modal images
const modalClick = document.querySelectorAll(".md");
const modalDisplay = document.querySelector("#modal"); 
const overLay = document.querySelector(".overlay");

const getData = [ 
    "./images/hero3/mockups/d1.jpg",
    "./images/hero3/mockups/d2.jpg",
    "./images/hero3/mockups/d3.jpg",
    "./images/hero3/mockups/d4.jpg",
    "./images/hero3/mockups/d5.jpg",
];

for(let i = 0; i < getData.length; i++) {
    modalClick[i].addEventListener("click", function(item) {
    
        const modalS = document.querySelector(".modal");
        const modalWrapper = document.querySelector(".modal__wrapper");
        const cardModal = document.createElement("img");

        // Taking CSS 
        modalS.classList = "modal";
        modalWrapper.classList = "modal__wrapper";
        cardModal.classList = "modal__wrapper--img";

        // Attaching the images to modal
        cardModal.src = getData[i]; 

        // Modal Effects
        modalDisplay.classList.add("active");
        overLay.classList.add("active");

        if(modalDisplay.classList.contains("active")) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }

        // Creadeted a New HTML Element
        modalS.appendChild(modalWrapper);
        modalWrapper.appendChild(cardModal);
    });
};

modalDisplay.addEventListener("click", function() {
    modalDisplay.classList.remove("active");
    overLay.classList.remove("active");

    // Refresh the page per Card to remove the appended child
    location.reload();
});

// Alert
const alerta = document.querySelectorAll(".cards--button");
const alertBox = document.querySelector(".alertbox");
const buttonOut = document.querySelector(".alertbox__button");

for(let a = 0; a < alerta.length; a++) {
    alerta[a].addEventListener("click", function() {
        alertBox.classList.toggle("active");
        console.log("alertbox-is-actvie");
        if(alertBox.classList.contains("active")){
            overLay.classList.add("active");
            header.classList.add("alert");
            body.style.overflow = "hidden";
            overLay.addEventListener("click", function() {
                overLay.classList.remove("active");
                alertBox.classList.remove("active");
                header.classList.remove("alert");
                body.style.overflow = "auto";
            }) || buttonOut.addEventListener("click", function(){
                overLay.classList.remove("active");
                alertBox.classList.remove("active");
                header.classList.remove("alert");
                body.style.overflow = "auto";
            })
        } else {
            body.style.overflow = "auto";
        }
        // alert("Hi, this is still under building! I will publish it soon");
    });
}

// Typewriter
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [" Web Designer.", " Frontend Developer."];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 800;

let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if(charIndex > 0) {
        if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if(textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if(textArray.length) setTimeout(type, newTextDelay + 250);
});

// Header Scrolled
window.onscroll = function(){
    scrollFunction();
};

const navHeader = document.querySelector("#headerNav");

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    navHeader.classList.add("active");
  } else {
    navHeader.classList.remove("active");
    }
};

// Slideshow 
const swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
    rotate: 30,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
    },
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    }
});