// Including packages needed for this application
let inquirer = require('inquirer');
const fs = require('fs');
const genMd = require('./utils/generateMarkdown');
const { title } = require('process');

// Define global variables
let userData = "";
const licenseChoices = ['Apache 2.0','Boost','BSD','Eclipse','IBM Public','ISC','MIT','Mozilla Public','Perl','Artistic 2.0','SIL Open Front','Unlicense','WTF Public'];

// Function to validate that the answers to prompts are not empty
const requireLetter = (val) => {
    if (/\w/.test(val)) {       // checking for a-Z, 0-9
        return true;
    }
    return 'Must contain letters';
}

// Array of questions for user input critical to README content
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: requireLetter
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of the project; explain the what (problem solved), why (motivation), and how:',
        validate: requireLetter
    },
    {
        type: 'input',
        name: 'installInstruct',
        message: 'What are your projects installation instructions?',
        validate: requireLetter
    },
    {
        type: 'input',
        name: 'useCase',
        message: 'How is this project to be used?',
        validate: requireLetter
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Please provide contribution guidelines:',
        validate: requireLetter
    },
    {
        type: 'input',
        name: 'testingInstruct',
        message: 'Provide testing instructions:',
        validate: requireLetter
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
        message: 'What is your GitHub username?',
        validate: requireLetter
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: requireLetter
    },
];

// Function to write README file to tmp project file path
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

// Function that initializes the app
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
