//default grids
gridCreate(64, 8)

startDrawing();

//change grids when button is clicked
const btn = document.querySelector(".btn");
btn.addEventListener("click", (userInput, gridNum) => {
  userInput = prompt("Enter a number between 8 and 100");
  gridNum = userInput * userInput;
  if (userInput < 8 || userInput > 100) {
    alert("Number not in range๐. Please try again ๐");
  } else {
    return gridCreate(gridNum, userInput);
  }
});

//create grids
function gridCreate(gridNum, userInput) {
  const dGrids = Array.from(document.querySelectorAll("default-grid"));
  dGrids.forEach((dGrid) => {
    dGrid.classList.remove("default-grid");
    dGrid.style.display = "none";
  });
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
