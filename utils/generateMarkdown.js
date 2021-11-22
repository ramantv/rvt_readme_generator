const generateList = (commalist) => {
  listarray = commalist.split(",");
  listarray = listarray.map((listitem) => "* " + listitem);
  return listarray.join("  \n");
};

const generatebadges = (BadgeArr) => {
  BadgeArr = BadgeArr.map((itemBadge) => {
    if (itemBadge !== "None") {
      return (
        "![License](https://img.shields.io/static/v1?label=License&message=" +
        itemBadge +
        "&color=BLUE)"
      );
    }
  });
  return BadgeArr.join(" ");
};

const generateObjectList = (objectLicense) => {
  objectLicense = objectLicense.map((itemLicense) => "* " + itemLicense);
  return objectLicense.join("  \n");
};

// function to generate markdown for README
function generateMarkdown(answers) {
  const {
    title,
    description,
    installation,
    usage,
    licenses,
    contributors,
    tests,
    username,
    email,
  } = answers;
  return `

${generatebadges(licenses)}

# ${title}


## Description
${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Licenses](#licenses)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)


## Installation
${installation}

## Usage
${usage}

## Licenses
${generateObjectList(licenses)}

## Contributors
${generateList(contributors)}

## Tests
${tests}

## Questions
Contact information for questions:  \n

Github: [${username}](https://www.github.com/${username})  \n
Email: ${email}
`;
}

module.exports = generateMarkdown;
