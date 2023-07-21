const collectionData = require('../data.json');

const monthIndex = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

const getCurrentMonthData = (currMonth) => {
  const data = [];
  collectionData.forEach((ele) => {
    const dateObject = new Date(ele.dateOfSale);
    const monthInd = dateObject?.getMonth();
    if (monthIndex[monthInd] === currMonth) {
      data.push(ele);
    }
  });
  return data;
};

module.exports = { getCurrentMonthData };
