# TypeScript Basics — Homework 01

Практична робота №1 з дисципліни **«React та клієнтська SPA-архітектура»**.

## Project Description

Навчальний проєкт для опанування основ TypeScript: типізації змінних, об'єктів, масивів, функцій, узагальнених типів, промісів та HTTP-запитів.

Проєкт створено за допомогою Vite та TypeScript.

## Tech Stack

- TypeScript
- Vite
- Axios
- Node.js / npm
- Prettier
- Git / GitHub

## Project Structure

```text
01-ts-basics/
├── public/
├── src/
│   ├── task-1.ts
│   ├── task-2.ts
│   ├── task-3.ts
│   ├── task-4.ts
│   ├── task-5.ts
│   ├── task-6.ts
│   ├── task-7.ts
│   └── task-8.ts
├── index.html
├── package.json
├── tsconfig.json
└── README.md
```

## Completed Tasks

| Task | Topic | Description |
|---|---|---|
| 1 | Basic Types | Explicit typing with string, number and boolean |
| 2 | Interfaces | Product interface, readonly and optional properties |
| 3 | Arrays | Typed arrays and arrays of objects |
| 4 | Functions | Typed parameters, optional arguments and void |
| 5 | Union Types | Restricting status to specific string literals |
| 6 | Generics | Generic function getFirstElement&lt;T&gt; |
| 7 | Promises | Asynchronous operations with Promise&lt;string&gt; |
| 8 | HTTP Requests | Axios GET request and typed API response |

## Installation

Clone the repository:

```bash
git clone https://github.com/imukhametov-ui/01-ts-basics.git
cd 01-ts-basics
```

Install dependencies:

```bash
npm install
```

## Running the Project

Start the development server:

```bash
npm run dev
```

## TypeScript Validation

Check TypeScript types without generating JavaScript files:

```bash
npx tsc --noEmit
```

## Production Build

```bash
npm run build
```

## Code Formatting

```bash
npx prettier --write "src/**/*.ts"
```

## API

Task 8 uses the public JSONPlaceholder API:

https://jsonplaceholder.typicode.com/posts

The API response is typed using the `Post` interface and `Promise<Post[]>`.

## Author

IHOR

## Repository

https://github.com/imukhametov-ui/01-ts-basics
