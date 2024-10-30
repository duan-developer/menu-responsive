// $(document).ready(function() {
//     $('#thanh-menu').click(function() {
//         $('#menu').slideToggle(); // Hiệu ứng trượt cho menu
//     });
// });
// menu.js

document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("thanh-menu");
    const sideMenu = document.getElementById("side-menu");

    menuIcon.addEventListener("click", () => {
        sideMenu.classList.toggle("active");
    });
});
