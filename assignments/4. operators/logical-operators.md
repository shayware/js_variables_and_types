# Logical Operator

1. 🥇What's the output of the following, write the output next to the code as comment.

* [ ] Logical AND operation

```js
true  && true;                    // true
true  && false;                   // false
false && true;                    // false
false && false;                   // false
"foo" && "bar";                   // "bar"      
"bar" && "foo";                   // "foo"
"foo" && "";                      // ""
""    && "foo";                   // ""
" "   && "John" && "" && false    // " "           
false && "Hey" && undefined       // false
"undefined" && false && 42        // false
```

* [ ] Logical OR operation
```js
true  || true;                    // true
true  || false;                   // true
false || true;                    // true
false || false;                   // false
"foo" || "bar";                   // "foo"
"bar" || "foo";                   // "bar"
"foo" || "";                      // "foo"
""    || "foo";                   // "foo"
" "   || "John" || "" || false    // " "
false || "Hey" || undefined       // "Hey"
"undefined" || false || 42        // "undefined"
```

2. 🥈You have two variables i.e `isGuestOneVeg` and  `isGuestTwoVeg` according to the value using logical && and || opeartor do the following.

* [ ] If both are veg "Only offer up vegan dishes."
* [ ] At least one veg  "Make sure to offer up some vegan options."
* [ ] Else, "Offer up anything on the menu"
```js
let isGuestOneVeg = false;
let isGuestTwoVeg = false;
// Your code goes here

var menu = ((isGuestOneVeg==true)&&(isGuestTwoVeg==true))? alert ("Only offer up vegan dishes."):(((isGuestOneVeg==false)&&(isGuestTwoVeg==true))||((isGuestOneVeg==true)&&(isGuestTwoVeg==false))) ? alert("Make sure to offer up some vegan options."):((isGuestOneVeg==false)&&(isGuestTwoVeg==false)) ? alert("Offer up anything on the menu"):alert("enter valid input");


3. 🎖Using the variable `temperature` and logical operators do the following
* [ ] If temperature is less then 32 alert "It is freezing outside"
* [ ] If the temperature is greater then 110 alert "It is hot outside"
* [ ] else 'Go for it. It is pretty nice out'

let temperature = 4;
// Your code goes here


let temp = (temperature32)?alert("It is freezing outside"):(temperature>110)?alert("It is hot outside"):alert("Go for it. It is pretty nice out");



4. 🎖 Output of this and the reason behind the output.

alert( alert(1) || 2 || alert(3) );

1 then 2 in alert modular.
alert(1) will display 1 then it will retuen undefined value at its place which is a falsy value but || is searching for first truthy value that is 2 so it will retuen 2 as 1st truthy value thus alert(2) will show us 2.