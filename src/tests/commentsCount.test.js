import countComments from "./countcomment";

describe("Count the number of comments added", () => {
  test("Return 3 when there are three comments", () => {
    const comments = [
      {
        item_id: "52951",
        username: "Jane Akpan",
        comment: "Hello",
      },
      {
        item_id: "52951",
        username: "James Okon",
        comment: "Nice Chicken",
      },
      {
        item_id: "52951",
        username: "James Okon",
        comment: "Nice Chicken",
      },
    ];
    expect(countComments(comments)).toBe(3);
  });

  test("Return 0 when the comments array is empty", () => {
    const comments = [];
    expect(countComments(comments)).toBe(0);
  });
});
