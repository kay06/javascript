//there are several ways to make objects but the most basic is 1st

var user = { name : "kayleece" } //this is the basic way

console.log(user); //this prints the full object
console.log(user.name); //this prints a specific item inside the object

user.name = "jordan"; //this is how to change an item in an object

console.log(user.name); //this prints the new name given

var userInfo = { names : "kayleece", age : 22, city : "ogden"}
        //you can also use several items inside of the object

console.log(userInfo.names); //and return those sepretly
console.log(userInfo.age);
console.log(userInfo.city);

var studentAndGrades = { student : "kayleece",grades: {math: 100, science: 50, english: 20}}
        //as well you are able to next objects inside each other 
console.log(studentAndGrades.student);
console.log(studentAndGrades.grades.math);
console.log(studentAndGrades.grades.science);
console.log(studentAndGrades.grades.english);

studentAndGrades.grades.coding = 99;

console.log(studentAndGrades.grades);
