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
    let opacity = 0;
    cell.addEventListener("mouseover", () => {
      cell.style.setProperty("background-color", "#000");
      cell.style.setProperty("opacity", opacity);
      const compStyle = getComputedStyle(cell);
      if (compStyle.opacity !== 1) {
        cell.style.setProperty("opacity", (opacity += 0.1));
      }
    });
  });
}

function clearGrid() {
  cells.forEach((e) => e.remove());
}

function setNewGrid() {
  let newGridSize = parseInt(prompt("New grid size? (1-100)\nDefault: 16"));
  if (newGridSize > 100) {
    alert("Can't use sizes larger than 100\nSetting size to 100");
    newGridSize = 100;
  } else if (!newGridSize) {
    newGridSize = 16;
  } else if (newGridSize < 1) {
    alert("Can't use sizes less than 1\nSetting size to 1");
    newGridSize = 1;
  }
  drawGrid(newGridSize, newGridSize);
  const gridSize = document.querySelector('#grid-size');
  gridSize.textContent = `${newGridSize} x ${newGridSize}`;

  cells = document.querySelectorAll(".grid-item");
  paintOnMouseOver();
}

clearGridBtn.addEventListener("mousedown", clearGrid);
clearGridBtn.addEventListener("mouseup", setNewGrid);
