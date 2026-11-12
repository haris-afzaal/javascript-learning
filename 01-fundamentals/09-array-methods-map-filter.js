    let products = [
        { name: "Laptop", price: 50000 },
        { name: "Mobile", price: 30000 },
        { name: "Keyboard", price: 2000 },
        { name: "Mouse", price: 1000 }
    ];
    let filter=products.filter(function(fill){
        return fill.price<5000;
    })
let mapf=filter.map(function(mapf){
    return mapf.name;
})
console.log(mapf);