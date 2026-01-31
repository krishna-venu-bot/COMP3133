const fs = require('fs');
const csv = require('csv-parser');

const inputFile = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

// Delete files if they already exist
[canadaFile, usaFile].forEach(file => {
  if (fs.existsSync(file)) {
    fs.unlinkSync(file);
  }
});

// Write headers
fs.writeFileSync(canadaFile, 'country,year,population\n');
fs.writeFileSync(usaFile, 'country,year,population\n');

fs.createReadStream(inputFile)
  .pipe(csv())
  .on('data', (row) => {
    const line = `${row.country},${row.year},${row.population}\n`;

    if (row.country.toLowerCase() === 'canada') {
      fs.appendFileSync(canadaFile, line);
    }

    if (row.country.toLowerCase() === 'united states') {
      fs.appendFileSync(usaFile, line);
    }
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
