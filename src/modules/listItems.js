import comments from './comment.js';
import fetchData from './fetchAllData.js';
import { getAPI, postAPI } from './involvementAPI.js';
import countRecipes from './listcounter.js';

export const listLikes = async () => {
  const response = await getAPI();
  const likes = document.querySelectorAll('.likes');
  likes.forEach((like) => {
    response.forEach((item) => {
      if (item.item_id === like.id) {
        if (like.childNodes.length <= 1) {
          const small = document.createElement('small');
          small.className = 'small';
          small.textContent = `${item.likes} likes`;
          like.appendChild(small);
        } else {
          like.removeChild(like.childNodes[1]);
          const small = document.createElement('small');
          small.className = 'small';
          small.textContent = `${item.likes} likes`;
          like.appendChild(small);
        }
      }
    });
  });
};

const addLike = () => {
  const hearts = Array.from(document.querySelectorAll('.far'));
  hearts.forEach((item) => {
    item.addEventListener('click', async () => {
      item.nextSibling.firstChild.data = `${
        +item.nextSibling.firstChild.data.split(' ')[0] + 1
      } likes`;
      item.classList.remove('far');
      item.classList.add('fas');
      item.style.color = 'red';
      await postAPI(item.id);
    });
  });
};

// List Items
export const listItems = async () => {
  const ul = document.querySelector('.recipes');
  const food = await fetchData();
  food.forEach((element) => {
    const li = document.createElement('li');
    li.className = 'recipe-item';

    const img = document.createElement('img');
    img.className = 'food-img';
    img.src = element.strMealThumb;
    img.alt = 'food';

    const p = document.createElement('p');
    p.textContent = element.strMeal;
    p.className = 'recipe-name';

    const div = document.createElement('div');
    div.className = 'likes';
    div.id = element.idMeal;

    const heart = document.createElement('i');
    heart.classList.add('far', 'fa-heart');
    heart.id = element.idMeal;

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'comments';
    btn.innerText = 'Comments';
    btn.id = element.idMeal;
    comments(btn);

    div.appendChild(heart);
    p.appendChild(div);
    li.appendChild(img);
    li.appendChild(p);
    li.appendChild(btn);
    ul.appendChild(li);
  });

  // const countRecipes = (recipe) => recipe.length;
  const recipe = document.querySelectorAll('.recipe-item');
  const counter = document.querySelector('.recipes-counter');
  counter.innerText = `Recipes (${countRecipes(recipe)})`;

  addLike();
};
