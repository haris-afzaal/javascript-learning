let taskA = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject("Task A Failed");
    }, 1000);
});
setTimeout(function() {
    console.log("Welcome to CodeCraft Academy");
}, 3000);

let taskb=new Promise(function(resolve,reject){
    setTimeout(() => {
        reject("Kesa rha");
    },4000)
})
Promise.any([taskA, taskb])
    .then(function(result) {
        console.log("Winner:", result);
    })
    .catch(function(error) {
        console.log(error);
    });