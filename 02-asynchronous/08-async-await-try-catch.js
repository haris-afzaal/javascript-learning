function fetchOrderDetails(orderId) {
    return new Promise(function (resolve, reject) {
        if (orderId > 0) {
            resolve({ id: orderId, item: "Laptop", status: "Delivered" });
        } else {
            reject("Invalid Order ID");
        }
    });
}

async function showOrder() {
    try {
        let order = await fetchOrderDetails(101);
        console.log("Order fetched:", order);
    } catch (error) {
        console.log("Failed to get order:", error);
    } finally {
        console.log("Process completed.");
    }
}

showOrder();
