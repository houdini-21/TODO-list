import { clearChilds } from './clearFunctionality.js';
import { renderTemplateItem } from './renderTemplate.js';
import createIconBtnFunctionality from './generateFunctionalityIcons.js';

const render = () => {
  const itemsList = JSON.parse(localStorage.getItem('list')) || [];
  clearChilds();
  itemsList.forEach((data) => {
    renderTemplateItem(data);
  });
  createIconBtnFunctionality();
};

export default render;
