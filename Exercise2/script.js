const h1 = document.querySelector("h1");
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	localStorage.setItem("name", e.target[0].value);
});

const getData = async () => {
	const res = await axios.get("https://jsonplaceholder.typicode.com/todos/1");

	console.log(res);
};

getData();

window.addEventListener("load", (event) => {
	const name = localStorage.getItem("name");
	h1.innerText = name;
});
