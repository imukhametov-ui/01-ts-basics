const usernames: string[] = ["Alex", "Maria", "Ihor"];

const ratings: number[] = [5, 4, 3, 5, 4];

interface Product {
  id: number;
  title: string;
}

const products: Product[] = [
  {
    id: 1,
    title: "Laptop",
  },
  {
    id: 2,
    title: "Mouse",
  },
  {
    id: 3,
    title: "Keyboard",
  },
];

console.log(usernames, ratings, products);
