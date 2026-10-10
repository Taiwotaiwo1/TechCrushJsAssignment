
console.log('/***Q9A***/')

console.log(typeof 42); // number
console.log(typeof "42"); // string
console.log(typeof true); // boolean
console.log(typeof null); //object
console.log(typeof undefined); // undefined
console.log(typeof [1,2,3]);// wrong prediction: Array, correct answer: object
console.log(typeof {a:1}); // Object
console.log(typeof function (){}); // function
console.log(typeof NaN); // wrong prediction:  Not a Number;  correct answer: number

console.log('/****Q9B****/')
const abc = null;
function nullChecking(){
if(typeof abc === "object"){
    return "Request body is an object"
};
}

let resultA = nullChecking();
console.log(resultA);

const bcd = NaN;

function nanChecking(){
if(typeof bcd === "number"){
    return "Request body is an object"
};
}

let resultB = nullChecking();
console.log(resultB);

console.log('/***Q9C***/')

function getType(value){
    if(value === null){
        return "null"
    }
    if(Array.isArray(value)){
        return "array"
    }
    return typeof value
}
console.log(getType(42));
console.log(getType("42"));
console.log(getType(true));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType([1,2,3]));
console.log(getType({a:1}));
console.log(getType(function () {}));
console.log(getType(NaN));