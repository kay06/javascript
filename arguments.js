function fullName(firstName, lastName) {
    return lastName.toUpperCase() + ", " + firstName.toUpperCase();
}

console.log(fullName("John", "Doe"));

function sample(arg1, arg2) {
    console.log(arg1);
    console.log(arg2);
}

sample();//this will print Undefined twice because we do not pass any arguments
