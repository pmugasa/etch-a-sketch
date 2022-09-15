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