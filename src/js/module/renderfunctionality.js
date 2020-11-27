import { clearChilds } from './clearfunctionality.js';
import { renderTemplateItem } from './rendertemplate.js';
import createiconbtnfunctionality from './generateFunctionalityIcons.js';

const render = () => {
  const itemsList = JSON.parse(localStorage.getItem('list')) || [];
  clearChilds();
  itemsList.forEach((data) => {
    renderTemplateItem(data);
  });
  createiconbtnfunctionality();
};

export default render;
