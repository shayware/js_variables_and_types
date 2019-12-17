1. In code below "Mark" is a string.  What is name?
```js
var name = "Mark";

    name is the name of location where String "mark" is stored.
```

2. Find the error if any
```js
  var product cost = 3.45;
```
  var productCost = 3.45;

3. Write `Right or Wrong` next to the code below.

```js
  "Hello World"    Right
  'Hello World"    Wrong
  "Hello World'    Wrong
  'Hello World'    Right
```

## Write `VALID` and `INVALID` infront of the variable name defined below
```js
var man;                    Valid
var 1girl;                  Invalid
var woman3;                 valid
var -girl;                  Invalid
var blackDog;               Valid
var 42;                     Invalid
var $42;                    Valid
var userName;               Valid
var x, y, z;                Valid
var x = 5, y = 6, z = 7;    valid
var x = 5 + 10 + 2;         valid
```

## Basic Operations

Mathematical Operations:

Solve this using mathematical operations. (+, -, *, / , etc)

```js
var amount = 2080;
// Define a new variable and store the value that is 80 less then the value of amount.

var lessAmount = amount-80;


// Define a new variable and store the value that is 200 more then the value of amount.

var moreAmount = amount+200;


// Define a new variable and store the value that is 4 times the value of amount.

var multipleAmount = amount*4;


// Define a new variable and store the reminder when the value of amount is  divided by 21.

var dividedAmount = amount % 21;

```

Logical Operation:

Solve this using logical operations. (<, >, &&, ||)

```js
var johnAge = 45;
var markAge = 35;

// Check who is older eithe John or Mark

var older = (johnAge>markAge) ? alert("John is older"): alert("mark is older");

// Check who is younger

var yonger = (johnAge>markAge) ? alert("Mark is yonger"): alert("John is yonger");


// Check if their age is equal

var equal = (johnAge==markAge) ? alert("Mark is yonger"): alert("John is yonger");


// Create a new variable and assign the age of john to new variable.

var johnCopy = johnAge;

// Check if john is equal to or greater then mark.

var isEqual = (johnAge==markAge) ? alert("Mark and john age are equal"): (johnAge>markAge)?alert("John is elder than mark"):alert("John is yonger than mark");

// Check if john is less then or equal to mark.

var isEqual2 = (johnAge==markAge) ? alert("Mark and john age are equal"): (johnAge>markAge)?alert("John is more than mark"):alert("mark is more than mark");


// Calculate the average age of john and mark and assign to a new variable.
```
var avgAge = (johnAge+markAge)/2;