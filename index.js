let box=document.getElementById("box");
    let btn=document.getElementsByClassName("number");
    let plus=document.getElementById("plus");
    let minus=document.getElementById("minus");
    let divide=document.getElementById("divide");
    let multiply=document.getElementById("mult");
    let equal=document.getElementById("equal");
    let outputText="";
    let operator="";
    let arr=[];
    for(let i=0; i<btn.length; i++){
        btn[i].addEventListener("click",(e)=> {

            console.log(outputText+=e.target.innerText);
            output.innerText=outputText;
        })
    }
    plus.addEventListener("click", () => {
        if (outputText !== "") {
          arr.push(+outputText);
          console.log(arr);
        }
        outputText = "";
        output.innerText = "";
        operator = "plus";
      });

    minus.addEventListener("click", () => {
    if (outputText !== "") {
      arr.push(+outputText);
      console.log(arr);
    }
    outputText = "";
    output.innerText = "";
    operator = "minus";
  });

  multiply.addEventListener("click",()=>{
    if (outputText !== "") {
        arr.push(+outputText);
        console.log(arr);
      }
      outputText = "";
      output.innerText = "";
      operator = "multiply";

})

divide.addEventListener("click",()=>{
    if (outputText !== "") {
        arr.push(+outputText);
        console.log(arr);
      }
      outputText = "";
      output.innerText = "";
      operator = "divide";


})


equal.addEventListener("click", () => {
    if (outputText !== "") {
      arr.push(+outputText);
    }
  
    let result = 0;
    if (operator === "plus") {
      for (let i = 0; i < arr.length; i++) {
        result += arr[i];
      }
    } else if (operator === "minus") {
      if (arr.length > 0) {
        result = arr[0];
        for (let i = 1; i < arr.length; i++) {
          result -= arr[i];
        }
      }
    } else if (operator === "multiply") {
      if (arr.length > 0) {
        result = arr[0];
        for (let i = 1; i < arr.length; i++) {
          result *= arr[i];
        }
      }
    } else if (operator === "divide") {
      if (arr.length > 0) {
        result = arr[0];
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] !== 0) { // Avoid division by zero
            result /= arr[i];
          } else {
            // Handle division by zero error here if needed
            output.innerText = "Error: Division by zero";
            return;
          }
        }
      }
    }
  
    output.innerText = result;
    arr = [result]; 
    outputText = "";
    operator = ""; 
  });
  
  
  
        
clear.addEventListener("click", () => {
    arr = []; 
    outputText = ""; 
    operator = ""; 
    output.innerText = ""; 
  });