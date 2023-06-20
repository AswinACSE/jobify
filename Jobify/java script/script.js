const jobRoles = {
    programming: ["Software Developer", "Web Developer", "Data Analyst"],
    design: ["Graphic Designer", "UI/UX Designer", "Product Designer"],
    marketing: ["Digital Marketing Specialist", "Brand Manager", "Social Media Manager"],
    business: ["Business Analyst", "Project Manager", "Management Consultant"]
  };
  
  const companies = {
    "Software Developer": ["Google", "Microsoft", "Amazon"],
    "Web Developer": ["Facebook", "Twitter", "LinkedIn"],
    "Data Analyst": ["IBM", "Oracle", "SAP"],
    "Graphic Designer": ["Apple", "Adobe", "Autodesk"],
    "UI/UX Designer": ["Uber", "Airbnb", "Netflix"],
    "Product Designer": ["Samsung", "LG", "Sony"],
    "Digital Marketing Specialist": ["Coca-Cola", "PepsiCo", "Nike"],
    "Brand Manager": ["Procter & Gamble", "Unilever", "Nestle"],
    "Social Media Manager": ["Red Bull", "GoPro", "Dove"],
    "Business Analyst": ["McKinsey", "BCG", "Bain"],
    "Project Manager": ["GE", "Siemens", "Toyota"],
    "Management Consultant": ["Deloitte", "PwC", "EY"]
  };
  
  function suggestJobs() {
    let skills = document.querySelectorAll('input[type="checkbox"]:checked');
    let selectedSkills = [];
    let jobRolesList = [];
  
    for (let i = 0; i < skills.length; i++) {
      selectedSkills.push(skills[i].value);
    }
  
    for (let i = 0; i < selectedSkills.length; i++) {
      jobRolesList = jobRolesList.concat(jobRoles[selectedSkills[i]]);
    }
  
    jobRolesList = [...new Set(jobRolesList)]; // remove duplicates
  
    let companiesList = [];
  
    for (let i = 0; i < jobRolesList.length; i++) {
      companiesList = companiesList.concat(companies[jobRolesList[i]]);
    }
  
    companiesList = [...new Set(companiesList)]; // remove duplicates
  
    let jobRolesDiv = document.getElementById("job-roles");
    jobRolesDiv.innerHTML = "";
  
    if (jobRolesList.length > 0) {
      let jobRolesHeader = document.createElement("h2");
      jobRolesHeader.innerText = "Suggested Job Roles:";
      jobRolesDiv.appendChild(jobRolesHeader);
  
      let jobRolesListUL = document.createElement("ul");
      for (let i = 0; i < jobRolesList.length; i++) {
        let jobRoleItem = document.createElement("li");
        jobRoleItem.innerText = jobRolesList[i];
        jobRolesListUL.appendChild(jobRoleItem);
      }
      jobRolesDiv.appendChild(jobRolesListUL);
    }
  
    let companiesDiv = document.getElementById("companies");
    companiesDiv.innerHTML = "";
  
    if (companiesList.length > 0) {
      let companiesHeader = document.createElement("h2");
      companiesHeader.innerText = "Suggested Companies:";
      companiesDiv.appendChild(companiesHeader);
  
      let companiesListUL = document.createElement("ul");
      for (let i = 0; i < companiesList.length; i++) {
        let companyItem = document.createElement("li");
        companyItem.innerText = companiesList[i];
        companiesListUL.appendChild(companyItem);
      }
      companiesDiv.appendChild(companiesListUL);
    }
  }