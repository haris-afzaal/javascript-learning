Promise.resolve(2000)
    .then(function(price) {
        console.log("Original:", price);
        return price + 500;
    })
    .then(function(newPrice) {
        console.log("With tax:", newPrice);
        return newPrice + 300;
    })
    .then(function(finalPrice) {
        console.log("Final Price:", finalPrice);
    });