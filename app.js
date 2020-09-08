const mysql = require("mysql");
const inquirer = require("inquirer");
const consoleTable = require("console.table")

// creates connection to sql database
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "maggiemay233",
    database: "employees_db"
})

// connects to sql server and sql database
connection.connect(function(err){
    if (err) throw err;
    options();
})

// propts user with list of options to choose from
function options() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Welcome to our employee database! What would you like to do?",
        choices: [
                "View all employees",
                "View all departments",
                "View all roles",
                "Add an employee",
                "Add department",
                "Add a role",
                "EXIT"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View all employees":
                viewEmployees();
                break;
            case "View all departments":
                viewDepartments();
                break;
            case "View all roles":
                viewRoles();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Add department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "EXIT": 
                exitApp();
                break;
            default:
                break;
        }
    })
}

function viewEmployees() {
  
}

function viewDepartments() {
   
}

function viewRoles() {
  
}

function addEmployee() {

}

function addDepartment() {

}

function addRole() {

}

function exitApp() {

}
