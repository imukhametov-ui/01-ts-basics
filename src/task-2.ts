interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
  inStock: boolean;
}

const product: Product = {
  id: 1,
  name: "Laptop",
  price: 25000,
  description: "Gaming laptop",
  inStock: true,
};

console.log(product);
