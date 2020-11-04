// JavaScript Document

/* 0. Elementen selecteren */
var smallImg1 = document.querySelector('#schoenpreview img:nth-of-type(1)');

var smallImg2 = document.querySelector('#schoenpreview img:nth-of-type(2)');

var smallImg3 = document.querySelector('#schoenpreview img:nth-of-type(3)');

var smallImg4 = document.querySelector('#schoenpreview img:nth-of-type(4)');

var smallImg5 = document.querySelector('#schoenpreview img:nth-of-type(5)');

var bigImg = document.querySelector('#schoen-gallery > img');

/* 1. AddEventListener */
smallImg1.addEventListener('click', changeImage1);

smallImg2.addEventListener('click', changeImage2);

smallImg3.addEventListener('click', changeImage3);

smallImg4.addEventListener('click', changeImage4);

smallImg5.addEventListener('click', changeImage5);

/* 2. functie aanmaken */
/* 3. src attribute aanpassen */
function changeImage1(img) {
    bigImg.src = '/images/schoen1-big.jpg'
}

function changeImage2(img) {
    bigImg.src = '/images/schoen2-big.jpg'
}

function changeImage3(img) {
    bigImg.src = '/images/schoen3-big.jpg'
}

function changeImage4(img) {
    bigImg.src = '/images/schoen4-big.jpg'
}

function changeImage5(img) {
    bigImg.src = '/images/schoen5-big.jpg'
}

