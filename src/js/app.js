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

const btnsearch = document.getElementById('btnsearch');
const inputsearch = document.getElementById('inputsearch');
const btncreateitem = document.getElementById('btncreateitem');

const btnclosemodal = document.getElementById('btnclosemodal');
const inputname = document.getElementById('inputname');
const inputpriority = document.getElementById('inputpriority');
const inputdate = document.getElementById('inputdate');
const btncreate = document.getElementById('btncreate');
const btnedititem = document.querySelector('.card__btnedititem');

inputname.value = 'hi';

const addZero = (i) => {
  if (i < 10) {
    i = `0${i}`;
  }
  return i;
};

const modaldiv = document.getElementById('modalcreate');

const clearChilds = () => {
  const tablebody = document.getElementById('tablebody');
  while (tablebody.firstChild) {
    tablebody.removeChild(tablebody.firstChild);
  }
};

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
    let dd = datef.getDate();
    let mm = datef.getMonth() + 1;
    const yyyy = datef.getFullYear();
    dd = addZero(dd);
    mm = addZero(mm);

    return `${yyyy}-${mm}-${dd}`;
  }
};

const closemodal = () => {
  modaldiv.classList.add('noshow');
  clearField();
};

const saveDataLocalStorage = (data) => {
  localStorage.setItem('list', JSON.stringify(data));
  render();
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
    status: 'Edited',
  };
  itemsList.splice(indexArray, 1, updateddates);
  localStorage.removeItem('list');
  saveDataLocalStorage(itemsList);
};

const clearField = () => {
  inputname.value = '';
  inputpriority.value = 0;
  inputdate.value = '';
};

btnedititem.addEventListener('click', () => {
  const indexArray = btnedititem.id;
  editItem(inputname.value, inputpriority.value, inputdate.value, indexArray);
  closemodal();
});

const showmodal = (type, indexArray) => {
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
    console.log('friend!');
  }
};

const renderTemplateItem = (data) => {
  const templateitem = `
              <tr class="itemchild">
                <td>${data.name}</td>
                <td>${data.priority}</td>
                <td>${data.reminderDate}</td>
                <td>${data.status}</td>
                <td>
                  <div class="tableitem__options-icons">
                    <img
                      class="option-icons__icon editicon"
                      src="./src/icons/edit.svg"
                      alt="edit"
                    />
                    <img
                      class="option-icons__icon deleteicon"
                      src="./src/icons/delete.svg"
                      alt="delete"
                    />
                    <img
                      class="option-icons__icon checkicon"
                      src="./src/icons/circle.svg"
                      alt="uncheck"
                    />
                  </div>
                </td>
              </tr>
`;
  const tablebody = document.getElementById('tablebody');
  tablebody.insertAdjacentHTML('beforeend', templateitem);
};

const searchItem = (search) => {
  const searchresults = [];
  for (let i = 0; i < itemsList.length; i++) {
    if (itemsList[i].name === search) {
      searchresults.push(itemsList[i]);
    }
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

const createiconbtnfunctionality = () => {
  const iconedit = document.querySelectorAll('.editicon');
  const icondelete = document.querySelectorAll('.deleteicon');
  const iconcheck = document.querySelectorAll('.checkicon');

  iconedit.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      showmodal('edit', indexArray);
    });
  });

  icondelete.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      console.log('eliminando');
      deleteItem(indexArray);
    });
  });

  iconcheck.forEach((btn, indexArray) => {
    btn.addEventListener('click', () => {
      if (iconcheck[indexArray].src.match('./src/icons/circle.svg')) {
        iconcheck[indexArray].src = './src/icons/complete.svg';
      } else {
        iconcheck[indexArray].src = './src/icons/circle.svg';
      }
    });
  });
};
const render = () => {
  clearChilds();
  itemsList.forEach((data) => {
    renderTemplateItem(data);
  });
  createiconbtnfunctionality();
};

const datenumber = document.getElementById('datenumber');
const datemonth = document.getElementById('datemonth');
const dateyear = document.getElementById('dateyear');

window.onload = () => {
  datenumber.innerText = getdate('day');
  datemonth.innerText = getdate('month');
  dateyear.innerText = getdate('year');

  render();
};

btnsearch.addEventListener('click', () => {
  if (inputsearch.value === '') {
    render();
    alert('Enter a search term!!!!');
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
