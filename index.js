const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

context.lineJoin = 'round';
context.lineCap = 'round';

let isDrawing = false;
let lastX;
let lastY;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return; // Stop the function
  context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  lastX = e.offsetX;
  lastY = e.offsetY;
  context.beginPath();
  // Start from
  context.moveTo(lastX, lastY);
  // Go to
  context.lineTo(e.offsetX, e.offsetY);
  context.stroke();
  hue++;
  if (hue >= 360) {
    hue = 0;
  }

  if (context.lineWidth >= 100 || context.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    context.lineWidth++;
  } else {
    context.lineWidth--;
  }
}

canvas.addEventListener('mousedown', () => (isDrawing = true));
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => (isDrawing = false));
canvas.addEventListener('mouseout', () => (isDrawing = false));
