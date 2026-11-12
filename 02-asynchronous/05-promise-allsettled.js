let usertask = Promise.resolve("User Loaded");

let productTask = Promise.reject("Product Failed");

let orderTask = Promise.resolve("Order Loaded");

Promise.allSettled([
    usertask,
    productTask,
    orderTask
]).then(function(results){
    console.log(results);
})