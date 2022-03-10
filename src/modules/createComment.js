import { postCommentAPI, getCommentsAPI } from "./involvementAPI.js";

const createComment = async (e, btn) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const message = document.getElementById("message");
  const alert = document.getElementById("alert");
  const itemC = document.getElementById("itemC");
  const countCmnt = document.getElementById("countC");

  if (name.value === "" || message.value === "") {
    alert.textContent = "Please fill all boxes";
    setTimeout(() => {
      alert.textContent = "";
    }, 3000);
    alert.style.color = "red";
    return;
  }

  const body = {
    item_id: btn.id,
    username: name.value,
    comment: message.value,
  };

  const postComment = await postCommentAPI(body);
  if (postComment === "Created") {
    alert.textContent = "Your comment was successfull Added";
    setTimeout(() => {
      alert.textContent = "";
    }, 3000);
    alert.style.color = "green";
  } else {
    alert.textContent = "Something went wrong";
    alert.style.color = "red";
    setTimeout(() => {
      alert.textContent = "";
    }, 3000);
  }

  name.value = "";
  message.value = "";

  const allComments = await getCommentsAPI(btn.id);
  const countComments = (comment) => comment.length;
  countCmnt.textContent = `(${countComments(allComments)})`;

  itemC.innerHTML = allComments
    .map((e) => {
      const { username, comment } = e;
      return `<span>${e.creation_date} ${username}: ${comment}</span><br />`;
    })
    .join("<br />");
};

export default createComment;
