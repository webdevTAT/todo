//now we will work with the add button
//itemContainer
function addClicked() {
  let Inputbox = document.getElementById("text");
  let container = document.getElementById("itemContainer");
  let userInput = document.getElementById("text").value;
  let addButton = document.getElementsByClassName("add")[0];
  if (userInput.length != 0) {
   // document.getElementsByClassName('cbx')[0].style.backgroundColor = "green";
    let domElement = document.createElement("li");
    let checkboxCreation = document.createElement("input");
    checkboxCreation.setAttribute("type", "checkbox");
    checkboxCreation.setAttribute("class", "cbx");
    let elementText = document.createTextNode(userInput);
    let textSpan = document.createElement("span");
    textSpan.setAttribute("class", "spanText");
    textSpan.appendChild(elementText);
    domElement.appendChild(checkboxCreation);
    //  domElement.appendChild(elementText);
    domElement.appendChild(textSpan);
    container.appendChild(domElement);
    Inputbox.value = "";
  } else {
    Inputbox.style.backgroundColor = "rgb(255, 241, 240)";
    Inputbox.setAttribute("placeholder", "লিখা কই?😑add new");
  }
}
// now lets check to create
