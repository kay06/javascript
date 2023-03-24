//none of these are stored in a variable meaning they are not changing the original variable str
var str = "the quick brown fox jumped over the lazy dog jumped";

console.log(str.length); //this returns the length of the string

console.log(str.charAt(2)); //this returns the charecter at the index of said number

console.log(str.charAt(200)); //because the string only containes 42 charecters this will return ""

console.log(str.concat("again and again")); //adds sting on the end of the string given

console.log(str.includes("quick")); //returns true because "quick" is in the string
console.log(str.includes("foo")); //returns false because "foo" is not in the string

console.log(str.startsWith("the")); //returns true because the string starts with "the"
console.log(str.startsWith("quick")); //returns false because the string deos not start with "quick"

console.log(str.endsWith("jumped")); //returns true because the string ends with "jumped"
console.log(str.endsWith("quick")); //returns false because the string does not end with "quick"

console.log(str.repeat(3)); //will return the string repeated the number of times given

console.log(str.match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/));
//compares the string to a phone number expression and returns null
console.log("555-555-5555".match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/));
//compares the string to a phone number expression and returns object
console.log(str.replace("fox", "wolf"));
//returns the original string with the word 'fox' replaced with 'wolf'
console.log("555-555-5555".search(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/));
//returns index it was able to find the expression and -1 if it was unable to find it
console.log(str.indexOf("jumped"));
//returns the first index it was able to find the string given
console.log(str.lastIndexOf("jumped"));
//returns the last index it was able to find the string given
console.log(str.slice(10));
//this will return the string starting from the begining until the index given
console.log(str.slice(-8));
//this will return the string starting from the end until the index given
console.log(str.slice(4, 9));
//this will return the string starting from the first index given until the 2nd index given
console.log(str.slice(4, 10).trim());
//this will trim off any extra spaces in the end of any strings outputed
console.log(str.toUpperCase());
//this will make the sting in full upper case letters
console.log(str.toLowerCase());
//this will make the sting in full lower case letters