import { saveDataLocalStorage, itemsList } from './localstoragefeatures.js';
import { clearChilds } from './clearfunctionality.js';
import { renderItemsFromSearch } from './rendertemplate.js';

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
  itemsList[indexArray].status = 'Complete!';
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
  const updateddates = {
    name: editedName,
    priority: editedPriority,
    reminderDate: editedReminderDate,
    status: 'Updated',
  };

  itemsList.splice(indexArray, 1, updateddates);
  localStorage.removeItem('list');
  saveDataLocalStorage(itemsList);
};

const searchItem = (search, filterselected) => {
  clearChilds();
  let searchresults;
  switch (filterselected) {
    case 'name':
      searchresults = itemsList.filter((item) => item.name === search);
      renderItemsFromSearch(searchresults);
      break;
    case 'priority':
      searchresults = itemsList.filter((item) => item.priority === search);
      renderItemsFromSearch(searchresults);
      break;
    case 'date':
      searchresults = itemsList.filter((item) => item.reminderDate >= search);
      renderItemsFromSearch(searchresults);
      break;
    case 'status':
      searchresults = itemsList.filter((item) => item.status === search);
      renderItemsFromSearch(searchresults);
      break;
    default:
      searchresults = itemsList.filter((item) => item.name === search);
      renderItemsFromSearch(searchresults);
      break;
  }
};

export {
  searchItem, deleteItem, editItem, createItem, checkItem,
};
