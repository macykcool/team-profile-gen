const fs = require('fs');

const generateHTML = fileContent => {
        fs.generateHTML('./dist/index.html', fileContent, err => {
            if (err) {
                console.log(err);
            } else {
            console.log('Team Profile Generated!')
            }
            
        });
  };


//   // potentially add css here const copy file 


  module.exports = generateHTML;