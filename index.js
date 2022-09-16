//we need to get hold of the container
const container = document.querySelector(".container");
// inside this container we need to create 16 divs
function divCreate() {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("inner-div");

    container.appendChild(div);
  }
}

divCreate();

// first we need to get hold of the created divs
// then attach a mousedown event
// when the user presses down whilst inside the div, the bg changes
function draw() {
  const divs = document.querySelectorAll(".inner-div");
  divs.forEach((div) => {
    div.addEventListener("mouseenter", () => {
      console.log("box clicked");
      div.setAttribute("style", "background-color: black");
    });
  });
}
/*
const divs = document.querySelectorAll(".inner-div");
divs.forEach((div) => {
  div.addEventListener("click", draw());
});*/
draw()