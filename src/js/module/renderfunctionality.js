import { clearChilds } from './clearfunctionality.js';
import { renderTemplateItem } from './rendertemplate.js';
import { showmodal } from './modalfeatures.js';
import { deleteItem, checkItem } from './featuresSeachDeleteEditCreate.js';
import { itemsList } from './localstoragefeatures.js';

const createiconbtnfunctionality = () => {
  const iconedit = document.querySelectorAll('.editicon');
  const icondelete = document.querySelectorAll('.deleteicon');
  const iconcheck = document.querySelectorAll('.checkicon');

  iconedit.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      showmodal('edit', indexArray);
    });
  });

  icondelete.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      deleteItem(indexArray);
    });
  });

  iconcheck.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      checkItem(indexArray);
    });
  });
};

const render = () => {
  clearChilds();
  itemsList.forEach((data) => {
    renderTemplateItem(data);
  });
  createiconbtnfunctionality();
};

export default render;
