function printUserInfo(name: string, age: number, email?: string): void {
  console.log(`Name: ${name}`);
  console.log(`Age: ${age}`);

  if (email) {
    console.log(`Email: ${email}`);
  }
}

printUserInfo("Ihor", 46);
printUserInfo("Alex", 25, "alex@example.com");
