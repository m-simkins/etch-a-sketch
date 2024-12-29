setup();

function setup() {
    const inputContainer = document.createElement("div");
    inputContainer.id = "inputContainer";
    document.body.appendChild(inputContainer);

    const gridContainer = document.createElement("div");
    gridContainer.id = "gridContainer";
    document.body.appendChild(gridContainer);
        
    const gridSizeLabel = document.createElement("label");
    gridSizeLabel.setAttribute("for", "gridSizeInput");
    gridSizeLabel.innerText = "grid size:";
    inputContainer.appendChild(gridSizeLabel);
    
    const gridSizeInput = document.createElement("input");
    gridSizeInput.type = "number";
    gridSizeInput.id = "gridSizeInput";
    inputContainer.appendChild(gridSizeInput);
    
    const createGridButton = document.createElement("button");
    createGridButton.id = "createGridButton";
    createGridButton.innerText = "create grid";
    inputContainer.appendChild(createGridButton);

    createGridButton.addEventListener("click", () => {
        if (gridSizeInput.value < 1) {
            alert("enter a number greater than 0");
        } else {
            gridContainer.replaceChildren();
            createGrid(gridSizeInput.value);
        }
    })
}

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const gridColumn = document.createElement("div");
        gridColumn.classList.add("grid-column");
        document.getElementById("gridContainer").appendChild(gridColumn);
    }
    createCells(gridSize);
}

function createCells(gridSize) {
    const gridColumns = document.getElementsByClassName("grid-column");
    for (let column of gridColumns) {
        for (let i = 0; i < gridSize; i++) {
            const gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            column.appendChild(gridCell);
        }
    }
}