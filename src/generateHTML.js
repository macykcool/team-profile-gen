const fs = require('fs');

const writeFile = fileContent => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                console.log(err);
            } else {
            console.log('Team Profile Generated!')
            }
            
        });
  };



  module.exports = writeFile;

  //this file generates and lands file in the dist folder