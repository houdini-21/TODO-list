import { clearField } from './clearFunctionality.js';
import getDate from './dateFeatures.js';

const modalDiv = document.getElementById('modalcreate');
const inputName = document.getElementById('inputname');
const inputPriority = document.getElementById('inputpriority');
const inputDate = document.getElementById('inputdate');
const inputTime = document.getElementById('inputtime');
const btnCreate = document.getElementById('btncreate');
const btnEditItem = document.querySelector('.card__btnedititem');

const closeModal = () => {
  modalDiv.classList.add('noshow');
  clearField();
};

const showModal = (type, indexArray, itemsList) => {
  modalDiv.classList.remove('noshow');
  inputDate.min = getDate('fulldate');
  inputDate.value = getDate('fulldate');
  if (type === 'edit') {
    btnCreate.classList.add('noshow');
    btnEditItem.classList.remove('noshow');
    inputName.value = itemsList[indexArray].name;
    inputPriority.value = itemsList[indexArray].priority;
    inputTime.value = itemsList[indexArray].reminderTime;
    inputDate.value = itemsList[indexArray].reminderDate;
    btnEditItem.id = indexArray;
  } else {
    btnCreate.classList.remove('noshow');
    btnEditItem.classList.add('noshow');
  }

  const dateNumber = document.getElementById('datenumber');
  const dateMonth = document.getElementById('datemonth');
  const dateYear = document.getElementById('dateyear');
  dateNumber.innerText = getDate('day');
  dateMonth.innerText = getDate('month');
  dateYear.innerText = getDate('year');
};

export { modalDiv, closeModal, showModal };
