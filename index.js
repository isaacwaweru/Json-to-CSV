const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const parseJson = require('parse-json');
const fs = require('fs')
//let's 
let innovations;
 function readJson () {
    fs.readFile('./innovations.json', 'utf8', (err, jsonString) => {
        if (err) {
            return err
        }else{
          const csvWriter = createCsvWriter({
            path: 'innovations.csv',
            header: [
              {id: 'title', title: 'Title'},
              {id: 'category', title: 'Category'},
              {id: 'problem', title: 'Problem'},
              {id: 'proposedsolution', title: 'Proposed Solution'},
              {id: 'status', title: 'Status'},
            ]
          });
          innovations = JSON.parse(jsonString)

          
        csvWriter
        .writeRecords(innovations)
        .then(()=> console.log('The CSV file was written successfully'));
                }
            });
}

 readJson()

