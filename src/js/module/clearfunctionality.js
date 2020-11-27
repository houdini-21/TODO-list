const clearField = () => {
  const name = document.getElementById('inputname');
  const priority = document.getElementById('inputpriority');
  const reminderdate = document.getElementById('inputdate');

  name.value = '';
  priority.value = 0;
  reminderdate.value = '';
};

const clearChilds = () => {
  const tablebody = document.getElementById('tablebody');
  while (tablebody.firstChild) {
    tablebody.removeChild(tablebody.firstChild);
  }
};

export { clearField, clearChilds };
