import render from './renderfunctionality.js';

const saveDataLocalStorage = (data) => {
  localStorage.setItem('list', JSON.stringify(data));
  render();
};

const readDataLocalStorage = () => {
  const dataStorage = JSON.parse(localStorage.getItem('list'));
  return dataStorage;
};

const itemsList = JSON.parse(localStorage.getItem('list')) || [];

export { saveDataLocalStorage, readDataLocalStorage, itemsList };
