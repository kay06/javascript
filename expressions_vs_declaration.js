//firt way of making a function
function greeting() {
    return "hi there";
}
console.log(greeting());
//sencond way of making a function
var greetingTwo = function () {
    return "hi there again";
};
console.log(greetingTwo());

var age = 3;

if (age <= 10) {
    var buildMenue = function () {
        console.log("kids menue");
    };

    function buildMenueTwo() {
        return "ANOTHER kids menue";
    }
console.log(buildMenue());
console.log(buildMenueTwo()); //this does not work because the function is not declared correctly
}


//the coding exercise
//var myFunction = function () {
//    return true;
//}