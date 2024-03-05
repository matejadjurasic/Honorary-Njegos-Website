const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

$( "#spinner" ).spinner();
$("#spinner").parent(".ui-spinner").css({
    position: "absolute" , top:"440px", left: "150px"
});

$( "#spinner2" ).spinner();
$("#spinner2").parent(".ui-spinner").css({
    position: "absolute" , top:"440px", left: "150px"
});

