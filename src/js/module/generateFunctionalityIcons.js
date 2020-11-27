import {
  deleteItem,
  checkItem,
  showModalEditItem,
} from './featuresSeachDeleteEditCreate.js';

const createiconbtnfunctionality = () => {
  const iconedit = document.querySelectorAll('.editicon');
  const icondelete = document.querySelectorAll('.deleteicon');
  const iconcheck = document.querySelectorAll('.checkicon');

  iconedit.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      showModalEditItem(indexArray);
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

export default createiconbtnfunctionality;
