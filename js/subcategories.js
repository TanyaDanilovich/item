
const color = {
	"shoes": "#f2b80c",
	"accessories": "#f2e206",
	"beauty-health": "#ff0000",
	"house": "#0528f3",
	"other": "#f071f2",
	"clothes": "#94f206",
}

let btnColor;
let mainTitle;
let subTitle;

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
}
window.addEventListener('load', getLocalStorage())

const categoriesTitle = document.querySelector('.categories__title')
categoriesTitle.innerHTML = mainTitle;
categoriesTitle.style = `color: ${color[btnColor]};`

const subCategoriesTitle = document.querySelector('.sub-categories__title')
subCategoriesTitle.innerHTML = subTitle;
subCategoriesTitle.style = `color: ${color[btnColor]};`


//const url = "http://localhost:8000/category"

//const url = "http://165.232.170.180:8000/category/Освещение"
const url = `http://165.232.170.180:8000/category/${subTitle}`

const SUB_CATEGORIES = document.getElementById('sub-categories');

fetch(url)
	.then((response) => {
		//console.log(response);
		return response.json()
	})
	.then((data) => {
		//console.log(data.subcategories);

		(data.subcategories.forEach((el) => {
			//console.log(el);
			const categoryButton = createCategoryButton(el);
			//console.dir(categoryButton)
			SUB_CATEGORIES.append(categoryButton)
		}));
	});

const createElement = (el, ...classes) => {
	const element = document.createElement(el);
	element.classList.add(classes)
	return element;
}



function createCategoryButton(value) {
	const aLink = document.createElement('a')
	aLink.href = "products.html"
	const categoriesContent = createElement('div', 'sub-categories__content')
	categoriesContent.classList.add(btnColor)
	const categoriesText = createElement('span', 'sub-categories__text');
	categoriesText.value = value;
	//console.dir(categoriesText);
	categoriesText.innerText = value;
	categoriesContent.value = value;
	//console.dir(categoriesText);
	categoriesContent.append(categoriesText);
	aLink.append(categoriesContent);
	return aLink;
}

function setLocalStorage(name, value) {
	localStorage.setItem(name, value);
}

window.addEventListener("DOMContentLoaded", function () {
	SUB_CATEGORIES.addEventListener('click', (event => {
		//console.dir(event.target.value);
		setLocalStorage('productsName', event.target.value)
	}))
});