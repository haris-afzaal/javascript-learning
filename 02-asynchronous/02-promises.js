function checkstock(stock){
    return new Promise(function(resolve,reject)
    {
        if(stock>0){
        resolve("Product Availabale")
    }
    else{
        reject("Product Out of Stock")
    }
    }
)
    
    }

    checkstock(0)
    .then(function(result){
        console.log(result);
    })
    .catch(function(error){
        console.log(error);
    })