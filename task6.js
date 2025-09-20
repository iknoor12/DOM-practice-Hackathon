const body=document.querySelector("body");

const div=document.createElement("div");
body.append(div);

const h1 =document.createElement("h1");
h1.innerText="Key Logger";
div.append(h1);

const p=document.createElement("p");
div.append(p);

const input=document.createElement("input");
div.append(input);

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        p.innerText = "You pressed Enter!";
    } else {
        p.innerText = "Last key pressed: " + event.key;
    }
});