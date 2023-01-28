// Const of all possible licenses
const allLicenses = ['Apache 2.0','Boost','BSD','Eclipse','IBM Public','ISC','MIT','Mozilla Public','Perl','Artistic 2.0','SIL Open Front','Unlicense','WTF Public'];

// Function that returns a license badge based on which license is passed in
// If there is no license, an empty string is ultimately returned in .md
function renderLicenseBadge(license) {
  if (license == 'Apache 2.0') {
    return "](https://img.shields.io/badge/License-Apache_2.0-blue.svg";
  }
  else if (license == 'Boost') {
    return "](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
  }
  else if (license == 'BSD') {
    return "](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg";
  }
  else if (license == 'Eclipse') {
    return "](https://img.shields.io/badge/License-EPL_1.0-red.svg";
  }
  else if (license == 'IBM Public') {
    return ": IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg";
  }
  else if (license == 'ISC') {
    return ": ISC](https://img.shields.io/badge/License-ISC-blue.svg";
  }
  else if (license == 'MIT') {
    return ": MIT](https://img.shields.io/badge/License-MIT-yellow.svg";
  }
  else if (license == 'Mozilla Public') {
    return ": MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg";
  }
  else if (license == 'Perl') {
    return ": Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg";
  }
  else if (license == 'Artistic 2.0') {
    return ": Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg";
  }
  else if (license == 'SIL Open Front') {
    return ": Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg";
  }
  else if (license == 'Unlicense') {
    return ": Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg";
  }
  else {
    return ": WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg";
  }
}

// Function that returns the license link
// If there is no license, an empty string is ultimately returned in .md
function renderLicenseLink(license) {
  if (license == 'Apache 2.0') {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  else if (license == 'Boost') {
    return "https://www.boost.org/LICENSE_1_0.txt";
  }
  else if (license == 'BSD') {
    return "https://opensource.org/licenses/BSD-3-Clause";
  }
  else if (license == 'Eclipse') {
    return "https://opensource.org/licenses/EPL-1.0";
  }
  else if (license == 'IBM Public') {
    return "https://opensource.org/licenses/IPL-1.0";
  }
  else if (license == 'ISC') {
    return "https://opensource.org/licenses/ISC";
  }
  else if (license == 'MIT') {
    return "https://opensource.org/licenses/MIT";
  }
  else if (license == 'Mozilla Public') {
    return "https://opensource.org/licenses/MPL-2.0";
  }
  else if (license == 'Perl') {
    return "https://opensource.org/licenses/Artistic-2.0";
  }
  else if (license == 'Artistic 2.0') {
    return "https://opensource.org/licenses/Artistic-2.0";
  }
  else if (license == 'SIL Open Front') {
    return "https://opensource.org/licenses/OFL-1.1";
  }
  else if (license == 'Unlicense') {
    return "http://unlicense.org/";
  }
  else {
    return "http://www.wtfpl.net/about/";
  }
}

// Function to compile the license badge and link
function markdownBadge(license) {
  if (allLicenses.includes(license)) {
    return `[![License${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
  }
  else {
    return '';
  }
}

// Function that returns the written license section of README
// If there is no license, returns an empty string
function renderLicenseSection(license) {
  if (allLicenses.includes(license)) {
    return `## License\n\n${markdownBadge(license)}\n\nThis project is licensed under the ${license} license.`;
  }
  else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${markdownBadge(data.license)}

## Description

${data.description}

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.installInstruct}

## Usage

${data.useCase}

${renderLicenseSection(data.license)}

## Contributing

${data.credits}

## Tests

${data.testingInstruct}

## Questions

If you have any questions, reach out to me through either of the methods below:
- [GitHub - ${data.gitHubID}](https://github.com/${data.gitHubID}/)
- [email - (${data.email})](mailto:${data.email})
`;
}

// Export the function so index.js can use it as a require
module.exports = generateMarkdown;