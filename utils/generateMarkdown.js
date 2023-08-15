
function renderLicenseBadge(license) {
    // if (!license) {
    //     return "";
    // } else {
    const badgeURLs = {
        'MIT': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        'Apache': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        'BSD-2-Clause': '[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
        'ISC': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        'None': 'No License',

    };

    return badgeURLs[license] || "";

}
// }


function renderLicenseLink(license) {
    const licenseURLs = {
        'MIT': 'https://opensource.org/licenses/MIT',
        'Apache': 'https://opensource.org/licenses/Apache-2.0',
        'BSD-2-Clause': 'https://opensource.org/licenses/BSD-2-Clause',
        'ISC': 'https://opensource.org/licenses/ISC',
    };
    return licenseURLs[license] || "";
}

function renderLicenseSection(license) {
    if (license) {
        return `${renderLicenseBadge(license)}\n[License Details](${renderLicenseLink(license)})\n\n`;
    }
    return "";
}

function generateMarkdown(data) {
    return `
# Title  
${data.title}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Require](#require)
- [Purpose](#purpose)
- [Creator](#creator)

## Description 
${data.description}

## License
${renderLicenseSection(data.license)}
## Require
${data.require}
## Usage
${data.usage}
## Installation
${data.installation}
## Purpose 
${data.purpose}
## Creator 
${data.creator}
## Name
${data.name}
## Email 
<a herf = "mailto:${data.email}">${data.email}</a>

`;
}

module.exports = generateMarkdown;
