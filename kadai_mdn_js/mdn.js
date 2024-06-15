const today = new Date();
/*const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];*/

  const month = today.getMonth();
  const date = today.getDate();
  const year = today.getFullYear();

  console.log(year + '年' + (month + 1) + '月' + date + '日');
  