import { saveDataLocalStorage } from './localStorageFeatures.js';
import { clearChilds } from './clearFunctionality.js';
import { renderItemsFromSearch } from './renderTemplate.js';
import { showModal } from './modalFeatures.js'

const itemsList = JSON.parse(localStorage.getItem('list')) || [];

const showModalEditItem = (indexArray) => {
  showModal('edit', indexArray, itemsList);
};

const createItem = (name, priority, reminderDate) => {
  const itemScafold = {
    name,
    priority,
    reminderDate,
    status: 'New',
  };

  itemsList.push(itemScafold);
  saveDataLocalStorage(itemsList);
};

const checkItem = (indexArray) => {
  itemsList[indexArray].status = 'Complete';
  localStorage.removeItem('list');
  saveDataLocalStorage(itemsList);
};

const deleteItem = (indexArray) => {
  itemsList.splice(indexArray, 1);
  saveDataLocalStorage(itemsList);
};

const editItem = (
  editedName,
  editedPriority,
  editedReminderDate,
  indexArray,
) => {
  const updatedDates = {
    name: editedName,
    priority: editedPriority,
    reminderDate: editedReminderDate,
    status: 'Updated',
  };

  itemsList.splice(indexArray, 1, updatedDates);
  localStorage.removeItem('list');
  saveDataLocalStorage(itemsList);
};

const searchItem = (search, filterSelected) => {
  clearChilds();
  let searchResults;
  switch (filterSelected) {
    case 'name':
      searchResults = itemsList.filter((item) => item.name === search);
      renderItemsFromSearch(searchResults);
      break;
    case 'priority':
      searchResults = itemsList.filter((item) => item.priority === search);
      renderItemsFromSearch(searchResults);
      break;
    case 'date':
      searchResults = itemsList.filter((item) => item.reminderDate >= search);
      renderItemsFromSearch(searchResults);
      break;
    case 'status':
      searchResults = itemsList.filter((item) => item.status === search);
      renderItemsFromSearch(searchResults);
      break;
    default:
      searchResults = itemsList.filter((item) => item.name === search);
      renderItemsFromSearch(searchResults);
      break;
  }
};

export {
  searchItem,
  deleteItem,
  editItem,
  createItem,
  checkItem,
  showModalEditItem,
};
