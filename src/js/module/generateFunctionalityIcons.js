import {
  deleteItem,
  checkItem,
  showModalEditItem,
} from './featuresSeachDeleteEditCreate.js';

const createIconBtnFunctionality = () => {
  const iconEdit = document.querySelectorAll('.editicon');
  const iconDelete = document.querySelectorAll('.deleteicon');
  const iconCheck = document.querySelectorAll('.checkicon');

  iconEdit.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      showModalEditItem(indexArray);
    });
  });

  iconDelete.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      deleteItem(indexArray);
    });
  });

  iconCheck.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      checkItem(indexArray);
    });
  });
};

export default createIconBtnFunctionality;
