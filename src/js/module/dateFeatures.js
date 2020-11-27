const addZero = (i) => {
  let number = i;
  if (number < 10) {
    number = `0${i}`;
  }
  return number;
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
  return false;
};

export default getdate;
