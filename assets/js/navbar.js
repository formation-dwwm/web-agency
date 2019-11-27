
const $menu = $('.collapse');
var containerBg = document.getElementById("containBar");
// console.log(containerBg);

function navbarCollapse() {
    if ($("#navbarNav").hasClass("show")) {
        $menu.removeClass('show');
    }
}

// function NavOpen(){
//     containerBg.setAttribute("class","containBar containBarShow");
// }
// function NavClose(){
//     containerBg.setAttribute("class","containBar containBarDelete");
//     $menu.removeClass('show');
// }