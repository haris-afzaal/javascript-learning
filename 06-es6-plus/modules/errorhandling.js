function checkPrice(price) {
if (price <= 0) {
throw new Error("Invalid price");
}return "Valid price";

}try {
    console.log(checkPrice(-100));
} catch (error) {
    console.log(error.message);
}