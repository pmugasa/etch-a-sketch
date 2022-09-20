// when button is not clicked
let userInput = 8;
let gridNum = 64;
gridCreate(64, 8);
//change grids button
const btn = document.querySelector(".btn");

btn.addEventListener("click", handleClick);

//handling button event
function handleClick(userInput) {
  userInput = prompt("Enter a number between 8 and 100");
  gridNum = userInput * userInput;
  if (userInput < 8 || userInput > 100) {
    alert("Number not in range😕. Please try again 🙄");
  } else {
    return gridCreate(gridNum, userInput);
  }
}

//create grids
function gridCreate(gridNum, userInput) {
  const container = document.querySelector("#container");
  for (let i = 0; i < gridNum; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "inner-div");
    container.style.setProperty(
      "grid-template-columns",
      "repeat(" + userInput + ", minmax(auto, 1fr)"
    );
    container.style.setProperty(
      "grid-template-rows",
      "repeat(" + userInput + ", minmax(auto, 1fr"
    );
    container.append(div);
  }
}

function startDrawing() {
  const divs = document.querySelectorAll(".inner-div");
  divs.forEach((div) => {
    div.addEventListener("mousedown", () => {
      draw();
    });
  });
}

function draw() {
  const divs = document.querySelectorAll(".inner-div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", start);
    function start() {
      div.setAttribute("style", "background-color: black");
    }
  });
  return;
}
