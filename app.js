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

// prompts user with list of options to choose from
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
                "Add a department",
                "Add a role",
                "Update employee role",
                "Delete an employee",
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
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "Update employee role":
                updateRole();
                break;
            case "Delete an employee":
                deleteEmployee();
                break;
            case "EXIT": 
                exitApp();
                break;
            default:
                break;
        }
    })
}

// view all employees in the database
function viewEmployees() {
    var query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.log(res.length + " employees found!");
        console.table('All Employees:', res); 
        exitApp();
    })
}

// view all departments in the database
function viewDepartments() {
   
}

// view all roles in the database
function viewRoles() {
  
}

// add an employee to the database
function addEmployee() {

}

// add a department to the database
function addDepartment() {

}

// add a role to the database
function addRole() {

}

// update a role in the database
function updateRole() {

}

//  delete an employee
function deleteEmployee() {

}

// exit the app
function exitApp() {

}
