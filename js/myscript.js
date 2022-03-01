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
    <div class="carousel-element-big position-relative text-white">
    <img src="${arraySmallImg[i]}" class="my-big-img" alt="Random picture">
    <h1 class="position-absolute my-title"> ${titleBigImgs[i]} </h1>
    <p class="position-absolute my-paragraph "> ${text[i]} </p>
    </div>
    `
}
// # stampo gli elementi costruiti nel ciclo for nel file html
carouselContainer.innerHTML += carouselContent;
countryBigImg.innerHTML += elementBigImg;


//# prendo il tasto button up
const buttonUp = document.querySelector(".bi-arrow-up-circle");


// # prendo l'elemento al quale andrò aggiungere la classe .my-border 
const smallImgBorder = document.getElementsByClassName("my-small-img");
// todo console.log(smallImgBorder); 

// # elemento big img d-none 
const bigElementCarousel = document.getElementsByClassName("carousel-element-big");


let active = 0;

buttonUp.addEventListener("click", function(){
    
    if((active > 0) && (active <= smallImgBorder.length + 1)){
        smallImgBorder[active].classList.add("my-border");
        smallImgBorder[active - 1].classList.remove("my-border");
        bigElementCarousel[active].classList.remove("d-none");
        bigElementCarousel[active - 1].classList.add("d-none");
        bigElementCarousel[active].classList.add("d-block");
        bigElementCarousel[active - 1].classList.remove("d-block");
        active++;
    } else {
        smallImgBorder[active].classList.add("my-border");
        bigElementCarousel[active].classList.remove("d-none");
        bigElementCarousel[active].classList.add("d-block");
        active++;
    }  
    
});


/*
! it doesn't work as i wanted neither inside the previous buttonUp event let active is undefined  
! at the end of smallImgBorder[5] argh
*/ 
const buttonDown = document.querySelector(".bi-arrow-down-circle"); 
buttonDown.addEventListener("click", function(){
    //! here the active value is as i expected 
    console.log(active + " before the if");

    if((active >= 0) && (active < smallImgBorder.length + 1)){

        console.log(smallImgBorder[active] + " inside the if");
        // ! active value changes inside the if when i'm at the last position
        smallImgBorder[active].classList.remove("my-border");
        smallImgBorder[active - 1].classList.add("my-border");

        // % almost worked but ..
        /* smallImgBorder[active - 1].classList.remove("my-border");
        smallImgBorder[active - 2].classList.add("my-border"); */
        
        
        bigElementCarousel[active].classList.add("d-none");
        bigElementCarousel[active - 1].classList.remove("d-none");
        
        bigElementCarousel[active].classList.remove("d-block");
        bigElementCarousel[active - 1].classList.add("d-block");
        active--;
        
    } else {
        console.log("nada");
    }
});

