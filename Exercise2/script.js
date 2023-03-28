const form = document.querySelector("form");	// CAN WE DO THIS WITH AN ID?
const div = document.querySelector("#listed");	// div that holds the list of todo items

// From https://github.com/ai/nanoid  - Gives a rndom UUID of 21 characters
let nanoid=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,e)=>t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"),"");

let todos = []									// Define our array

// Output the todo items
function listtodos(s) {
	while (div.firstChild) {					// Delete all items from the list before starting
		div.removeChild(div.firstChild);
	};
    sarray = JSON.parse(s);						// Turn string back into an array
	var i = 0;
	while(i < sarray.length) {					// Go through the entire array
		formString = '<input type="radio" id="' + sarray[i].id + '" value="' + sarray[i].text + '">'
		formString += ' <label for="' + sarray[i].id + '">' + sarray[i].text + '</label><br />'
//		console.log(formString)					// Display on console for debugging
		var p = document.createElement("p"); 	// Create a <p> element
        p.innerHTML = formString;				// Put the HTML into it
		document.getElementById("listed").appendChild(p); // Output to element called 'listed'
		i++										// To next item in array
	};
}

// Get todo just entered when user hits submit and add to array of others.
// Put in local storage so it stays between reloads
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

    listtodos(stringed)							// Output the array as entries in a radio button form
});

// Load our array from localstorage when we load the page
window.onload = function() {
	const stringed = localStorage.getItem("todos"); // To get items from local storage
//    console.log(stringed);						// Display on console for debugging
    if (stringed !== null) {						// Check we have something
        listtodos(stringed)							// Output the array as entries in a radio button form
        todos = JSON.parse(stringed);				// Turn into an array
	}
};
