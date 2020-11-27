const addZero = (i) => {
  let number = i;
  if (number < 10) {
    number = `0${i}`;
  }
  return number;
};

const getdate = (option) => {
  const finalDate = new Date();

  if (option === 'day') {
    return finalDate.getDate();
  }

  if (option === 'month') {
    const namemonth = finalDate.toLocaleString('en', { month: 'long' });
    return namemonth;
  }

  if (option === 'year') {
    return finalDate.getFullYear();
  }

  if (option === 'fulldate') {
    let dd = finalDate.getDate();
    let mm = finalDate.getMonth() + 1;
    const yyyy = finalDate.getFullYear();
    dd = addZero(dd);
    mm = addZero(mm);

    return `${yyyy}-${mm}-${dd}`;
  }
  return false;
};

export default getdate;
