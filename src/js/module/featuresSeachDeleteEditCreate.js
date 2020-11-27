import { saveDataLocalStorage, itemsList } from './localstoragefeatures.js';
import { clearChilds } from './clearfunctionality.js';
import renderTemplateItem from './rendertemplate.js';

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
  let searchresults;
  switch (filterselected) {
    case 'name':
      searchresults = itemsList.filter((item) => item.name === search);
      break;
    case 'priority':
      searchresults = itemsList.filter((item) => item.priority === search);
      break;
    case 'date':
      searchresults = itemsList.filter((item) => item.date > search);
      break;
    case 'status':
      searchresults = itemsList.filter((item) => item.status === search);
      break;
    default:
      break;
  }

  if (searchresults.length === 0) {
    alert('We found nothing :(');
  } else {
    searchresults.forEach((data) => {
      clearChilds();
      renderTemplateItem(data);
    });
  }
};

export {
  searchItem, deleteItem, editItem, createItem,
};
