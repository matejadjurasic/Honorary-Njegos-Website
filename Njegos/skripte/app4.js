const menu = document.querySelector('#menu');
const menuLinks = document.querySelector('.navbar_menu');
const meddugme = document.getElementById("med");
const pozadina = document.querySelector('.med_zuc');
const randomdugme = document.getElementById("random");
const citatdugme = document.getElementById("citat");


menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

meddugme.addEventListener('click',function(){
     
     pozadina.classList.toggle('active');

})

var r_text = new Array ();
r_text[0] = "Чаша жучи";
r_text[1] = "Чаша меда";


randomdugme.addEventListener('click',function(){
     
    var i = Math.floor(r_text.length * Math.random());
    alert(r_text[i]);

})

var citati = new Array ();
citati[0] = "Су чим ћете изаћ пред Милоша, и друге српске витезове";
citati[1] = "Ђе је зрно клицу заметнуло, онде нека и плодом почине";
citati[2] = "Младо жито навијај класове, пређе рока дошла ти је жетва";
citati[3] = "Нека буде борба непрестана, нека буде што бити не може";


citatdugme.addEventListener('click',function(){
     
    var i = Math.floor(citati.length * Math.random());
    alert(citati[i]);

})
