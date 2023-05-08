export function PuzzleGame() {
let launch = false

const puzzleGame = document.getElementById("puzzle");
const puzzleImg = document.getElementById("puzzleImg");
const cross = document.getElementById("cross");
const Game = document.getElementById("Game");
const canvas = document.getElementById("Puzzle");

let _IsFinish = false;

function OpenPuzzle(){
  Game.style.height = "100vh";
  Game.style.justifyContent = "center";
  Game.style.alignItems = "center";
  Game.style.flexDirection = "column";
  puzzleImg.style.display = "none";
  puzzleGame.style.height = "480px";
  puzzleGame.style.width = "720px";
  puzzleGame.style.margin = "0";
  cross.style.display = "flex";
  cross.style.width = "720px";
  cross.style.justifyContent = "flex-end";
  canvas.style.display = "block";
  

}

function ClosePuzzle(){
  Game.style.height = "";
  Game.style.justifyContent = "";
  Game.style.alignItems = "";
  Game.style.flexDirection = "";
  cross.style.display = "none";
  puzzleGame.style.height = "";
  puzzleGame.style.width = "";
  puzzleGame.style.margin = "";
  puzzleImg.style.display = "";
  canvas.style.display = "none";


}

cross.addEventListener("click", function() {
  if (launch == true) {
    ClosePuzzle();
    launch = false;
  }
})


puzzleGame.addEventListener("click", function() {
  if (launch == false) {
    if (_IsFinish == true) {
      OpenPuzzle();
      launch = true;
    }else{
    OpenPuzzle();
    launch = true;
    start();
  }
  }
})



function start(){
  console.log("start")
  const ctx = canvas.getContext("2d");

  const image = new Image();
  image.onload = function() {
    // const scale = Math.min(720 / image.width, 480 / image.height);
    // image.width *= scale;
    // image.height *= scale;
    initializePieces();
    drawPieces();
    console.log(image.width, image.height)
    puzzleGame.style.height = image.height + "px";
    puzzleGame.style.width = image.width + "px";

  };

  //taille de l'image par rapport à la taille du canvas
  image.src = "./img/thumb-1920-575608.jpg";

  const pieces = [];
  let selectedPiece = null;
  let offsetX, offsetY;
  let win = false;
      const row = 5;
    const col = 5;

  function initializePieces() {

    const pieceWidth = image.width / row;
    const pieceHeight = image.height / col;
    for (let x = 0; x < row; x++) {
      for (let y = 0; y < col; y++) {
        pieces.push({
          gap : 0,
          x: Math.floor(Math.random() * (image.width - pieceHeight)),
          y: Math.floor(Math.random() * (image.height - pieceHeight)),
          width: pieceWidth,
          height: pieceHeight, 
          i : x ,
          j : y ,

          block : false
        });
      }
    }

    let cnt =0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const piece = pieces[cnt];
        if (i ==row-1) {
          piece.bottom = null;
        }else{
        const sgn = (Math.random() - 0.5)<0 ? -1 : 1;
        piece.bottom = sgn * (Math.random() * 0.4+0.3);
        }
        if (j ==col-1) {
          piece.right = null;
        }else{
        const sgn = (Math.random() - 0.5)<0 ? -1 : 1;
        piece.right = sgn * (Math.random() * 0.4+0.3);
        }
        if (j ==0) {
          piece.left = null;
        }else{
          piece.left = -pieces[cnt-1].right;
        }
        if (i ==0) {
          piece.top = null;
        }else{
          piece.top = -pieces[cnt-col].bottom;
        }
        cnt++;
      }
    }
    console.log(pieces)
  }

  function drawPieces() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.lineWidth = 2;
    ctx.strokeStyle = "black";
    ctx.strokeRect(0,0,image.width,image.height);
  

    for(let i = 0; i < pieces.length; i++) {

      ctx.beginPath();

      const sz = Math.min(pieces[i].width,pieces[i].height);
      const neck = sz * 0.1;
      const tabWidth = sz * 0.2;
      const tabHeight = sz * 0.2;


      ctx.moveTo(pieces[i].x,pieces[i].y);
      //to top right
      if(pieces[i].top){
        ctx.lineTo(pieces[i].x+pieces[i].width*Math.abs(pieces[i].top)-neck,
        pieces[i].y);
        ctx.bezierCurveTo(
          pieces[i].x+pieces[i].width*Math.abs(pieces[i].top)-neck,
          pieces[i].y-tabHeight*Math.sign(pieces[i].top)*0.2,

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].top)-tabWidth,
          pieces[i].y-tabHeight*Math.sign(pieces[i].top),

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].top),
          pieces[i].y-tabHeight*Math.sign(pieces[i].top)
        );

        ctx.bezierCurveTo(
          pieces[i].x+pieces[i].width*Math.abs(pieces[i].top)+tabWidth,
          pieces[i].y-tabHeight*Math.sign(pieces[i].top),

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].top)+neck,
          pieces[i].y-tabHeight*Math.sign(pieces[i].top)*0.2,

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].top)+neck,
          pieces[i].y
        );
      }
      ctx.lineTo(pieces[i].x+pieces[i].width,pieces[i].y);

      //to bottom right
      if(pieces[i].right){
        ctx.lineTo(pieces[i].x+pieces[i].width,pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)-neck);
        ctx.bezierCurveTo(
          pieces[i].x+pieces[i].width-tabHeight*Math.sign(pieces[i].right)*0.2,
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)-neck,

          pieces[i].x+pieces[i].width-tabHeight*Math.sign(pieces[i].right),
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)-tabWidth,

          pieces[i].x+pieces[i].width-tabHeight*Math.sign(pieces[i].right),
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)
        );
        ctx.bezierCurveTo(
          pieces[i].x+pieces[i].width-tabHeight*Math.sign(pieces[i].right),
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)+tabWidth,

          pieces[i].x+pieces[i].width-tabHeight*Math.sign(pieces[i].right)*0.2,
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)+neck,

          pieces[i].x+pieces[i].width,
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].right)+neck
        );
      }
      ctx.lineTo(pieces[i].x+pieces[i].width,pieces[i].y+pieces[i].height);

      //to bottom left
      if(pieces[i].bottom){
        ctx.lineTo(pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom)+neck,
        pieces[i].y+pieces[i].height)

        ctx.bezierCurveTo(
          pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom)+neck,
          pieces[i].y+pieces[i].height+tabHeight*Math.sign(pieces[i].bottom)*0.2,

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom)+tabWidth,
          pieces[i].y+pieces[i].height+tabHeight*Math.sign(pieces[i].bottom),

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom),
          pieces[i].y+pieces[i].height+tabHeight*Math.sign(pieces[i].bottom)
        );

        ctx.bezierCurveTo(
          pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom)-tabWidth,
          pieces[i].y+pieces[i].height+tabHeight*Math.sign(pieces[i].bottom),

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom)-neck,
          pieces[i].y+pieces[i].height+tabHeight*Math.sign(pieces[i].bottom)*0.2,

          pieces[i].x+pieces[i].width*Math.abs(pieces[i].bottom)-neck,
          pieces[i].y+pieces[i].height
        );
      }
      ctx.lineTo(pieces[i].x,pieces[i].y+pieces[i].height);

      //to top left
      if(pieces[i].left){
        ctx.lineTo(pieces[i].x,pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)+neck);

        ctx.bezierCurveTo(
          pieces[i].x+tabHeight*Math.sign(pieces[i].left)*0.2,
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)+neck,

          pieces[i].x+tabHeight*Math.sign(pieces[i].left),
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)+tabWidth,

          pieces[i].x+tabHeight*Math.sign(pieces[i].left),
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)
        );

        ctx.bezierCurveTo(
          pieces[i].x+tabHeight*Math.sign(pieces[i].left),
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)-tabWidth,

          pieces[i].x+tabHeight*Math.sign(pieces[i].left)*0.2,
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)-neck,

          pieces[i].x,
          pieces[i].y+pieces[i].height*Math.abs(pieces[i].left)-neck
        );
      }
      ctx.lineTo(pieces[i].x,pieces[i].y);

      ctx.save();
      ctx.clip();

      const scaledTabHeight=
			Math.min(image.width/col,
				image.height/row)*tabHeight/sz;

      pieces.scaledTabHeight = scaledTabHeight;
 
      pieces[i].imageX=pieces[i].j*image.width/col-scaledTabHeight;
      pieces[i].imageY=pieces[i].i*image.height/row-scaledTabHeight;
      
      ctx.drawImage(image,
        pieces[i].imageX,
        pieces[i].imageY,
        pieces[i].width+2*scaledTabHeight,
        pieces[i].height+2*scaledTabHeight,
        pieces[i].x-tabHeight,
        pieces[i].y-tabHeight,
        pieces[i].width+2*tabHeight,
        pieces[i].height+2*tabHeight);
      ctx.restore();
      ctx.stroke();
 // Dessine les bordures
    }
  }






  function IsFinish(){
    for (let i = 0; i < pieces.length; i++) {
      if (pieces[i].block == false) {
        return false;
      }
    };
    _IsFinish = true;
    return true;
  }

  canvas.addEventListener("mousedown", function(event) { //Fonction qui s'active quand on clique sur la pieces[i] 
    const mouseX = event.clientX - canvas.offsetLeft;
    const mouseY = event.clientY - canvas.offsetTop;


    pieces.forEach(function(piece) {
      if (mouseX >= piece.x && mouseX < piece.x + piece.width && mouseY >= piece.y && mouseY < piece.y + piece.height) {
        selectedPiece = piece;
        offsetX = mouseX - piece.x;
        offsetY = mouseY - piece.y;
        //put selectedPiece a the end of the array pieces
        if (selectedPiece.block == true) {
          return;
        }
        pieces.splice(pieces.indexOf(selectedPiece), 1);
        pieces.push(selectedPiece);
        drawPieces();
      }
    });
  });



  canvas.addEventListener("mousemove", function(event) { // lors du déplacement de la pieces[i]
    if (selectedPiece) {
      if (selectedPiece.block == true) {
        return;
      }
      const mouseX = event.clientX - canvas.offsetLeft;
      const mouseY = event.clientY - canvas.offsetTop;
      selectedPiece.x = mouseX - offsetX;
      selectedPiece.y = mouseY - offsetY;
      drawPieces();
    }
  });



  canvas.addEventListener("mouseup", function(event) {
    //Checker si la pieces[i] est bien placée
    if (selectedPiece) {
      if (selectedPiece.x >= selectedPiece.imageX  && selectedPiece.x < selectedPiece.imageX + selectedPiece.width && selectedPiece.y >= selectedPiece.imageY && selectedPiece.y < selectedPiece.height + selectedPiece.imageY) {
        selectedPiece.x = selectedPiece.imageX + selectedPiece.gap+19.200000000000003;
        selectedPiece.y = selectedPiece.imageY + selectedPiece.gap+19.200000000000003;
        console.log(selectedPiece.x, selectedPiece.y,selectedPiece.scaledTabHeight)
        selectedPiece.block = true;
  //put selectedPiece a the start of the array pieces
        pieces.splice(pieces.indexOf(selectedPiece), 1);
        pieces.unshift(selectedPiece);
      }
    }
    drawPieces();
    if (IsFinish() && win == false) {
        //timer de 1 seconde
        setTimeout(function(){
          win = true;
          alert("Bravo !")
        }, 50);
    }
    selectedPiece = null;
  });

  canvas.addEventListener("touchend", function(event) {
    selectedPiece = null;
  });

}
}

//Help : 
// https://www.youtube.com/watch?v=HS6KHYIYdXc&list=LL&index=3