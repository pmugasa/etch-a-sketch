const btn = document.querySelector(".btn");
btn.addEventListener("click", handleClick);

function handleClick(userInput) {
  userInput = prompt("Enter number between 8 and 100");
  console.log(userInput);

  function divCreate() {
    const container = document.querySelector(".container");
    for (let i = 0; i < userInput; i++) {
      const div = document.createElement("div");
      div.classList.add("inner-div");

      container.appendChild(div);
    }
  }
  divCreate();
}

// first we need to get hold of the created divs
// then attach a mousedown event
// when the user presses down whilst inside the div, the bg changes
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

// when a user clicks the button they enter a number
// this number is then used to set the number of grids
// if a user enters a number below 8 they are alerted that its not valid
// if a number is above 100 they are alerted that it is not valid
// when a valid number is received it is then used as the number to set the grids
// the grids have to fit in the box and take up as much space as they can
