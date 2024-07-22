const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const cellSize = 40;
const rows = 20;
const cols = 20;
canvas.width = cellSize * cols;
canvas.height = cellSize * rows;
const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

let player = {
    x: 1,
    y: 1
};

let exit = {
      x: 18,
      y: 18
};

function drawMaze() {
    for (let row = 0; row < maze.length; row++) {
        for (let col = 0; col < maze[row].length; col++) {
            if (maze[row][col] === 1) {
                ctx.fillStyle = 'black';
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            } else {
                ctx.fillStyle = 'white';
                ctx.fillRect(col * cellSize, row * cellSize, cellSize, cellSize);
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = 'green';
    ctx.fillRect(player.x * cellSize, player.y * cellSize, cellSize, cellSize);
}

function drawExit(){
  ctx.fillStyle = 'red';
  ctx.fillRect(exit.x * cellSize, exit.y * cellSize, cellSize, cellSize)
}

function movePlayer(dx, dy) {
    if (maze[player.y + dy][player.x + dx] !== 1) {
        player.x += dx;
        player.y += dy;
        draw();
    }
    if (player.x === exit.x && player.y === exit.y) {
        alert('Você venceu!');
    }    
}
function draw() {
    drawMaze();
    drawPlayer();
    drawExit();
}

draw();

function handleMove(dx, dy, event) {
    event.preventDefault();
    movePlayer(dx, dy);
}

document.getElementById('up').addEventListener('click', (event) => handleMove(0, -1, event));
document.getElementById('up').addEventListener('touchstart', (event) => handleMove(0, -1, event));
document.getElementById('down').addEventListener('click', (event) => handleMove(0, 1, event));
document.getElementById('down').addEventListener('touchstart', (event) => handleMove(0, 1, event));
document.getElementById('left').addEventListener('click', (event) => handleMove(-1, 0, event));
document.getElementById('left').addEventListener('touchstart', (event) => handleMove(-1, 0, event));
document.getElementById('right').addEventListener('click', (event) => handleMove(1, 0, event));
document.getElementById('right').addEventListener('touchstart', (event) => handleMove(1, 0, event));
