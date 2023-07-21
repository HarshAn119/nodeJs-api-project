const asyncHandler = require('express-async-handler');
const fs = require('fs');

function storeLocally(data) {
  try {
    const jsonData = JSON.stringify(data);
    const filePath = './data.json';
    fs.writeFileSync(filePath, jsonData);

    console.log('Data stored locally successfully.');
  } catch (error) {
    console.error('Error while storing data locally:', error);
  }
}

const getData = asyncHandler(async (req, res) => {
  const response = await fetch(
    'https://s3.amazonaws.com/roxiler.com/product_transaction.json'
  );
  const data = await response.json();
  storeLocally(data);
  res.send(data);
});

module.exports = { getData };
