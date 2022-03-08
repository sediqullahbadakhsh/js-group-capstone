import { postCommentAPI, getCommentsAPI } from './involvementAPI.js';

const createComment = async (e, btn) => {
  e.preventDefault();

  const name = document.getElementById('name');
  const insight = document.getElementById('insight');
  const message = document.getElementById('message');
  const itemC = document.getElementById('itemC');

  if (name.value === '') {
    message.textContent = 'Please enter your name';
    return;
  }
  if (insight.value === '') {
    message.textContent = 'Please enter an insight';
    return;
  }

  const body = {
    item_id: btn.id,
    username: name.value,
    comment: insight.value,
  };

  const postComment = await postCommentAPI(body);
  if (postComment === 'Created') {
    message.textContent = 'Your comment has successfully Added';
  } else {
    message.textContent = 'Something went wrong';
  }

  name.value = '';
  insight.value = '';

  const allComments = await getCommentsAPI(btn.id);
  itemC.innerHTML = allComments
    .map((e) => {
      const { username, comment } = e;
      return `<span>${e.creation_date} ${username}: ${comment}</span><br />`;
    })
    .join('<br />');
};

export default createComment;
