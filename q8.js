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
let userThree = {name:"Amaka", age:22, address:{city: "Ibadan"}};
//let userFour = {...userThree};
let userFour = {...userThree, address:{...userThree.address}};
userFour.age = 40;
userFour.name = "kunle";
userFour.address.city = "Lagos"
console.log(userThree.age);
console.log(userFour.age);
console.log(userFour.name);

console.log(userThree.address.city);
console.log(userFour.address.city);