/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('blur-header') 
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=====================EMAIL JS==============================*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

emailjs.init('sV2HHtcx3TM3hhQCv') // ✅ Initialize EmailJS

const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_uvum7jj', 'template_m1o3q9q', '#contact-form', 'sV2HHtcx3TM3hhQCv')
        .then(() => {
            contactMessage.textContent = '✅ Message sent successfully!'
            contactForm.reset()

            setTimeout(() => {
                contactMessage.textContent = ''
            }, 5000)
        }, () => {
            contactMessage.textContent = '❌ Message not sent (service error)'
        }
    )
}

contactForm.addEventListener('submit', sendEmail)

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up');

    // Use window.scrollY instead of this.scrollY
    if (window.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
};

window.addEventListener('scroll', scrollUp);
