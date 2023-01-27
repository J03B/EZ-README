// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
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

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
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

function markdownBadge(license) {
  return `[![License${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const allLicenses = ['Apache 2.0','Boost','BSD','Eclipse','IBM Public','ISC','MIT','Mozilla Public','Perl','Artistic 2.0','SIL Open Front','Unlicense','WTF Public'];
  if (license in allLicenses) {
    return `## License
    
    ${markdownBadge(license)}
    This project is licensed under the ${license} license.`;
  }
  else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${markdownBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Credits](#Credits)
  - [License](#License)
  - [Testing](#Testing)
  - [Questions](#Questions)

  ## Installation

  ${data.installInstruct}

  ## Usage

  ${data.useCase}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Testing

  ${data.testingInstruct}

  ## Questions

  If you have any questions, reach out through either of the methods below:
  [GitHub - ${data.gitHubID}](https://github.com/${data.gitHubID}/)
  [email - (${data.email})](mailto:${data.email})
`;
}

module.exports = generateMarkdown;
