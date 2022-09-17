const btn = document.querySelector(".btn");
btn.addEventListener("click", handleClick);

function handleClick() {
  const userInput = prompt("Enter a number between 8 and 100");
  const gridNum = userInput * userInput;
  gridCreate(gridNum);
  return;
}

function gridCreate(gridNum) {
  const container = document.querySelector("#container");
  for (let i = 0; i < gridNum; i++) {
    const div = document.createElement("div");
    div.setAttribute("class", "inner-div");
    container.style.setProperty(
      "grid-template-columns",
      "repeat(" + 16 + ", minmax(90px, 1fr)"
    );
    container.append(div);
  }
}

function draw() {
  const divs = document.querySelectorAll(".inner-div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.setAttribute("style", "background-color: black");
    });
  });
}

const divs = document.querySelectorAll(".inner-div");
divs.forEach((div) => {
  div.addEventListener("click", draw);
});

//change the number of grids based on the clicked button
// based on the button clicked change the number of times the loops
// based on the clicked button change the grid template row and columns
