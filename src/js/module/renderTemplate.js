const verifiedItemStatus = (status) => {
  if (status === 'Complete') {
    return './src/icons/complete.svg';
  }
  return './src/icons/circle.svg';
};

const renderTemplateItem = (data) => {
  const templateItem = `
              <tr class="itemchild">
                <td>${data.name}</td>
                <td class="${data.priority}">${data.priority}</td>
                <td>${data.reminderDate}</td>
                <td>${data.reminderTime}</td>
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
                      src="${verifiedItemStatus(data.status)}"
                      alt="uncheck"
                    />
                  </div>
                </td>
              </tr>
`;
  const tableBody = document.getElementById('tablebody');
  tableBody.insertAdjacentHTML('beforeend', templateItem);
};

const renderItemsFromSearch = (searchResults) => {
  if (searchResults.length === 0) {
    alert('We found nothing :(');
  } else {
    searchResults.forEach((data) => {
      renderTemplateItem(data);
    });
  }
};

export { renderTemplateItem, renderItemsFromSearch };
