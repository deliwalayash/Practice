var user1 = {
    id: 1,
    name: "Yash"
};
function printProduct(product) {
    return "".concat(product.title, " - \u20B9").concat(product.price);
}
var Product1 = {
    id: 5,
    title: "hello",
    price: 5
};
console.log(printProduct(Product1));
