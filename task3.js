const body = document.querySelector("body");

const btn = document.createElement("button");
btn.innerText = "Load Users";
body.append(btn);

const div = document.createElement("div");
body.append(div);

btn.addEventListener("click", function data(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        div.innerHTML = ''

        users.forEach(user => {
            const para = document.createElement("p");
            para.innerText = `Name: ${user.name}, Email: ${user.email}, City: ${user.address.city}`;
            div.append(para);
        });
    })
    .catch(error => console.error(error));
})