const body = document.querySelector("body");

const heading = document.createElement("h2");
heading.innerText = "Image Gallery";
body.appendChild(heading);

const Div = document.createElement("div");
const bigImg = document.createElement("img");
bigImg.width = 300;
bigImg.classList.add("bigImg"); 
Div.appendChild(bigImg);
body.appendChild(Div);

const thumbDiv = document.createElement("div");
thumbDiv.classList.add("thumbDiv"); 
body.appendChild(thumbDiv);


const img1 = document.createElement("img");
img1.src = "image.png"; 
img1.alt = "Red";
thumbDiv.appendChild(img1);

const img2 = document.createElement("img");
img2.src = "image copy.png"; 
img2.alt = "Green";
thumbDiv.appendChild(img2);

const img3 = document.createElement("img");
img3.src = "image copy 2.png"; 
img3.alt = "Blue";
thumbDiv.appendChild(img3);

thumbDiv.addEventListener("mouseover", function(event) {
  if (event.target.tagName === "IMG") {
    bigImg.src = event.target.src;
  }
});

