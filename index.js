// Including packages needed for this application
let inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown');
const { title } = require('process');

// Define global variables
let userData = "";
const licenseChoices = ['Apache 2.0','Boost','BSD','Eclipse','IBM Public','ISC','MIT','Mozilla Public','Perl','Artistic 2.0','SIL Open Front','Unlicense','WTF Public'];

// Array of questions for user input critical to README content
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project, explaining the what, why, and how of your project. Include your motivation, what problem it solves, and maybe something you learned along the way:'
    },
    {
        type: 'input',
        name: 'installInstruct',
        message: 'What are your projects installation instructions?'
    },
    {
        type: 'input',
        name: 'useCase',
        message: 'How is this project to be used?'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'testingInstruct',
        message: 'Provide testing instructions:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license from one of the options:',
        choices: licenseChoices
    },
    {
        type: 'input',
        name: 'gitHubID',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const tmpFolder = './tmp';
    const prjFolder = `${tmpFolder}/${fileName}`
    const filePath = `${prjFolder}/README.md`;
    // first make sure that the tmp folder exists and create it if it doesn't
    try {
        if (!fs.existsSync(tmpFolder)) {
            fs.mkdirSync(tmpFolder);
        }
        // then make sure the project folder is there so we don't overwrite other READMEs
        if (!fs.existsSync(prjFolder)) {
            fs.mkdirSync(prjFolder);
        }
    } 
    catch (err) {
        console.error(err);
    }

    // Then write the Readme to the folder
    fs.writeFile(filePath, data, function (err) {
        if (err) throw err;
        console.log(`README.md saved in ${filePath}`);
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(answers.title,genMd(answers));
    })
    .catch((error) => {
        if (error) {
            console.log(error);
        }
    });
}

// Function call to initialize app
init();
