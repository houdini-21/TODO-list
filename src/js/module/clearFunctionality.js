const clearField = () => {
  const name = document.getElementById('inputname');
  const priority = document.getElementById('inputpriority');
  const reminderDate = document.getElementById('inputdate');

  name.value = '';
  priority.value = 0;
  reminderDate.value = '';
};

const clearChilds = () => {
  const tableBody = document.getElementById('tablebody');
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
};

export { clearField, clearChilds };
