const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const form = document.querySelector("form");

// From https://github.com/ai/nanoid  - Gives a rndom UUID of 21 characters
let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");

let todos = []

// Output the todo items
function listtodos(s) {
    sarray = JSON.parse(s);						// Turn string back into an array
	var i = 0;
	while(i < sarray.length) {					// Go through the entire array
		formString = '<input type="radio" id="' + sarray[i].id + '" value="' + sarray[i].text + '">'
		formString += '<label for="' + sarray[i].id + '">' + sarray[i].text + '</label><br />'
		console.log(formString)
		var p = document.createElement("p"); 	// Create a <p> element
		var t = document.createTextNode(formString); // Create a text node
		p.appendChild(t);
		document.getElementById("listed").appendChild(p); // Output to element called 'listed'
		i++
	}

}

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

//    console.log(stringed)						// Display on console for debugging

//	const stringed1 = localStorage.getItem("todos");
//	todos = JSON.parse(stringed1)

    listtodos(stringed)							// Output the array as entries in a radio button form

//    todos.map((todo) => (
//        <h1 key={todo.id} >{todo.text}</h1>  // ERROR
//        h3.innerText = todo.text
//))

});

/*

getData();

window.addEventListener("load", (event) => {
	const name = localStorage.getItem("todos");
	h1.innerText = name;
});
*/