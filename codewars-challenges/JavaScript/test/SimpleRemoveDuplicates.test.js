import { SimpleRemoveDuplicates } from "../index.js"

test('adds 1 + 2 to equal 3', () => {
  expect(SimpleRemoveDuplicates([3, 4, 4, 3, 6, 3])).toBe([4, 6, 3]);
});