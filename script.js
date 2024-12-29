const createGridButton = document.createElement("button");
createGridButton.id = "createGridButton";
createGridButton.innerText = "create grid";
document.body.appendChild(createGridButton);

const gridContainer = document.createElement("div");
gridContainer.id = "gridContainer";
document.body.appendChild(gridContainer);

createGridButton.addEventListener("click", () => {
    const gridSize = Number(prompt("set grid size"));
    console.log(gridSize);
    if (isNaN(gridSize) || gridSize < 1) {
        alert("invalid")
    } else {
        gridContainer.replaceChildren();
        createGrid(gridSize);
    }
})

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        gridContainer.appendChild(gridColumn);

        for (let j = 0; j < gridSize; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridColumn.appendChild(gridCell);
            gridCell.addEventListener("mouseenter", () => {
                gridCell.style.backgroundColor = "#999";
            })
        }
    }
}