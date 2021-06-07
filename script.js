let aboutBtn = document.querySelector(".about-btn");
let contact = document.querySelector(".contact");
let contactForm = document.querySelector(".contact-form")


aboutBtn.addEventListener("click", (event)=>{
    contact.classList.add("show-contact");
    contactForm.classList.add("show-contact-form");
})

document.querySelector(".cross-icon").addEventListener("click",(event)=>{
    contact.classList.remove("show-contact");
    contactForm.classList.remove("show-contact-form");
})

let header = document.querySelector("header");
let brand = document.querySelector(".brand");
let hero = document.querySelector(".hero");
let aboutBtnSmall = document.querySelector(".about-btn small");
let navbar = document.querySelectorAll(".navbar li a");
let h1 = document.querySelector(".hero h1")
let h5 = document.querySelector(".hero h5")
let socialNav= document.querySelectorAll(".hero .social-nav a");
let isNight = true;

let nightMode = document.querySelector(".night-mode");
console.log(nightMode)
nightMode.addEventListener("click", (event)=>{
    if(isNight === true){
        console.log("HI")
        header.style.background = "#EBEBEB";

        brand.style.color = "#1C1D25";

        hero.classList.add("night-white-bg")

        aboutBtnSmall.style.color ="#253467";


        navbar.forEach(ele =>{
            ele.style.color="#1C1D25";
        })

        h1.style.color ="#1C1D25";
   
        h5.style.color ="#1C1D25";


        socialNav.forEach(ele =>{
            ele.style.color="#1C1D25";
        })
        
    }else{
        header.style.background = "#1C1D25";

        brand.style.color = "#EBEBEB";

        hero.classList.remove("night-white-bg");
        
        aboutBtnSmall.style.color ="white";

        navbar.forEach(ele =>{
            ele.style.color="#EBEBEB";
        })

        h1.style.color ="#EBEBEB";
   
        h5.style.color ="#EBEBEB";


        socialNav.forEach(ele =>{
            ele.style.color="#EBEBEB";
        })
    }
    isNight = !isNight;
} )
