const arraySmallImg = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];

const titleBigImgs = ["Svezia","Svizzera","Gran Bretagna","Germania","Paradise"];


const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//# prendo il container al quale andrò aggiungere ogni elemento dell'array "arraySmallImg"
const carouselContainer = document.querySelector(".my-carousel-container");
//% creo una variabile alla quale va inserito l'elemento dell'array(arraySmallImg) all'interno del tag <div>
let carouselContent = '';

//# la stessa procedura per l'immagine a sinistra in grande
const countryBigImg = document.querySelector(".my-big-img-container");
let elementBigImg = "";

// ! inserico gli elementi  
for (let i = 0 ; i < arraySmallImg.length ; i++){
    carouselContent += `
    <div class="carousel-element-small">
    <img src="${arraySmallImg[i]}" class="my-small-img " alt="Random picture">
    </div>
    `
    
    elementBigImg += `
    <div class="carousel-element-big  text-white">
    <img src="${arraySmallImg[i]}" class="my-big-img" alt="Random picture">
    <div class="my-container-text position-relative"> 
        <h1 class="position-absolute my-title"> ${titleBigImgs[i]} </h1>
        <p class="position-absolute my-paragraph"> ${text[i]} </p>
    </div> 
    </div>
    `
}
// # stampo gli elementi costruiti nel ciclo for nel file html
carouselContainer.innerHTML += carouselContent;
countryBigImg.innerHTML += elementBigImg;




// # elemento big img d-none 
const bigElementCarousel = document.getElementsByClassName("carousel-element-big");


let active = 0;

// # prendo gli elementi ai quali andrò aggiungere la classe .my-border 
document.getElementsByClassName("my-small-img")[active].classList.add("activeElement-Small");
document.getElementsByClassName("carousel-element-big")[active].classList.add("activeElement-Big");

//# prendo il tasto button up
const buttonUp = document.getElementById("btn-up");
buttonUp.addEventListener("click", function(){

    document.getElementsByClassName("my-small-img")[active].classList.remove("activeElement-Small");
    document.getElementsByClassName("carousel-element-big")[active].classList.remove("activeElement-Big");

    /* 
        & se active ragginge il valore massimo
        & ovvero la lunghezza dell'array 
        & che è la stessa degli elementi aggiunti dinamicamente in js (length = 5 - indici[0-->4])
        &  ASSEGNO IL VALORE INIZIALE ACTIVE = 0
        &  ALTRIMENTI CONTINUO A "SCORRERE" E QUINDI AD AGGIORNARE IL VALORE DI ACTIVE
    */
    if(active === arraySmallImg.length - 1){
        active = 0;
    } else{
        active++;
    }

    document.getElementsByClassName("my-small-img")[active].classList.add("activeElement-Small");
    document.getElementsByClassName("carousel-element-big")[active].classList.add("activeElement-Big");
});


/*
! it doesn't work as i wanted neither inside the previous buttonUp event let active is undefined  
! at the end of smallImgBorder[5] argh
*/ 
const buttonDown = document.getElementById("btn-down"); 
buttonDown.addEventListener("click", function(){

    document.getElementsByClassName("my-small-img")[active].classList.remove("activeElement-Small");
    document.getElementsByClassName("carousel-element-big")[active].classList.remove("activeElement-Big");

    /* 
        & se active SI TROVA NELLA POSIZIONE INIZIALE (0)
        £ NON POSSO SCENDERE AL DI SOTTO DI ZERO PERCHE' NON CI SONO ELEMENTI!!!
        £ LENGTH VA ALL' ULTIMA POSIZONE E NON A -1
        &  AGGIORNO ACTIVE (ACTIVE = LENGTH - 1)
        &  ALTRIMENTI CONTINUO A "SCORRERE" E QUINDI AD AGGIORNARE IL VALORE DI ACTIVE A ritroso
    */
    if(active === 0){
        active = arraySmallImg.length - 1;
    } else {
        active--;
    }

    document.getElementsByClassName("my-small-img")[active].classList.add("activeElement-Small");
    document.getElementsByClassName("carousel-element-big")[active].classList.add("activeElement-Big");
});




