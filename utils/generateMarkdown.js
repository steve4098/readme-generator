// function to generate markdown for README

function renderLicenseBadge (license) {
  if (license !== "none") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-green)`
  } else {return ""};
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

`;
}

module.exports = generateMarkdown;
