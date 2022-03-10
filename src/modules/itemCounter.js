import { getAPI } from './involvementAPI.js';

const likesCount = () => {
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
          } // else {
          //   // like[i].removeChild(like[i].childNodes[1]);
          //   const small = document.createElement('small');
          //   small.className = 'small';
          //   small.textContent = `${item.likes} likes`;
          //   like[i].appendChild(small);
          // }
        }
      });
    }
  });
};

export default likesCount;