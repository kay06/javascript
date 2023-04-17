var userObj = {
    email: "sample@sample.com", 
    fullName: "Sample User"
}

function dashboardGreeting() {
    console.log("Hello, ".concat(userObj.fullName));

}

dashboardGreeting();

userObj = {
    email: "sample2@sample2.com", 
    fullName: "Sample User2"
}

dashboardGreeting();
