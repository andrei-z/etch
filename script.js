const gridArea = document.querySelector(".grid-area");
const clearGridBtn = document.getElementById("clear-grid");
let cells;

drawGrid(16, 16);

function drawGrid(cols, rows) {
  gridArea.style.setProperty("--grid-cols", cols);
  gridArea.style.setProperty("--grid-rows", rows);

  for (let i = 0; i < cols * rows; i++) {
    let cell = document.createElement("div");
    gridArea.appendChild(cell).className = "grid-item";
  }
  cells = document.querySelectorAll(".grid-item");
  paintOnMouseOver();
}

function paintOnMouseOver() {
  cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
      cell.style.setProperty("background-color", "#000");
    });
  });
}

function clearGrid() {
  cells.forEach((e) => e.remove());
}

function setNewGrid() {
//   clearGrid();
  let newGridSize = parseInt(prompt("New grid size? (1-100)"));
  if (newGridSize > 100) {
      alert("Can't use sizes larger than 100\nSetting size to 100");
      newGridSize = 100;
  } else if(!newGridSize){
      newGridSize = 16;
  }
  drawGrid(newGridSize, newGridSize);
  cells = document.querySelectorAll(".grid-item");
  paintOnMouseOver();
}

clearGridBtn.addEventListener("mousedown", clearGrid);
clearGridBtn.addEventListener("mouseup", setNewGrid);
