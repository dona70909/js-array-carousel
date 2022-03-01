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
    <img src="${arraySmallImg[i]}" class="my-small-img" alt="Random picture">
    </div>
    
    `
    
    elementBigImg += `
    
    <div class="carousel-element-big position-relative text-white d-none">
        <img src="${arraySmallImg[i]}" class="my-big-img" alt="Random picture">
        <h1 class="position-absolute my-title"> ${titleBigImgs[i]} </h1>
    <p class="position-absolute my-paragraph "> ${text[i]} </p>
    </div>
    `
}
// £ stampo gli elementi costruiti nel ciclo for nel file html
carouselContainer.innerHTML += carouselContent;
countryBigImg.innerHTML += elementBigImg;


//# prendo i tasti su e giù
const buttonUp = document.querySelector(".bi-arrow-up-circle");
console.log(buttonUp)

/* prendo l'elemento al quale andrò aggiungere la classe .my-border */
const smallImgBorder = document.getElementsByClassName("my-small-img");
/* elemento big img d-none */
const bigElementCarousel = document.getElementsByClassName("carousel-element-big");


let active = 0;

buttonUp.addEventListener("click", function(){

    smallImgBorder[active].classList.remove("my-border");
    smallImgBorder[active].classList.add("my-border");
    bigElementCarousel[active].classList.remove("d-none");
    bigElementCarousel[active].classList.add("d-block");
    active++;
});
