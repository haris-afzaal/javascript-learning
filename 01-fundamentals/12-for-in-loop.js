let product = {
    name: "Laptop",
    price: 50000,
    brand: "Dell",
    stock: 10
};
for (let pro in product) {
    console.log(pro, product[pro]);
}