
var loader = document.getElementById("loader");

window.addEventListener("load", function () {
    loader.style.display = "none";
});

window.addEventListener('scroll', (e) => {
    const nav = document.querySelector('header');
    if (window.pageYOffset > 0) {
        nav.classList.add("myshadow");
    } else {
        nav.classList.remove("myshadow");
    }
});


