let user = {
    name: "Ahmed",
    email: "ahmed@gmail.com",
    age: 22
};
let localvariable=JSON.stringify(user);
let obj=JSON.parse(localvariable);
console.log(obj.email);
