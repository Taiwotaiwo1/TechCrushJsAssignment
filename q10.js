console.log('/***Q10a***/')

let numberOfSeconds = 98765;
//calculate days
let days =Math.floor(numberOfSeconds /86400);
numberOfSeconds = numberOfSeconds % 86400;

// calculate hours
let hours = Math.floor(numberOfSeconds/ 3600);
numberOfSeconds = numberOfSeconds % 3600;

//calculate minutes
let minutes = Math.floor(numberOfSeconds/60)
numberOfSeconds = numberOfSeconds % 60;

// calculate seconds
let seconds = numberOfSeconds;

console.log((`${days} day, ${hours} hours, ${minutes} minutes ${seconds} seconds`))
// "1 day, 3 hours, 26 minutes, 5 seconds"


console.log('/***Q10b***/')

total = 0;
total += 2000;
total += 3000;
total += 1500;
//Total Before Discount
console.log(`Total Before Discount: ${total}`)

// Total After Discount of 10%
total -= total * 0.10;
console.log(`Total After 10% Discount:${total}`)
// Add Value Added Tax
total += total * 0.75;
console.log(`Total After 7.5% VAT: ${total}`)
// Split the bills among 3 people:
total /=3
console.log(`Each person pays: ${total}`)

console.log('/***Q10c***/')
let x = 5  //5
x++         //6
x **= 2;    //36
x %= 7;  // prediction:5  answer :1
x -=1  //  0
console.log(x);