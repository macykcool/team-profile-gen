// html components and css from materialize

//manager card
const manager = managerData => {
   return ` 
    <div class="col s12 m6 l3">
      <div class="card small pink darken-2">
        <div class="card-content white-text">
          <span class="card-title">${managerData.getRole()}</span>
          <h4>${managerData.getName()}</h4>
          <p>ID: ${managerData.getId()}</p>
          <p>Office Number: ${managerData.getOfficeNumber()}</p>
        </div>
        <div class="card-action">
          <a href="mailto:${managerData.getEmail()}">${managerData.getEmail()}</a>
        </div>
      </div>
    </div>
  
    `
};

//engineer card
const engineer = engineerData => {
  return  `  
    <div class="col s12 m6 l3">
      <div class="card small green darken-2">
        <div class="card-content white-text">
          <span class="card-title">${engineerData.getRole()}</span>
          <h4>${engineerData.getName()}</h4>
          <p>ID: ${engineerData.getId()}</p>
        </div>
        <div class="card-action">
        <a href="mailto:${engineerData.getEmail()}">${engineerData.getEmail()}</a>
        <a href="https://www.github.com/${engineerData.getGithub()}" target="_blank">www.github.com/${engineerData.getGithub()}</a>
        </div>
      </div>
    </div>

    `
};

//intern card
const intern = internData => {
  return  ` 
    <div class="col s12 m6 l3">
      <div class="card small indigo darken-1">
        <div class="card-content white-text">
          <span class="card-title">${internData.getRole()}</span>
          <h4>${internData.getName()}</h4>
          <p>ID: ${internData.getId()}</p>
          <p>School: ${internData.getSchool()} </p>
        </div>
        <div class="card-action">
        <a href="mailto:${internData.getEmail()}">${internData.getEmail()}</a>
        </div>
      </div>
    </div>
  
    `
}; 

//reads employee array and puts cards together
const employeeCards = employeeArr => {
    let buildTeam = ''
    for (let i = 0; i < employeeArr.length; i++ ) {
        if (employeeArr[i].getRole() === "Manager"){
            buildTeam = buildTeam + manager(employeeArr[i])
        }
        if (employeeArr[i].getRole() === "Engineer"){
            buildTeam = buildTeam + engineer(employeeArr[i])
        }
        if (employeeArr[i].getRole() === "Intern"){
            buildTeam = buildTeam + intern(employeeArr[i])
        }
    } return buildTeam
}


// base html + all cards
const template = data => {
    return `
    <html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
  <title>Team Profile Generator</title>
</head>
<body>
  <header>
  <nav class="nav-extended">
    
  <div class="nav-content orange darken-1" style="text-align:center;">
    <span class="nav-title">Team Profile</span>

  </div>
  </nav>
  </header>
  <main>
  <div class="row">
  ${employeeCards(data)}
  </div>
  </main>
  <footer>
  </footer>
  <script src="scripts.js"></script>
</body>
</html>
    `
};



module.exports = template;