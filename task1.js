const body = document.querySelector("body");

const div = document.createElement("div");
body.append(div);

const input1 = document.createElement("input");
const input2 = document.createElement("input");
const input3 = document.createElement("input");
const input4 = document.createElement("input");
const input5 = document.createElement("input");

const btn = document.createElement("button");
btn.innerText = "Calculate Grade";
div.append(input1,input2,input3,input4,input5, btn);

btn.addEventListener("click", calculation);

function calculation(){
    let num1 = Number(input1.value);
    let num2 = Number(input2.value);
    let num3 = Number(input3.value);
    let num4 = Number(input4.value);
    let num5 = Number(input5.value);

    let avg = (num1 + num2 + num3 + num4 + num5) / 5;
    console.log( avg); 

    let grade;
    if(avg>=90){
        grade="A"
    }
    else if (avg>=75){
        grade="B"
    }
    else if (avg>=50){
        grade ="C"
    }
    else{
        grade="F"
    }
     const result = document.createElement("p");
    result.innerText = `Average: ${avg}, Grade: ${grade}`;
    div.append(result);

}
   