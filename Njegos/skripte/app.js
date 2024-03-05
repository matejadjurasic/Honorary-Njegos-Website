const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('.navbar_menu');
const citatidugme = document.querySelector('.services_card button');
const prodavnicadugme = document.querySelector('.services_card:nth-child(2) button');
const glavnodugme = document.querySelector('.main_button');




menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

citatidugme.addEventListener('click',function(){
    window.location.href ="./citati.html";
})

glavnodugme.addEventListener('click',function(){
    window.location.href ="./prijava.html";
})

prodavnicadugme.addEventListener('click',function(){
    window.location.href ="./prodavnica.html";
})



