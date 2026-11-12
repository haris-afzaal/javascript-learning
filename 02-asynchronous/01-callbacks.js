function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function showConfirmation() {
    console.log("Welcome to CodeCraft Academy");
}

greetUser("Ali", showConfirmation);

setTimeout(function () {
    console.log("Executed after 1 second callback");
}, 1000);
