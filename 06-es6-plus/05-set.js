let productIds = [101, 102, 101, 103, 102, 104, 105, 104];
let ok=new Set(productIds);
let uniqueProducts = [...ok];
console.log(ok.size);