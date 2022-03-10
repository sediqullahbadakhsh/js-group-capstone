import { listItems, listLikes } from './modules/listItems.js';
import './style.css';

window.onload = () => {
  listItems();
  listLikes();
};

window.addEventListener('load', () => {
  listLikes();
});
