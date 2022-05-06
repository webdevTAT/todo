
// working the checkbox function
//now we will work with the add button
//itemContainer
function addClicked(){
    let container = document.getElementById("itemContainer");
    let userInput = document.getElementById("text").value;
    let Inputbox = document.getElementById("text");
    let addButton = document.getElementsByClassName("add")[0];
    if(userInput.length != 0){
       let domElement = document.createElement("li");
       let checkboxCreation = document.createElement("input");
       checkboxCreation.setAttribute("type","checkbox");
       let elementText = document.createTextNode(userInput);
       domElement.appendChild(checkboxCreation);
       domElement.appendChild(elementText);
       container.appendChild(domElement);
    }
    else{
       Inputbox.style.backgroundColor = "rgb(255, 241, 240)"
    }
}