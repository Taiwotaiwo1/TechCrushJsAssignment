// copying by values
let a = 10;
let b = a;
b = 20;
console.log(a, b); // 10 20

//copying by reference
let userOne = {name:"Amaka", age: 22};
let userTwo = userOne;
userTwo.age = 40;
console.log(userOne.age); // 40

// change userFour doesnot affect userThree with the help of spread operator
let userOne = {name:"Amaka", age:22, address:{city: "Ibadan"}};
//let userFour = {...userThree};
let userTwo = {...userOne, address:{...userOne.address}};
userTwo.age = 40;
userTwo.name = "kunle";
userTwo.address.city = "Lagos"
console.log(userOne.age); // 22
console.log(userTwo.age);  //40
console.log(userTwo.name); //Kunle

console.log(userOne.address.city); // Ibadan
console.log(userTwo.address.city); // Lagos