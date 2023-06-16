// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![](https://img.shields.io/badge/LICENSE-${license}-red)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT") {
    return "https://opensource.org/license/mit/"
  } else if (license == "Apache") {
    return "https://opensource.org/license/apache-2-0/"
  } else if (license == "Mozilla") {
    return "https://opensource.org/license/mpl-2-0/"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  ${license}
  ${renderLicenseLink(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}

${renderLicenseBadge(answers.license)}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contribution
${answers.contribution}

## Test
${answers.test}

## Questions
${answers.github}
${answers.email}

${renderLicenseSection(answers.license)}`;
}

module.exports = generateMarkdown;
