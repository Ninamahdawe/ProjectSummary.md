// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


function renderLicenseBadge(license) {
    if (!license) {
        return "";
    } else {
        const badgeURLs = {
            MIT: "https://img.shields.io/badge/license-MIT-brightgreen.svg",
            "Apache2.0": "https://img.shields.io/badge/license-Apache%202.0-blue.svg",
            BSD2: "https://img.shields.io/badge/license-BSD%202--Clause-orange.svg",
            BSD3: "https://img.shields.io/badge/license-BSD%203--Clause-blue.svg",
        };

        returnbadgeURLs[license] || "";

    }
}


function renderLicenseLink(license) {
    // if (!license.length === 0) {
    if (license) {
        // Map license name to license URL
        const licenseURLs = {
            MIT: "https://opensource.org/licenses/MIT",
            "Apache2.0": "https://opensource.org/licenses/Apache-2.0",
            BSD2: "https://opensource.org/licenses/BSD-2-Clause",
            BSD3: "https://opensource.org/licenses/BSD-3-Clause",
        };
        return licenseURLs[license] || "";
    }
    return "";
    // }

}
function renderLicenseSection(license) {
    // if (!license.length === 0) {
    if (license) {
        return `[![license](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`;
    }
    return "";
}

// }

function generateMarkdown(data) {
    return `
# title  ${data.title}

## Description 
${data.description}
## License
${data.license}
## Require
${data.require}
## Usage
${data.usage}
## Purpose 
${data.purpose}
## Creator 
${data.creator}
## Name
${data.name}
## email 
<a herf = "mailto:${data.email}">${data.email}</a>

`;
}

module.exports = generateMarkdown;
