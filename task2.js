const body = document.querySelector("body");

const div = document.createElement("div");
body.append(div);

const btn1 = document.createElement("button");
btn1.innerText = "Show names";
const btn2 = document.createElement("button");
btn2.innerText = "Filter Salary";
const btn3 = document.createElement("button");
btn3.innerText = "Total salary expense";

div.append(btn1, btn2, btn3);

const employees = [
    { name: "Alice", age: 28, salary: 50000 },
    { name: "Bob", age: 34, salary: 60000 },
    { name: "Charlie", age: 25, salary: 45000 },
    { name: "Diana", age: 30, salary: 55000 },
    { name: "Ethan", age: 40, salary: 70000 }
];

function displayResult(message) {
    let old = document.querySelector(".result");
    if (old) old.remove();

    const result = document.createElement("p");
    result.className = "result";
    result.innerText = message;
    body.append(result);
}

btn1.addEventListener("click", () => {
    const names = employees.map(emp => emp.name);
    displayResult("Employee Names: " + names.join(", "));
});

btn2.addEventListener("click", () => {
    const filtered = employees.filter(emp => emp.salary > 40000);
    const names = filtered.map(emp => emp.name);
    displayResult("Employees with salary > 40000: " + names.join(", "));
});

btn3.addEventListener("click", () => {
    const total = employees.reduce((sum, emp) => sum + emp.salary, 0);
    displayResult("Total Salary Expense: ₹" + total);
});