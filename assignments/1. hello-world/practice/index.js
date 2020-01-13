// Challenge 1.
// Log message in console saying "I'm Learning Javascript"

console.log( " I'm Learning Javascript " );


// Challenge 2.
// Declare two variables: admin and name.
// Assign the value "John" to name.
// Copy the value from name to admin.
// Show the value of admin using alert (must output “John”).

var name = "John";
var admin = name;
alert( admin );


// Challenge 3.
// Use alert function to to show a message saying “Hello World”.

alert("Hello World");


// Challenge 4.
// Use prompt to take the name of person and greets them. i.e "Welcome Arun"

var currentUser = prompt("Please enter your name");
alert(`Welcome ${currentUser}`);


// Challenge 5.
// Get an input from the user using the prompt box and display the length of the string.
// e.g “Learning is fun” should output will be 15.

var inputString = prompt("enter any word, we can show lenght of entered word")
var inputLength = inputString.length;
alert(`length of enntered word is ${inputLength}`);


// Challenge 6.
var city = "Dharamshala";
var country = "India";
// Alert the above variable like "Dharamshala, India";
alert(`${city}, ${country}`);
