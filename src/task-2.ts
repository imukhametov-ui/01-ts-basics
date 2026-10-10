interface Product {
  readonly id: number;
  title: string;
  description?: string;
}

const product: Product = {
  id: 1,
  title: "Laptop",
  description: "Gaming laptop",
};

console.log(product);
