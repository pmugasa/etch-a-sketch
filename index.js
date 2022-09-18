const btn = document.querySelector(".btn");
btn.addEventListener("click", handleClick);

function handleClick() {
  const userInput = prompt("Enter a number between 8 and 100");
  const gridNum = userInput * userInput;
  gridCreate(gridNum, userInput);
  return;
}

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

function draw() {
  const divs = document.querySelectorAll(".inner-div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      div.setAttribute("style", "background-color: black");
    });
  });
}
draw();
