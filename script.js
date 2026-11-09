// This code makes the color of the nav link of the current section blue
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // This is a seperate piece of code that was added to this section
    // This code hides the navbar when the user clicks on the navigation link.
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// This code created the progress bar that increases or decreases on scroll
window.addEventListener('scroll', () => {
    const scrollProgress = document.querySelector('.scroll-progress');

    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage = (scrollTop / documentHeight) * 100;

    scrollProgress.style.width = scrollPercentage + '%';
});


// This code displays a message within the website after user submits contact form.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
    contactForm.addEventListener("submit", async function(event) {
        event.preventDefault();

        formStatus.textContent = "Sending...";

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            });

            if (response.ok) {
                formStatus.textContent = "Message sent successfully!";
                contactForm.reset();
            } else {
                formStatus.textContent = "Something went wrong. Please try again.";
            }

        } catch (error) {
            formStatus.textContent = "Something went wrong. Please try again.";
        }
    });
}


// This code toggles the icon of the navigation menu when you click on the icon.
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


// This code reveals the headers and some sections' content with a 
// falling down animation.
ScrollReveal ({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


// This code animates the text in the home-content page
const animatedText1 = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'PowerBi Dashboard Designer',],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})