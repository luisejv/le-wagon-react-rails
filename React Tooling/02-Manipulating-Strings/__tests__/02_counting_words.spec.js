const occurrences = require('../lib/02_counting_words');

test("Should return 0 if the initial text is empty", () => {
  expect(occurrences("", "hello")).toBe(0);
});
test("Should be case-insensitive", () => {
  expect(occurrences("Lorem ipsum dolor sit amet, consectetur adipisicing elit", "lorem")).toBe(1);
});
test("Should not match partial words", () => {
  expect(occurrences("a fat cat sat on a mat and ate a fat rat", "at")).toBe(0);
});
test("Should count correctly 1 occurrence", () => {
  expect(occurrences("a fat cat sat on a mat and ate a fat rat", "cat")).toBe(1);
});
test("Should count correctly 2 occurrences", () => {
  expect(occurrences("a fat cat sat on a mat and ate a fat rat", "fat")).toBe(2);
});
