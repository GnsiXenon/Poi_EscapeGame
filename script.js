const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.onload = function() {
  initializePieces();
  drawPieces();
};
image.src = "abc.png";

const pieces = [];
let selectedPiece = null;
let offsetX, offsetY;

function initializePieces() {
  const pieceWidth = image.width / 3;
  const pieceHeight = image.height / 5;
  for (let x = 0; x < 3; x++) {
    for (let y = 0; y < 5; y++) {
      pieces.push({
        x: x * pieceWidth+200,
        y: y * pieceHeight+200,
        width: pieceWidth,
        height: pieceHeight,
        imageX: x * pieceWidth,
        imageY: y * pieceHeight
      });
    }
  }
}

function drawPieces() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  pieces.forEach(function(piece) {
    ctx.drawImage(image, piece.imageX, piece.imageY, piece.width, piece.height, piece.x, piece.y, piece.width, piece.height);
  });
}

canvas.addEventListener("mousedown", function(event) {
  const mouseX = event.clientX - canvas.offsetLeft;
  const mouseY = event.clientY - canvas.offsetTop;

  pieces.forEach(function(piece) {
    if (mouseX >= piece.x && mouseX < piece.x + piece.width && mouseY >= piece.y && mouseY < piece.y + piece.height) {
      selectedPiece = piece;
      offsetX = mouseX - piece.x;
      offsetY = mouseY - piece.y;
    }
  });
});

canvas.addEventListener("touchstart", function(event) {
  const touchX = event.touches[0].clientX - canvas.offsetLeft;
  const touchY = event.touches[0].clientY - canvas.offsetTop;

  pieces.forEach(function(piece) {
    if (touchX >= piece.x && touchX < piece.x + piece.width && touchY >= piece.y && touchY < piece.y + piece.height) {
      selectedPiece = piece;
      offsetX = touchX - piece.x;
      offsetY = touchY - piece.y;
    }
  });
});

canvas.addEventListener("mousemove", function(event) {
  if (selectedPiece) {
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;
    selectedPiece.x = mouseX - offsetX;
    selectedPiece.y = mouseY - offsetY;
    drawPieces();
  }
});

canvas.addEventListener("touchmove", function(event) {
  if (selectedPiece) {
    const touchX = event.touches[0].clientX - canvas.offsetLeft;
    const touchY = event.touches[0].clientY - canvas.offsetTop;
    selectedPiece.x = touchX - offsetX;
    selectedPiece.y = touchY - offsetY;
    drawPieces();
  }
});

canvas.addEventListener("mouseup", function(event) {
  selectedPiece = null;
});

canvas.addEventListener("touchend", function(event) {
  selectedPiece = null;
});
