import { clearField } from './clearfunctionality.js';
import getdate from './dateFeatures.js';

const modaldiv = document.getElementById('modalcreate');
const inputname = document.getElementById('inputname');
const inputpriority = document.getElementById('inputpriority');
const inputdate = document.getElementById('inputdate');
const btncreate = document.getElementById('btncreate');
const btnedititem = document.querySelector('.card__btnedititem');

const closemodal = () => {
  modaldiv.classList.add('noshow');
  clearField();
};

const showmodal = (type, indexArray, itemsList) => {
  modaldiv.classList.remove('noshow');
  inputdate.min = getdate('fulldate');
  inputdate.value = getdate('fulldate');
  if (type === 'edit') {
    btncreate.classList.add('noshow');
    btnedititem.classList.remove('noshow');
    inputname.value = itemsList[indexArray].name;
    inputpriority.value = itemsList[indexArray].priority;
    inputdate.value = itemsList[indexArray].reminderDate;
    btnedititem.id = indexArray;
  } else {
    btncreate.classList.remove('noshow');
    btnedititem.classList.add('noshow');
  }

  const datenumber = document.getElementById('datenumber');
  const datemonth = document.getElementById('datemonth');
  const dateyear = document.getElementById('dateyear');
  datenumber.innerText = getdate('day');
  datemonth.innerText = getdate('month');
  dateyear.innerText = getdate('year');
};

export { modaldiv, closemodal, showmodal };
