let user = {
    name: "Ahmed",
    age: 20,
    introduce:function(){
    console.log(`My name is ${this.name} and i am ${this.age}`)
}};
user.introduce();