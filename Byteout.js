// Menu button toggle //


// Toolbar size while scrolling //

window.addEventListener('scroll', function() {
    let header = document.querySelector(`.header-toolbar`);
    let logo = document.querySelector(`.header-toolbar.header-img-wrapper`);
    let links = document.querySelector(`.header-buttons`);

if (window.scrollY > 0) {
    header.classList.add('small-header');
    logo.forEach(function(logo) {
    logo.classList.add('small-logo');
    });
    links.classList.add('small-link');
} else {
    header.classList.remove('small-header');
    header-img-wrapper.forEach(function(logo) {
    logo.classList.remove('small-logo');
    });
    links.classList.remove('small-link');
}
});


// Go back to top button //

let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}
