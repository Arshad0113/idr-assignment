// ===== MOBILE NAVBAR TOGGLE =====

const menuToggle = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {

  navLinks.classList.toggle("active");

});



// ===== SMOOTH SCROLL FOR NAV LINKS =====

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

  anchor.addEventListener("click", function (e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if(target){

      target.scrollIntoView({
        behavior: "smooth"
      });

    }

    // mobile menu close after click
    navLinks.classList.remove("active");

  });

});



// ===== FOOTER AUTO YEAR =====

const yearElement = document.getElementById("year");

if(yearElement){
  yearElement.textContent = new Date().getFullYear();
}



// ===== CONTACT FORM SIMPLE MESSAGE =====

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Thank you! Your inquiry has been submitted.");

  form.reset();

});

}