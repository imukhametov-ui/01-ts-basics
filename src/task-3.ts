const usernames: string[] = ["Alex", "Maria", "Ihor"];

const ratings: number[] = [5, 4, 3, 5, 4];

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Laptop",
    price: 25000,
  },
  {
    id: 2,
    name: "Mouse",
    price: 800,
  },
  {
    id: 3,
    name: "Keyboard",
    price: 1500,
  },
];

console.log(usernames, ratings, products);
