import countComments from '../modules/commentCounter.js';

describe('Count the number of comments', () => {
  test('Return 3 when there are three comments', () => {
    const comments = [
      {
        item_id: '52951',
        username: 'mahmood',
        comment: 'I like it',
      },
      {
        item_id: '52951',
        username: 'rustam',
        comment: 'Nice Chicken',
      },
      {
        item_id: '53016',
        username: 'ahmad',
        comment: 'yummy',
      },
    ];
    expect(countComments(comments)).toBe(3);
  });

  test('Return 0 when the comments array is empty', () => {
    const comments = [];
    expect(countComments(comments)).toBe(0);
  });
});
