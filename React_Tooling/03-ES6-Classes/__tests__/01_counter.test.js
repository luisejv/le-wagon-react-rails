const Counter = require('../lib/01_counter');

test("Should return 0 if the initial text is empty", () => {
  const counter = new Counter("");
  expect(counter.occurrences("hello")).toBe(0);
});
test("Should be case-insensitive", () => {
  const counter = new Counter("Lorem ipsum dolor sit amet, consectetur adipisicing elit");
  expect(counter.occurrences("lorem")).toBe(1);
});
test("Should not match partial words", () => {
  const counter = new Counter("a fat cat sat on a mat and ate a fat rat");
  expect(counter.occurrences("at")).toBe(0);
});
test("Should count correctly 1 occurrence", () => {
  const counter = new Counter("a fat cat sat on a mat and ate a fat rat");
  expect(counter.occurrences("cat")).toBe(1);
});
test("Should count correctly 2 occurrences", () => {
  const counter = new Counter("a fat cat sat on a mat and ate a fat rat");
  expect(counter.occurrences("fat")).toBe(2);
});
