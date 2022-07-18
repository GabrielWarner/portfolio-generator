const inquirer = require("inquirer")
const fs = require("fs")
// TODO: Create an array of questions for user input
const licenses = ["Pizza", "Hotdogs", 'Tacos', "Ramen", "Chicken and Rice", "Chicken Tenders", "Mozilla Public License 2.0", "Common Development and Distribution License", "Eclipse Public License version 2.0" ]
const questions = [
    {
        message: "Enter your name: ",
        type: "input",
        name: "name"
    },
    {
        message: "Enter age: ",
        type: "input",
        name: "age"
    },
    {
        message: "Enter your location: ",
        type: "input",
        name: "location"
    },
    {
        message: "Enter enter linkedin username: ",
        type: "input",
        name: "linkedin"
    },
    {
        message: "Enter github username: ",
        type: "input",
        name: "github"
    },
    {
        message: "Enter email: ",
        type: "input",
        name: "email"
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const {name, age, location, linkedin, github, email} = data
    fs.writeFile(`${data.name}.html`,`<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <title>Portfolio Generator</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
            <link rel="stylesheet" href="./assets/css/style.css">
        </head>
        <body>
            <header>
                <section class="hero is-primary is-small">
                    <div class="hero-body">
                      <p class="title">
                        Portfolio Generator
                      </p>
                      <p class="subtitle">
                        Primary subtitle
                      </p>
                    </div>
                  </section>
            </header>
            <main class="column">
                <div class="box column is-half is-offset-one-quarter">
                    <h2 class="box"><p>Name: ${name}</p></h2>
                    <h2 class="box">Age: ${age}</h2>
                    <h2 class="box">Location: ${location}</h2>
                    <h2 class="box">Linkedin profile: <a href="https://www.linkedin.com/in/${linkedin}">${linkedin}</a></h2>
                    <h2 class="box">Github profile:<a href="https://github.com/${github}"> ${github}</a></h2>
                    <h2 class="box">Email: ${email}</h2>
                </div>
            </main>
        </body>
    </html>` , (err) =>
  err ? console.error(err) : console.log('Success!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((data)=>{
        writeToFile(data)
    })
}

// Function call to initialize app
init();