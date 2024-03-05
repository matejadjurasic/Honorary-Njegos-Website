const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

$(document).ready(function(){
    $("#prijavadugme").click(function(){
        alert("Novi korisnik: \n" + $("#imepolje").val() + "\n"
        + $("#prezimepolje").val() + "\n"
        + $("#emailpolje").val() + "\n"
        + $("#sifrapolje").val() + "\n"
        );
    });
});

