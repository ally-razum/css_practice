document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger");
    const menu = document.querySelector(".header-nav ul");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
        burger.classList.toggle("active");
    });
});
