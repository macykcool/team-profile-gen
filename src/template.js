// html will go here and css maybe from css kit 

const manager = managerData => {
    `  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${managerData.getRole()}</span>
          <h2>${managerData.getName()}</h2>
          <p>ID: ${managerData.getId()}</p>
          <p>Office Number: ${managerData.getOfficeNumber()}</p>
          
        </div>
        <div class="card-action">
          Email: <a href="mailto:${managerData.getEmail()}"${managerData.getEmail()}</a>
        </div>
      </div>
    </div>
  </div>
    `
};


const engineer = engineerData => {
    `  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${engineerData.getRole()}</span>
          <h2>${engineerData.getName()}</h2>
          <p>ID: ${engineerData.getId()}</p>
          <p>Github:
          <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a></p>
        </div>
        <div class="card-action">
        Email: <a href="mailto:${engineerData.getEmail()}"${engineerData.getEmail()}</a>
        </div>
      </div>
    </div>
  </div>
    `
};

const intern = internData => {
    `  <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">${internData.getRole()}</span>
          <h2>${internData.getName()}</h2>
          <p>ID: ${internData.getId()}</p>
          <p>School: ${internData.getSchool()} </p>
        </div>
        <div class="card-action">
        Email: <a href="mailto:${internData.getEmail()}"${internData.getEmail()}</a>
        </div>
      </div>
    </div>
  </div>
    `
}; 

const employee


// const html
const template = data => {
    return `
    <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  //materialize for css
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <link rel="stylesheet" href="./style.css"><source src="../template.js" type="template">
  <title>Team Profile Generator</title>
</head>
<body>
  <header>
  <h1>TEAM</h1>
  </header>
  <main>
  </main>
  <footer>
  </footer>
  <script src="scripts.js"></script>
</body>
</html>
    `
};



module.exports = template;