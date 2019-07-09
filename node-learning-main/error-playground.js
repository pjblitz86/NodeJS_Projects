const sum = (a, b) => {
  if (a && b) {
    return a + b;
  }
  // throwed unhandled error object
  throw new Error("invalid arguments");
};

// for synchronous code
try {
  console.log(sum(1));
} catch (error) {
  console.log("error occured");
  console.log(error);
}

// async operations - with .then()/.catch() or async/await
