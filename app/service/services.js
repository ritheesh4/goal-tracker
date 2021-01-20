const fs = require('fs');
/**
 * A helper function to create csv file
 * @function createFile
 * @param {string} path - file path with filename
 * @returns {undefined}
 */
function createFile(path) {
  fs.writeFileSync(path, 'DATE, GOAL, TIME, STATUS, LANGUAGE, LOC');
  console.log('completd');
}

/**
 * A helper function to append lines to the csv file.
 * @function appendToFile
 * @param {string} filepath - relative filepath
 * @param {object} data - data to be written.
 * @returns {undefined}
 */

function appendToFile(filePath, data) {
  let fileText = '\n';
  const values = Object.values(data);
  values.forEach((value) => {
    fileText += `"${value}",`;
  });

  fs.appendFileSync(filePath, fileText, { encoding: 'utf8' });
}

// appendToFile(filePathz, dataz);

/**
 * A helper function to get date in yyyymmdd format
 * @function getDate
 * @returns {string}
 */
function getDate() {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = `-0${month}-`;
  if (day.length < 2) day = `0${day}`;

  return [year, month, day].join('');
}

/**
 * Helper function to handle logs on console
 * @function initiateLog
 * @returns {object}
 */

module.exports = {
  appendToFile,
  createFile,
  getDate,
};

// const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// const csvWriter = createCsvWriter({
//   path: 'out.csv',
//   header: [
//     { id: 'name', title: 'Name' },
//     { id: 'surname', title: 'Surname' },
//     { id: 'age', title: 'Age' },
//     { id: 'gender', title: 'Gender' },
//   ],
// });

// const data = [
//   {
//     name: 'John',
//     surname: 'Snow',
//     age: 26,
//     gender: 'M',
//   },
//   {
//     name: 'Clair',
//     surname: 'White',
//     age: 33,
//     gender: 'F',
//   },
//   {
//     name: 'Fancy',
//     surname: 'Brown',
//     age: 78,
//     gender: 'F',
//   },
// ];

// const writeFile = () => {
//   return csvWriter
//     .writeRecords(data)
//     .then(() => console.log('The CSV file was written successfully'))
//     .catch((err) => console.log(err));
// };

// export default writeFile;
