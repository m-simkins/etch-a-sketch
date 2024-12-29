const container = document.getElementById("container");
const containerStyles = window.getComputedStyle(container);
const containerWidth = containerStyles.getPropertyValue("width");

let gridSize = 16;

const gridSquare = document.querySelector(".grid-square");
const gridSquareStyles = window.getComputedStyle(gridSquare);
gridSquare.style.width = `calc(${containerWidth} / ${gridSize}})`
const gridSquareWidth = gridSquareStyles.getPropertyValue("width");

console.log(containerWidth);
console.log(gridSquareWidth);

const squareCount = gridSize * gridSize;


