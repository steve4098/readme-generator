// function to generate markdown for README

function renderLicenseBadge (license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green)`
  } else {return ""};
}

const renderLicenseLink = (license) => {
  if(license !== "none") {
    return `[License](#license)\n`
}
return ""};

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.projectName}
  ${renderLicenseBadge(data.license)}




  ### Description

  ${data.description}



  ### Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * ${renderLicenseLink(data.license)}

 * [Contribute](#contribute)

 * [Test](#test)

 * [Issues](#issues)

  ## Installation


  To install necessary dependencies, run the following command:

  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage

  \`\`\`
  ${data.usage}
  \`\`\`

  ## License

  This project uses the following license:

  \`\`\`
  ${data.license}
  \`\`\`

  ## Contribute

  If you wish to contribute to this project, follow this procedure:

  \`\`\`
  ${data.contribute}
  \`\`\`

  ## Test

  To run a test, follow these instructions:

  \`\`\`
  ${data.test}
  \`\`\`

  ## Issues

  To report any issues, follow these steps:
 
  \`\`\`
  ${data.issues}
  \`\`\`

 #### You can find more of my work at: [${data.github}](https://github.com/${data.github})

`}
  module.exports = generateMarkdown;
  