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

const addZero = (i) => {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
};

const modaldiv = document.getElementById('modalcreate');

const getdate = (option) => {
  const datef = new Date();

  if (option === 'day') {
    return datef.getDate();
  }

  if (option === 'month') {
    const namemonth = datef.toLocaleString('en', { month: 'long' });
    return namemonth;
  }

  if (option === 'year') {
    return datef.getFullYear();
  }

  if (option === 'fulldate') {
    let dd = datef.getDate() + 1;
    let mm = datef.getMonth() + 1;
    const yyyy = datef.getFullYear();
    dd = addZero(dd);
    mm = addZero(mm);

    return `${yyyy}-${mm}-${dd}`;
  }
};

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

const renderTemplateItem = (data) => {
  const templateitem = `
              <tr>
                <td>${data.name}</td>
                <td>${data.priority}</td>
                <td>${data.reminderDate}</td>
                <td>${data.status}</td>
                <td>
                  <div class="tableitem__options-icons">
                    <img
                      class="option-icons__icon"
                      src="./src/icons/edit.svg"
                      alt="edit"
                    />
                    <img
                      class="option-icons__icon"
                      src="./src/icons/delete.svg"
                      alt="delete"
                    />
                    <img
                      class="option-icons__icon"
                      src="./src/icons/circle.svg"
                      alt="uncheck"
                    />
                  </div>
                </td>
              </tr>
`;
  const tablebody = document.getElementById('tablebody');
  tablebody.insertAdjacentHTML('afterbegin', templateitem);
};

const datenumber = document.getElementById('datenumber');
const datemonth = document.getElementById('datemonth');
const dateyear = document.getElementById('dateyear');

window.onload = () => {
  datenumber.innerText = getdate('day');
  datemonth.innerText = getdate('month');
  dateyear.innerText = getdate('year');

  itemsList.forEach((data) => {
    renderTemplateItem(data);
  });
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
