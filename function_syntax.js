function hiThere () { //how to make a basic function
    console.log("hi there")
}

hiThere(); //how to call the function

function hiThereTwo () { //this is how to make a function that returns values
    return 'hi there again';
}
 
var storedText = hiThereTwo ();
console.log(storedText);

function hiThereThree (name){ //this is how to add an argument to the function
    console.log("goodmorning " + name);
}

hiThereThree("kayleece"); //this is how to call a function with an argument