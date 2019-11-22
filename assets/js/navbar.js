
const $menu = $('.collapse');
var containerBg = document.getElementById("containBar");
// console.log(containerBg);


function navbarCollapse() {
    setTimeout(function(){ }, 1000);
    if ($("#navbarNav").hasClass("show")) {
        $menu.removeClass('show');
        containerBg.setAttribute("class","containBar containBarDelete");
    }
    else {
        containerBg.setAttribute("class","containBar containBarShow");
    }
}

// function NavOpen(){
//     containerBg.setAttribute("class","containBar containBarShow");
// }
// function NavClose(){
//     containerBg.setAttribute("class","containBar containBarDelete");
//     $menu.removeClass('show');
// }