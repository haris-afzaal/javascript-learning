function getprice(){
    return new Promise(function(resolve){
        resolve(2000);
    })
}
function getDelivery(){
    return new Promise(function(resolve){
        resolve(300);
    })
}
function getTax(){
    return new Promise(function(resolve){
        resolve(200); 
    })
}
async function calculateTotal() {
    let result=await Promise.all([
        getprice(),
        getDelivery(),
        getTax()
    ]);
let total = result[0] + result[1] + result[2];    
    console.log(result);
    console.log(total);
}
calculateTotal();