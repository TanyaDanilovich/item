//https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=61ea2084e52c50b950d0d27a3b02d645&extras=date_taken,owner_name,url_m,url_c,tags&format=json&nojsoncallback=1&orientation=landscape&tags=${tags}

const color = {
	"shoes": "#f2b80c",
	"accessories": "#f2e206",
	"beauty-health": "#ff0000",
	"house": "#0528f3",
	"other": "#f071f2",
	"clothes": "#94f206",
}

new Swiper('.image-slider', {
	//миниатюры для превью
	thumbs: {
		swiper: {
			//свайпер с миниатбрами и его настройки
			el: '.image-mini-slider',
			slidesPerView: 5,
		}
	},
});

let btnColor;
let mainTitle;
let subTitle;
let productsName;

function getLocalStorage() {
	if (localStorage.getItem('btnColor')) {
		btnColor = localStorage.getItem('btnColor');
	}
	if (localStorage.getItem('main-title')) {
		mainTitle = localStorage.getItem('main-title');
	}
	if (localStorage.getItem('subTitle')) {
		subTitle = localStorage.getItem('subTitle');
	}
	if (localStorage.getItem('productsName')) {
		productsName = localStorage.getItem('productsName');
	}
}
window.addEventListener("DOMContentLoaded", getLocalStorage())



const img0 = document.getElementById('0');
const img1 = document.getElementById('1');
const img2 = document.getElementById('2');
const img3 = document.getElementById('3');
const img4 = document.getElementById('4');
const imgArray = [img0, img1, img2, img3, img4];

const miniImg0 = document.getElementById('00');
const miniImg1 = document.getElementById('01');
const miniImg2 = document.getElementById('02');
const miniImg3 = document.getElementById('03');
const miniImg4 = document.getElementById('04');
const miniImgArray = [miniImg0, miniImg1, miniImg2, miniImg3, miniImg4];


const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&per_page=30&api_key=61ea2084e52c50b950d0d27a3b02d645&extras=date_taken,owner_name,url_m,url_c,tags&format=json&nojsoncallback=1&orientation=landscape&tags=${subTitle.split(' ')[0]}`

fetch(url)
	.then((response) => {
		//console.log(response);
		return response.json()
	})
	.then((data) => {

		for (let i = 0; i < 5; i++) {
			imgArray[i].src = data.photos.photo[i].url_m;
			miniImgArray[i].src = data.photos.photo[i].url_m;
		}
	});





//window.addEventListener("DOMContentLoaded", getLocalStorage())

const pageTitle = document.querySelector('.title')
pageTitle.textContent = productsName;

const productsTitle = document.querySelector('.product__title')
productsTitle.textContent = productsName;
productsTitle.style = `color: ${color[btnColor]};`


//Изменение колличества товаров
const QUANTITY = document.getElementById('Quantity');
const MINUS = document.querySelector('.quantity__minus');
const PLUS = document.querySelector('.quantity__plus');

function addQuantity() {
	let value = +QUANTITY.value;
	value += 1;
	QUANTITY.value = value;
}

function subtractQuantity() {
	let value = +QUANTITY.value;
	(value > 1) ? value -= 1 : value = value;
	QUANTITY.value = value;
}
MINUS.addEventListener('click', () => { subtractQuantity() });
PLUS.addEventListener('click', () => { addQuantity() })
//END  Изменение колличества товаров

const productQuantity = document.querySelector(".product-quantity__container");
productQuantity.style = `border: 1px solid ${color[btnColor]};`

const addButton = document.querySelector(".add-to-card-button");
addButton.style = `background: ${color[btnColor]};`




