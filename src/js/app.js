// Create a TODO List app using javascript main concepts.
//  >-Each item should have a name, priority, reminder date, status.
//  -Each item must be emphasized by priority,
//  -The list should allow filtering, search and sort items.
// Have to:
// >-List items.
// >-Add a new item.
// >-New items have a “new” status.
// -Reminder date can’t be less than the current date.
// -Complete items have “complete” status.
// >-Delete an Item
// >-Save items to localstorage.
//
// Bonus:
// -Update an Item
// -Show a count down to the item.
// -Add “deferred” and “updated” status.
// -Show notification when time is reached.

const saveDataLocalStorage = (data) => {
  localStorage.setItem('list', JSON.stringify(data));
};

const readDataLocalStorage = () => {
  const dataStorage = JSON.parse(localStorage.getItem('list'));
  return dataStorage;
};

window.onload = () => {
  const itemsList = readDataLocalStorage() || [];
};

const createItem = (name, priority, reminderDate, status) => {
  const itemScafold = {
    name,
    priority,
    reminderDate,
    status,
  };
  itemsList.push(itemScafold);
  saveDataLocalStorage(itemsList);
};

const deleteItem = (indexArray) => {
  itemsList.splice(indexArray, 1);
};

const searchItem = (search) => {
  const searchresults = [];
  for (let i = 0; i < itemsList.length; i++) {
    if (itemsList[i].name === search) {
      searchresults.push(itemsList[i]);
    }
  }
  return searchresults;
};

const editItem = (
  editedName,
  editedPriority,
  editedReminderDate,
  editedStatus,
  indexArray,
) => {
  itemsList[indexArray].name = editedName;
  itemsList[indexArray].priority = editedPriority;
  itemsList[indexArray].reminderDate = editedReminderDate;
  itemsList[indexArray].status = editedStatus;
  localStorage.removeItem('list');
  saveDataLocalStorage(itemsList);
};

// const itemnew = createItem('dance', 'high', '12-11-29', 'new');
// const itemnew2 = createItem('learn', 'medium', '12-11-21', 'new');
// const edititem = editItem('dance', 'low', '21-11-30', 'new', 0);
// const search = searchItem('dance');
// console.log(search);
