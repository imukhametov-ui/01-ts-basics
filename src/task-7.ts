function getMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve("Hello, TypeScript!");
    }, 2000);
  });
}

getMessage().then((result) => {
  console.log(result);
});
