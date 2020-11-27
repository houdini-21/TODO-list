const verifieditemstatus = (status) => {
  if (status === 'Complete!') {
    return './src/icons/complete.svg';
  }
  return './src/icons/circle.svg';
};

const renderTemplateItem = (data) => {
  const templateitem = `
              <tr class="itemchild">
                <td>${data.name}</td>
                <td class="${data.priority}">${data.priority}</td>
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
                      src="${verifieditemstatus(data.status)}"
                      alt="uncheck"
                    />
                  </div>
                </td>
              </tr>
`;
  const tablebody = document.getElementById('tablebody');
  tablebody.insertAdjacentHTML('beforeend', templateitem);
};

export default renderTemplateItem;
