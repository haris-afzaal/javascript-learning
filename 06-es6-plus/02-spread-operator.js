let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell"
};
let newpro={
    ...product,
    price:55000,
    stock:10

}
console.log(newpro);