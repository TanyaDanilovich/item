
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

function getLocalStorage() {
	if (localStorage.getItem('btnColor')) {
		btnColor = localStorage.getItem('btnColor');
	}
	if (localStorage.getItem('main-title')) {
		mainTitle = localStorage.getItem('main-title');
	}
}
window.addEventListener('load', getLocalStorage())

const categoriesTitle = document.querySelector('.categories__title')

categoriesTitle.innerHTML = mainTitle;
categoriesTitle.style = `color: ${color[btnColor]};`


//const url = "http://localhost:8000/category"
const url = "http://165.232.170.180:8000/category"


const a = fetch(url)
	.then((response) => {
		//console.log(response);
		return response.json()
	})
	.then((data) => {
		(data.category.forEach((el) => {
			//console.log(el);
			const categoryButton = createCategoryButton(el);
			//console.dir(categoryButton)
			CATEGORIES.append(categoryButton)
		}));
	});

const createElement = (el, ...classes) => {
	const element = document.createElement(el);
	element.classList.add(classes)
	return element;
}

const CATEGORIES = document.getElementById('categories');

function createCategoryButton(value) {
	const aLink = document.createElement('a')
	aLink.href = "subcategories.html"
	const categoriesContent = createElement('div', 'categories__content')
	categoriesContent.classList.add(btnColor)
	const categoriesText = createElement('span', 'categories__text');
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
	CATEGORIES.addEventListener('click', (event => {
		//console.dir(event.target.value);
		setLocalStorage('subTitle', event.target.value)
	}))
});

