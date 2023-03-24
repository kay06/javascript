function ageVerification(age){
    //if(age > 25){
    //  console.log("yes car");
    //}
    //else{
    //  console.log("no car 4 u");
    //}
    //how to make the following lines in 1 line
    let answer = age > 25 ? 'yes car' : "no car 4 u";
    console.log(answer);
}
  
ageVerification(55);
ageVerification(15);

//more advanced example compound logic

function adminControls(user){
//    if (user) {
//        if(user.admin){
//            console.log('showing admin controls...');
//        }
//        else{
//            console.log('admin only keep out');
//        }
//    }
//    else{
//        console.log('sign in pls');
//    }
//how to do the following code in 1 lines
let response = user ? user.admin ? "showing admin controls..." : "You need to be an admin" : "log in ";
console.log(response);
}
//the creation of the diffrent users
let userOne = {
    name: 'kayleece',
    admin: true
}
let userTwo = {
    name: 'jesus',
    admin: false
}
let userThree = null;

adminControls(userOne);
adminControls(userTwo);
adminControls(userThree);

