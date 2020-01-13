1. 🎖 Write a program to calculate the total price of your phone purchase. With these conditions
 * [ ] You will keep purchasing phones (hint: loop!) until you run out of bank balance.
 * [ ] You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.
 * [ ] After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
 * [ ] Finally, check the amount against your bank account balance to see if you can afford it or not.
 * [ ] Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.
 * [ ] Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.
```js
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;
var bank_balance = 303.91;

function calculateTax(amount){
    amount = amount*(1+TAX_RATE);
    alert(amount);
}

function formatAmount(){
    var amount = 0;
    var oldAmount = 0;
    do {
  oldAmount = oldAmount+PHONE_PRICE+ACCESSORY_PRICE;
 }  
 while (oldAmount<SPENDING_THRESHOLD);
 amount = oldAmount;
 
 if(amount<bank_balance){
    amount = amount+PHONE_PRICE;
    return amount;
}
}

calculateTax(formatAmount());
```
 ⛑ Answer of the above will `$334.76`.


2. 🎖 Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen using `alert` (e.g. "2 is even").
```js

for(var i=0; i<21; i++){
    if(i%2==0){alert(`${i} is even`);}
    else {alert(`${i} is odd`);}
}
```


3. 🎖Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result in console (e.g. "2 * 9 = 18").
```js
for(var i=0; i<11; i++){
    console.log(i+"* 9 ="+(i*9));
}


4. 🎖Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
(e.g.
"1 * 1 = 1"
"1 * 2 = 2"
"1 * 3 = 3"
"1 * 4 = 4"
.... for all 100 results)

for(var i=0; i<11; i++){
    for(var j=0; j<11; j++){
        console.log(i+"*"+j+"="+(i*j));
    }
}


5. 🎖Show the following output using one loop.

// 1, 2, 3, 4, 5
// 6, 7, 8, 9, 10

// Your code goes here
var sameline = ",";
for(var i=1; i<11; i++){
    if(i==5){
        sameline = sameline+i+"\n";
    }else{
        sameline = sameline+i+",";
    }
}
console.log(sameline);


6. 🎖Use a while loop to add up the numbers 1 to 20.

// Your code goes here
var i = 0;
var sum = 0;
while (i<21) {
    sum += i;
    i++;
} alert(sum);


7. 🎖Use a while loop to print out the even number from 1 to 20. (You'll need Modulus for this. And an IF Statement.)

// Your code goes here
var i = 0;
while (i<21){
    if(i%2==0){
        console.log(i)
    }
    i++;
}
