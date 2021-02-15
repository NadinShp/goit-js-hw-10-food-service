import menu from '../menu.json';
import items from '../templates/menu-items.hbs';

const markup = items(menu);

const menuRef = document.querySelector(".js-menu");
menuRef.insertAdjacentHTML('beforeend', markup);