const OTHER = document.getElementById('other')
const mainCategories = document.querySelectorAll('.main-categories')


function setLocalStorage(name, value) {
	localStorage.setItem(name, value);
}

mainCategories.forEach((btn) => {

	btn.addEventListener('click', (event) => {
		let color;
		let title;
		console.dir(event.target);
		if (event.target.localName === 'span') {
			color = getColor(event.target.parentElement);
			title = getTitle(event.target)
		} else {
			color = getColor(event.target);
			title = getTitle(event.target.firstElementChild)
		}

		setLocalStorage('btnColor', color)
		setLocalStorage('main-title', title)
	})
})

const getColor = (el) => {
	let btnColor;
	el.classList.value.split(' ').includes("shoes") ? btnColor = "shoes" : 1;
	el.classList.value.split(' ').includes("accessories") ? btnColor = "accessories" : 1;
	el.classList.value.split(' ').includes("beauty-health") ? btnColor = "beauty-health" : 1;
	el.classList.value.split(' ').includes("house") ? btnColor = "house" : 1;
	el.classList.value.split(' ').includes("other") ? btnColor = "other" : 1;
	el.classList.value.split(' ').includes("clothes") ? btnColor = "clothes" : 1;

	return btnColor;
}

const getTitle = (el) => {
	console.log(el.innerText);
	return el.innerText
}

