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
    <div class="carousel-element">
        <img src="${arraySmallImg[i]}" class="my-small-img" alt="Random picture">
    </div>`

    elementBigImg += `
    <div class="carousel-element-big position-relative">
        <img src="${arraySmallImg[i]}" class="my-big-img" alt="Random picture">
        <h1 class="position-absolute my-title"> ${titleBigImgs[i]} </h1>
    </div>`
}
// £ stampo gli elementi costruiti nel ciclo for nel file html
carouselContainer.innerHTML += carouselContent;
countryBigImg.innerHTML += elementBigImg;




