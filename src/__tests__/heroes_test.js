import sortByHealth from "../heroes.js";

test('correct sort of array from big to small', () => {
  const characters = [
    {name: 'рыбак', health: 20},
    {name: 'викинг', health: 300},
    {name: 'русалка', health: 88},
  ];

  const sortedCharacters = sortByHealth(characters);
  expect(sortedCharacters).toEqual([
    {name: 'викинг', health: 300},
    {name: 'русалка', health: 88},
    {name: 'рыбак', health: 20},
  ]);
});