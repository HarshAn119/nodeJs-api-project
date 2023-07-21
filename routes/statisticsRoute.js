const express = require('express');
const router = express.Router();
const { getCurrentMonthData } = require('../utils/getCurrentMonth');

const validMonths =
  /^(january|february|march|april|may|june|july|august|september|october|november|december)$/i;

router.get('/:month', (req, res) => {
  const currMonth = req.params.month.toLowerCase();
  if (!validMonths.test(currMonth)) {
    res.send({ error: 'not a valid month' });
    return;
  }
  const data = getCurrentMonthData(currMonth);
  let amount = 0;
  let numberOfSoldItems = 0;
  data.forEach((ele) => {
    if (ele.sold) {
      amount += ele.price;
      numberOfSoldItems++;
    }
  });
  res.send({
    amount,
    'number of sold items': numberOfSoldItems,
    'number of not sold': data.length - numberOfSoldItems,
  });
});

module.exports = router;
