// This works
const student = {name: "Chidi", score: 50} 
student.score = 90;
console.log(student); // {name:"Chidi", score: 90}

//This works
const grades = [1,2,3];
grades.push(4);
console.log(grades); //[1,2,3,4]

// This doesn't work --- it throws an error "Assignment to constant variable".
student = {name: "Bola", score:70};

/***Q7b.***/

//Object.freeze(student); //This protect the student property from beign reassigned and it 
//must come before the object propertity is being reassigned, if it comes after the reassingment it wouldn't work.


