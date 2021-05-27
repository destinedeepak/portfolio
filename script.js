let aboutBtn = document.querySelector(".about-btn");
let contact = document.querySelector(".contact");
let contactForm = document.querySelector(".contact-form")


aboutBtn.addEventListener("click", (event)=>{
    console.log("hi")
    contact.classList.add("show-contact");
    contactForm.classList.add("show-contact-form");
})

document.querySelector(".cross-icon").addEventListener("click",(event)=>{
    contact.classList.remove("show-contact");
    contactForm.classList.remove("show-contact-form");
})
