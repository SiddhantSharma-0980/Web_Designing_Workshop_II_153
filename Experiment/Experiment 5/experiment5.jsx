let employees = [];

function addEmployee() {

    let name = document.getElementById("name").value;
    let id = document.getElementById("id").value;
    let salary = parseFloat(document.getElementById("salary").value);
    let department = document.getElementById("department").value;
 
    if (name === "" || id === "" || isNaN(salary) || department === "") {
        alert("Please fill all fields properly");
        return;
    }

    let employee = {
        name: name,
        id: id,
        salary: salary,
        department: department
    };
     employees.push(employee);
    alert("Employee Added Successfully!");
    document.getElementById("name").value = "";
    document.getElementById("id").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("department").value = "";
}
function displayEmployees() {

    let output = "<h3>All Employees</h3>";

    if (employees.length === 0) {
        output += "No employees added yet.";
    }

    employees.forEach(emp => {
        output += `
        Name: ${emp.name} |
        ID: ${emp.id} |
        Salary: ₹${emp.salary} |
        Department: ${emp.department} <br>
        `;
    });

    document.querySelector(".result").innerHTML = output;
}
