import comments from './displayComments.js';
import { getAPI, postAPI } from './involvementAPI.js';
import countRecipes from './countRecipes.js';

// FetchData
const fetchData = async () => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken',
  );
  const data = await response.json();
  return data.meals;
};

// list Data

export const listLikes = () => {
  getAPI().then((response) => {
    const like = Array.from(document.querySelectorAll('.likes'));
    for (let i = 0; i < like.length; i += 1) {
      response.forEach((item) => {
        if (item.item_id === like[i].id) {
          if (like[i].childNodes.length <= 1) {
            const small = document.createElement('small');
            small.className = 'small';
            small.textContent = `${item.likes} likes`;
            like[i].appendChild(small);
          } else {
            like[i].removeChild(like[i].childNodes[1]);
            const small = document.createElement('small');
            small.className = 'small';
            small.textContent = `${item.likes} likes`;
            like[i].appendChild(small);
          }
        }
      });
    }
  });
};

const addLike = () => {
  const heart = Array.from(document.querySelectorAll('.fas'));
  heart.forEach((item) => {
    item.addEventListener('click', async () => {
      await postAPI(item.id);
      listLikes();
    });
  });
};

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
    heart.classList.add('fas', 'fa-heart');
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

  const recipe = document.querySelectorAll('.recipe-item');
  const counter = document.querySelector('.recipes-counter');
  counter.innerText = `Recipes (${countRecipes(recipe)})`;

  addLike();
};
