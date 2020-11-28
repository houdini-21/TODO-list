import render from './module/renderFunctionality.js';
import getDate from './module/dateFeatures.js';
import {
  searchItem,
  createItem,
  editItem,
} from './module/featuresSeachDeleteEditCreate.js';
import { closeModal, showModal } from './module/modalFeatures.js';


const btnSearch = document.getElementById('btnsearch');
const inputSearch = document.getElementById('inputsearch');
const btnCreateItem = document.getElementById('btncreateitem');
const btnCloseModal = document.getElementById('btnclosemodal');
const inputName = document.getElementById('inputname');
const inputPriority = document.getElementById('inputpriority');
const inputDate = document.getElementById('inputdate');
const inputTime = document.getElementById('inputtime');
const btnCreate = document.getElementById('btncreate');
const btnEditItem = document.querySelector('.card__btnedititem');
const filterSelect = document.getElementById('filter');

btnSearch.addEventListener('click', () => {
  if (inputSearch.value === '') {
    render();
    alert('Enter a search term!!!!');
  } else {
    searchItem(inputSearch.value, filterSelect.value);
  }
});

btnCreateItem.addEventListener('click', () => {
  inputDate.min = getDate('fulldate');
  inputDate.value = getDate('fulldate');
  inputTime.value = getDate('time');
  inputTime.min = getDate('time');
  showModal();
});

btnCloseModal.addEventListener('click', () => {
  closeModal();
});

btnCreate.addEventListener('click', () => {
  const date = getDate('fulldate');
  const time = getDate('time');
  if (
    inputName.value === ''
    || inputPriority.value === '0'
    || inputDate.value === ''
    || inputTime.value === ''
  ) {
    alert('Nothing field can be empty');
  } else if (inputTime.value < time && inputDate < date) {
    alert('Time reminder');
  } else {
    createItem(
      inputName.value,
      inputPriority.value,
      inputDate.value,
      inputTime.value,
    );
    closeModal();
  }
});

btnEditItem.addEventListener('click', () => {
  const indexArray = btnEditItem.id;
  editItem(
    inputName.value,
    inputPriority.value,
    inputDate.value,
    inputTime.value,
    indexArray,
  );
  closeModal();
});

window.onload = () => {
  const dateNumber = document.getElementById('datenumber');
  const dateMonth = document.getElementById('datemonth');
  const dateYear = document.getElementById('dateyear');
  dateNumber.innerText = getDate('day');
  dateMonth.innerText = getDate('month');
  dateYear.innerText = getDate('year');
  render();
};
