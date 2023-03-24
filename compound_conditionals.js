//uncomment one of the vars to test out the program
//var age = 10;
//var age = 22;
//var age = 66; 
//var age = "asd"

if(age <= 10 ){
    console.log('you can eat from the kids menue');
    console.log('you are not old enough to drive a car');
    console.log('you cannot rent a car');

}
else if (age > 10 && age < 25){
    console.log('adult menue time for you!');
    console.log('you are old enough to drive a car');
    console.log('you cannot rent a car');
}
else if (age >= 25){
    console.log('adult menue time for you!');
    console.log('you are old enough to drive a car');
    console.log('you can rent a car'); 
}
else {
    console.log('invalid age');
}