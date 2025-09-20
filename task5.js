const body = document.querySelector("body");

const container = document.createElement("div");
body.append(container);

const h1 = document.createElement("h1");
h1.innerText = "My List";
container.append(h1);

const input = document.createElement("input");
input.setAttribute("placeholder", "Enter item...");
container.append(input);

const addBtn = document.createElement("button");
addBtn.innerText = "Add Item";
container.append(addBtn);

const ul = document.createElement("ul");
container.append(ul);

addBtn.addEventListener("click", function () {
    const value = input.value.trim();
    if (value === "") return;

    const li = document.createElement("li");
    li.innerText = value;

    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", function () {
        ul.removeChild(li);
    });

    li.appendChild(removeBtn);
    ul.appendChild(li);

    input.value = ""; 
});
