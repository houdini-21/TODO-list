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

const modaldiv = document.getElementById('modalcreate');

const showmodal = () => {
  modaldiv.classList.remove('noshow');
};

const closemodal = () => {
  modaldiv.classList.add('noshow');
};

const saveDataLocalStorage = (data) => {
  localStorage.setItem('list', JSON.stringify(data));
};

const readDataLocalStorage = () => {
  const dataStorage = JSON.parse(localStorage.getItem('list'));
  return dataStorage;
};

const itemsList = readDataLocalStorage() || [];

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
  if (searchresults.length === 0) {
    alert('We found nothing');
  } else {
    return searchresults;
  }
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



const btnsearch = document.getElementById('btnsearch');
const inputsearch = document.getElementById('inputsearch');
const btncreateitem = document.getElementById('btncreateitem');

const btnclosemodal = document.getElementById('btnclosemodal');
const inputname = document.getElementById('inputname');
const inputpriority = document.getElementById('inputpriority');
const inputdate = document.getElementById('inputdate');
const btncreate = document.getElementById('btncreate');

btnsearch.addEventListener('click', () => {
  if (inputsearch.value === '') {
    alert('Enter a search term');
  } else {
    searchItem(inputsearch.value);
  }
});

btncreateitem.addEventListener('click', () => {
  showmodal();
});

btnclosemodal.addEventListener('click', () => {
  closemodal();
});

btncreate.addEventListener('click', () => {
  if (
    inputname.value === ''
    || inputpriority.value === ''
    || inputdate.value === ''
  ) {
    alert('ningun campo puede quedar vacio');
  } else {
    createItem(inputname.value, inputpriority.value, inputdate.value);
    closemodal();
  }
});
