window.addEventListener("DOMContentLoaded", function () {

    // Elementlarni aniqlab olish
    let menuBtn = document.querySelector("#menu-border"),
        menuList = document.querySelector("#mobMenu-list"),
        menuListItem = document.querySelectorAll("#mobMenu-list li,#mobMenu-list .btn");

    // Menyu funksyasi
    menuBtn.addEventListener("click", function () {
        menuBtn.classList.toggle("menuBtn-active");
        menuList.classList.toggle("mobMenu-list-actived");
        menuList.style.transition = "all ease 0.5s"
    })

    for (let i = 0; i < menuListItem.length; i++) {
        menuListItem[i].addEventListener("click", function () {
            menuList.classList.remove("mobMenu-list-actived");
            menuList.style.transition = "all ease 1.5s"
        })
    }

    // alert

    document.getElementById("alert").addEventListener("click",function(){
        document.querySelector(".alert").style.display = "none"
    })

})