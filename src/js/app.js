import render from './module/renderfunctionality.js';
import getdate from './module/dateFeatures.js';
import {
  searchItem,
  createItem,
  editItem,
} from './module/featuresSeachDeleteEditCreate.js';
import { closemodal, showmodal } from './module/modalfeatures.js';

const btnsearch = document.getElementById('btnsearch');
const inputsearch = document.getElementById('inputsearch');
const btncreateitem = document.getElementById('btncreateitem');
const btnclosemodal = document.getElementById('btnclosemodal');
const inputname = document.getElementById('inputname');
const inputpriority = document.getElementById('inputpriority');
const inputdate = document.getElementById('inputdate');
const btncreate = document.getElementById('btncreate');
const btnedititem = document.querySelector('.card__btnedititem');
const filterselect = document.getElementById('filter')

btnsearch.addEventListener('click', () => {
  if (inputsearch.value === '') {
    render();
    alert('Enter a search term!!!!');
  } else {
    searchItem(inputsearch.value, filterselect.value);
  }
});

btncreateitem.addEventListener('click', () => {
  inputdate.min = getdate('fulldate');
  inputdate.value = getdate('fulldate');
  showmodal();
});

btnclosemodal.addEventListener('click', () => {
  closemodal();
});

btncreate.addEventListener('click', () => {
  if (
    inputname.value === ''
    || inputpriority.value === '0'
    || inputdate.value === ''
  ) {
    alert('ningun campo puede quedar vacio');
  } else {
    createItem(inputname.value, inputpriority.value, inputdate.value);
    closemodal();
  }
});

btnedititem.addEventListener('click', () => {
  const indexArray = btnedititem.id;
  editItem(inputname.value, inputpriority.value, inputdate.value, indexArray);
  closemodal();
});

window.onload = () => {
  const datenumber = document.getElementById('datenumber');
  const datemonth = document.getElementById('datemonth');
  const dateyear = document.getElementById('dateyear');
  datenumber.innerText = getdate('day');
  datemonth.innerText = getdate('month');
  dateyear.innerText = getdate('year');
  render();
};
