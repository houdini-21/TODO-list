import { clearChilds } from './clearFunctionality.js';
import { renderTemplateItem } from './renderTemplate.js';
import createIconBtnFunctionality from './generateFunctionalityIcons.js';
import getDate from './dateFeatures.js';
import { saveDataLocalStorage } from './localStorageFeatures.js';

let itemsList;

const render = () => {
  clearChilds();
  itemsList = JSON.parse(localStorage.getItem('list')) || [];
  itemsList.forEach((data) => {
    renderTemplateItem(data);
  });
  createIconBtnFunctionality();
    validateItemComplete();
};

const validateItemComplete = () => {
  const dateToday = getDate('fulldate');
  const timeToday = getDate('time');

  itemsList.forEach((data, indexArray) => {
    if (data.reminderDate === dateToday && data.reminderTime === timeToday) {
      const updatedDates = {
        name: data.name,
        priority: data.priority,
        reminderDate: data.reminderDate,
        reminderTime: data.reminderTime,
        status: 'Deferred',
      };

      itemsList.splice(indexArray, 1, updatedDates);
      localStorage.removeItem('list');
      saveDataLocalStorage(itemsList);
    }
  });
  setTimeout(() => {
    validateItemComplete();
  }, 6000);
};

export default render;
