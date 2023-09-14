// $('.menu>a>i').click(function(){
//     $(".sub-menu").show();
//     $(".menu>a").hide();
// })
// $('.close').click(function(){
//     $(".sub-menu").hide();
//     $(".menu>a").show();
// })

const subMenu = document.querySelector(".sub-menu");
const ham = document.querySelector(".menu");
const close = document.querySelector(".close");

ham.addEventListener("click", e=> {
    subMenu.classList.add("active");
    ham.classList.add("hide");
})

close.addEventListener("click", e=> {
    subMenu.classList.remove("active");
    ham.classList.remove("hide");
})
