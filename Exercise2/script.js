const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const form = document.querySelector("form");

// From https://github.com/ai/nanoid  - Gives a rndom UUID of 21 characters
let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");

let todos = []

// Get todo just enterd when user hits submit and add to array of others.
// Put in local storage to isstays between reloads
form.addEventListener("submit", (e) => {
	e.preventDefault();
	todo = {									// Set up this item
		id: nanoid(),							// Random ID for this item
		text: e.target[0].value,				// Text from input
	}
	todos = [...todos, todo]					// Add item to array
	const stringed =JSON.stringify(todos)		// Turn array into string
	localStorage.setItem("todos", stringed);	// Store in local storage

    console.log(stringed)						// Display on console for debugging

	const stringed1 = localStorage.getItem("todos"); // WANT TO OUTPUT ALL ENTRIES IN A BOX, WITH ID
	todos = JSON.parse(stringed1)

    todos.map((todo) => (
//        <h1 key={todo.id} >{todo.text}</h1>  // ERROR
        h3.innerText = todo.text
))

});

/*

getData();

window.addEventListener("load", (event) => {
	const name = localStorage.getItem("todos");
	h1.innerText = name;
});
*/