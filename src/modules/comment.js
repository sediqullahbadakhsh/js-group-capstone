import createComment from './createComment.js';
import fetchSingleData from './fetchSingleData.js';
import { getCommentsAPI } from './involvementAPI.js';

const comments = (btn) => {
  const modal = document.getElementById('commentModal');
  const span = document.getElementsByClassName('close')[0];
  const modalContent = document.getElementById('modalContent');

  btn.onclick = async () => {
    const data = await fetchSingleData(btn.id);
    const allComments = await getCommentsAPI(btn.id);

    const {
      strMealThumb,
      strMeal,
      strCategory,
      strArea,
      strIngredient1,
      strIngredient2,
      strIngredient3,
      strIngredient4,
      strIngredient5,
      strIngredient6,
      strIngredient7,
      strIngredient8,
      strIngredient9,
      strIngredient10,
      strIngredient11,
      strIngredient12,
      strIngredient13,
      strIngredient14,
      strInstructions,
    } = data;
    modal.style.display = 'block';
    modalContent.innerHTML = `
    <div class="details">
      <img src=${strMealThumb} alt=${strMeal} />
      <div class="instructions">
        <h1>${strMeal}</h1>
        <h2>Instructions</h2>
        <p>${strInstructions}</p>
        <div class="ingredients">
          <div class="firstrow">
            <p><strong>Category: ${strCategory}</strong> </p>
            <p><strong>Ingredient 1: </strong> ${strIngredient1}</p>
            <p><strong>Ingredient 2: </strong> ${strIngredient2}</p>
            <p><strong>Ingredient 3: </strong> ${strIngredient3}</p>
            <p><strong>Ingredient 4: </strong> ${strIngredient4}</p>
            <p><strong>Ingredient 5: </strong> ${strIngredient5}</p>
            <p><strong>Ingredient 6: </strong> ${strIngredient6}</p>
            <p><strong>Ingredient 7: </strong> ${strIngredient7}</p>
          </div>
          <div class="secondrow">
            <p color="green"><strong>Area: ${strArea}</strong> </p>
            <p><strong>Ingredient 8: </strong> ${strIngredient8}</p>
            <p><strong>Ingredient 9: </strong> ${strIngredient9}</p>
            <p><strong>Ingredient 10: </strong> ${strIngredient10}</p>
            <p><strong>Ingredient 11: </strong> ${strIngredient11}</p>
            <p><strong>Ingredient 12: </strong> ${strIngredient12}</p>
            <p><strong>Ingredient 13: </strong> ${strIngredient13}</p>
            <p><strong>Ingredient 14: </strong> ${strIngredient14}</p>
          </div>
        </div>
      </div>
    </div>     
    <div class="comments-section"> 
      <h2>Comments <span id="countC"></span></h2>
      <div id="itemC"></div>
    <form>
      <h2>Add your comment</h2>
      <br/>
      <div class="pad-btm">
        <input type="text" name="name" id="name" placeholder="Your Name"/>
      </div>
      <div class="pad-btm">
        <textarea
          name="message"
          id="message"
          placeholder="Your Message"
          ></textarea>
          <p id="alert"></p>
      </div>
      <div class="pad-btm">
         <input type="button" class="cmnt-btn" id=commentBtn${btn.id} value="submit" />
      </div>
    </form>
    </div>
    `;
    // count comments
    const countComments = (comment) => comment.length;
    const countCmnt = document.getElementById('countC');
    countCmnt.textContent = `(${countComments(allComments)})`;

    const itemC = document.getElementById('itemC');
    itemC.innerHTML = allComments
      .map((e) => {
        const { username, comment } = e;
        return `<span>${e.creation_date} ${username}: ${comment}</span><br />`;
      })
      .join('<br />');

    const createCommentBtn = document.getElementById(`commentBtn${btn.id}`);
    createCommentBtn.addEventListener('click', (e) => createComment(e, btn));
  };

  span.onclick = () => {
    modal.style.display = 'none';
  };

  window.onclick = (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
};

export default comments;
