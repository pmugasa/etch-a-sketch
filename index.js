
//change grids button
const btn = document.querySelector(".btn");
btn.addEventListener("click", handleClick);

//default grids
let userInput = 8;
let gridNum = 64;
gridCreate(gridNum, userInput);
startDrawing();

function handleClick(userInput, gridNum) {
  userInput = prompt("Enter a number between 8 and 100");
  console.log(userInput);
  gridNum = userInput * userInput;
  if (userInput < 8) {
    gridCreate(64, 8);
  } else {
    gridCreate(gridNum, userInput);
  }

  startDrawing();

  return;
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

// if the user has not input value the default should be 8 grids
// if the user inputs a value change from default to user input
//clear sketchpad button
const clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", () => {
  location.reload();
});