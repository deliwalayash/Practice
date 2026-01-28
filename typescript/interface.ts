interface User {
  id: number;
  name: string;
  email?: string;   // optional
}


const user1: User = {
  id: 1,
  name: "Yash"
};

interface Product {
  id: number;
  title: string;
  price: number;
}

function printProduct(product: Product): string {
  return `${product.title} - ₹${product.price}`;
}

const Product1=<Product>{
    id:5,
    title:"hello",
    price:5
}
console.log(printProduct(Product1))