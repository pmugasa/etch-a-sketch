const btn = document.querySelector(".btn");
btn.addEventListener("click", handleClick);
function handleClick() {
  const userInput = prompt("Enter a number between 8 and 100");
  const gridNum = userInput * userInput;
  gridCreate(gridNum, userInput);
  startDrawing();
  

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
    div.addEventListener("mouseenter",start);
    function start(){
      div.setAttribute("style", "background-color: black");
    } 
    
  });
  return
}


// when user presses mouse down this event calls mouseover event function
// mouse over event then starts drawing
// when user then releases the mouse up this event then calls the mouseover event function to stop
