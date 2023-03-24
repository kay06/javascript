//AUTOMATIC TYPE CASTING
console.log('100'- 42); 
//javascript does the changing of the variables and the math 
console.log(100+ null); 
//javascript saw null and converts null to 0
console.log('100'+ 42); 
//adds the number 42 on the end of the string 100 and returns 10042

//MANUAL TYPE CASTING
var ageOne = 12;
console.log(String(ageOne));//option one
console.log(ageOne.toString());//option two
//these converts the variable given to a string
var ageTwo = '33.5';
console.log(parseInt(ageTwo));
//this converts the variable given into an intiger
console.log(parseFloat(ageTwo));
//this converts the variable given into an float(decimal)
var string = "asdf";
console.log(parseInt(string));
console.log(parseFloat(string));
//returns NaN short for not a number because a sting cannot convert to a int or float
console.log(+ ageTwo);
//returns variable given into a intiger/float
console.log(Number(true));
//returns a 1
console.log(Number(false));
//returns a 0