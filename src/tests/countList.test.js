import countList from './countList.js';

describe('Count the number of recipes on the page', () => {
  test('Return 1 when if the array contains 1 item', () => {
    const recipes = [
      {
        strMeal: 'Ayam Percik',
        strMealThumb: 'https://www.themealdb.com/images/media/meals/020z181619788503.jpg',
        idMeal: '53050',
      },
    ];
    expect(countList(recipes)).toBe(1);
  });

  test('Return 0 when the array is empty', () => {
    const recipes = [];
    expect(countList(recipes)).toBe(0);
  });
});
