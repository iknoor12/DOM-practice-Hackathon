const body=document.querySelector("body");

const div=document.createElement("div");
body.append(div);

const p=document.createElement("p");
p.innerText="Hello World";
div.append(p);

const btn=document.createElement("button");
btn.innerText="Change text";
div.append(btn);

btn.addEventListener("click", function(){
    p.innerText="Hello, JavaScript DOM";
    p.style.color="blue";
    p.style.fontSize="20px";

});