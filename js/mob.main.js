document.addEventListener("DOMContentLoaded", function() {
    let toggleBtn = document.querySelector("#toggleMenu button");
    let menu = document.querySelector(".header__menu");

    toggleBtn.addEventListener("click", function() {
        console.log("Ok clicked");
        menu.classList.toggle("show");
    });
});
