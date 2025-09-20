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


btn1.addEventListener("click", displayName);

function displayName(){
    const employees = [
        { name: "Alice", age: 28, salary: 50000 },
        { name: "Bob", age: 34, salary: 60000 },
        { name: "Charlie", age: 25, salary: 45000 },
        { name: "Diana", age: 30, salary: 55000 },
        { name: "Ethan", age: 40, salary: 70000 }
    ];

    let names = employees.map(emp => (emp.name));

    const result = document.createElement("div");
    result.innerText = `${names}`;
    body.append(result);
}