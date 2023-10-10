// function to generate markdown for README

function renderLicenseBadge (license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green)`
  } else {return ""};
}

function renderLicenseLink = (license) => {
  if(license !== "none") {
    return `\n* [License](#license)\n`
}
return ""};

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}`;
};

    ### Description

    ${data.description}

    ### Table of Contents

*[Installation](#installation)

*[Usage](#usage)

${renderLicenseLink(data.license)}


*[Contribute](#contribute)
*[Test](#test)
*[License](#license)



module.exports = generateMarkdown;
