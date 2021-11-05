const task = require("./fizzbuzz.js");

describe("Fizzbuzz", () => {
  let fizzbuzz = task.fizzbuzz;
  test("function exists", () => {
    expect(fizzbuzz).toBeDefined();
  });

  test("multiple of 3 and 5 returns fizzbuzz", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  test("a multiple of 3, it returns Fizz", () => {
    expect(fizzbuzz(9)).toEqual("Fizz");
  });

  test("multiple of 5 returns Buzz", () => {
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  test("not a multiple of 3 or 5 returns the number itself", () => {
    expect(fizzbuzz(8)).toEqual(8);
  });
});
