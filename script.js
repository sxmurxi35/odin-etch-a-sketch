const container = document.querySelector(".container");
const newBtn = document.querySelector(".new");

function makeGrid(number) {
  for (let i = 1; i <= number; i++) {
    const column = document.createElement("div");
    column.classList.add("grid-div");
    for (let j = 1; j <= number; j++) {
      const cell = document.createElement("div");
      // cell.classList.add("cell");
      cell.style.width = `${640 / number}px`;
      cell.style.height = `${640 / number}px`;
      cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = `rgb(${randomColor()},${randomColor()}, ${randomColor()})`;
      });

      column.appendChild(cell);
    }

    container.appendChild(column);
  }
}

function randomColor() {
  const random = Math.floor(Math.random() * 255);
  return random;
}

newBtn.addEventListener("click", () => {
  let number = prompt("How many squares in row do you want?");

  if (number <= 100) {
    return makeGrid(number);
  } else number = prompt("How many squares in row do you want?");
});
