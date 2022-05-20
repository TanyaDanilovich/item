const OTHER = document.getElementById('other')
//console.dir(OTHER);


//http://127.0.0.1:8000/category/

let invocation = new XMLHttpRequest();

const url = "http://localhost:8000/category"
//const url = "localhost:8000"
let i = 0
const a = fetch(url, {
	//mode: 'no-cors',
})
	.then((response) => {
		//console.log(response);
		return response.json()
	})

	.then((data) => {

		(data.category.forEach((el) => {
			//console.log(el);
			const categoryButton = createButtons(el);
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

function createButtons(value) {

	const aLink = document.createElement('a')

	const categoriesContent = createElement('div', 'categories__content')
	const categoriesText = createElement('span', 'categories__text');
	categoriesText.value = value;
	//console.dir(categoriesText);
	categoriesText.innerText = value;

	categoriesContent.append(categoriesText);

	aLink.append(categoriesContent);
	return aLink;
}
