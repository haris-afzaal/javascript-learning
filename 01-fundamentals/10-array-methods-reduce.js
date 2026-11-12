        let cart = [
            { name: "Laptop", price: 50000, quantity: 2 },
            { name: "Mouse", price: 1000, quantity: 3 },
            { name: "Keyboard", price: 2000, quantity: 1 }
        ];
        let rt=cart.reduce(function(sum,carto)
        {
            return sum+(carto.price*carto.quantity);    

        },0)
        console.log(rt);