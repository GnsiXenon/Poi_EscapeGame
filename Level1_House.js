import { createHud } from "./Hud.js";


export function ChildrenBedroom (){
console.log("ChildrenBedroom")

const parentElement = document.body; // Or any other parent element you want to target
while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}


createHud();
const background = document.createElement('background');
background.setAttribute('id', 'background');

const imgBackground = document.createElement('img');
imgBackground.setAttribute('src', './img/background/Level_1/House/1.png');
imgBackground.setAttribute('id', 'backgroundImg');

background.appendChild(imgBackground);

document.body.appendChild(background);

const arrow = document.createElement('arrow');
arrow.setAttribute('id', 'arrow');


const leftArrow = document.createElement("i")
// leftArrow.setAttribute('class', 'fas fa-arrow-left fa-4x');
// leftArrow.setAttribute('id', 'leftArrow');

const rightArrow = document.createElement("i")
rightArrow.setAttribute('class', 'fas fa-arrow-right fa-4x');
rightArrow.setAttribute('id', 'rightArrow');
//ajoute un event listener sur le rightArrow
rightArrow.addEventListener("click", function() {
    LivingRoom();
});


arrow.appendChild(leftArrow);
arrow.appendChild(rightArrow);


arrow.appendChild(rightArrow);

document.body.appendChild(arrow);


const game = document.createElement('game');
game.setAttribute('id','Game')
game.style.display = 'flex';


const puzzle = document.createElement('puzzle');
puzzle.setAttribute('id', 'puzzle');

const imgPuzzle = document.createElement('img');
imgPuzzle.setAttribute('src', './img/arton7090-db331-removebg-preview.png');
imgPuzzle.setAttribute('id', 'puzzleImg');

puzzle.appendChild(imgPuzzle);

const canvas = document.createElement('canvas');
canvas.setAttribute('id', 'Puzzle');
canvas.setAttribute('width', '720');
canvas.setAttribute('height', '480');


puzzle.appendChild(canvas);


const cross = document.createElement('cross');
cross.setAttribute('id', 'cross');
cross.setAttribute('class', 'fas fa-times fa-3x');

game.appendChild(cross);

game.appendChild(puzzle);


document.body.appendChild(game);
}




export function LivingRoom (){
    console.log("LivingRoom")
    const parentElement = document.body; // Or any other parent element you want to target
while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}


createHud();

const background = document.createElement('background');
background.setAttribute('id', 'background');

const imgBackground = document.createElement('img');
imgBackground.setAttribute('src', './img/background/Level_1/House/2.png');
imgBackground.setAttribute('id', 'backgroundImg');

background.appendChild(imgBackground);

document.body.appendChild(background);

const arrow = document.createElement('arrow');
arrow.setAttribute('id', 'arrow');


const leftArrow = document.createElement("i")
leftArrow.setAttribute('class', 'fas fa-arrow-left fa-4x');
leftArrow.setAttribute('id', 'leftArrow');
//ajoute un event listener sur le leftArrow
leftArrow.addEventListener("click", function() {
    ChildrenBedroom();
});

const rightArrow = document.createElement("i")
rightArrow.setAttribute('class', 'fas fa-arrow-right fa-4x');
rightArrow.setAttribute('id', 'rightArrow');
//ajoute un event listener sur le rightArrow
rightArrow.addEventListener("click", function() {
    MasterBedroom();
});


arrow.appendChild(leftArrow);
arrow.appendChild(rightArrow);

document.body.appendChild(arrow);
}






function MasterBedroom (){

    console.log("MasterBedroom")
    const parentElement = document.body; // Or any other parent element you want to target
while (parentElement.firstChild) {
    parentElement.removeChild(parentElement.firstChild);
}

createHud();


const background = document.createElement('background');
background.setAttribute('id', 'background');

const imgBackground = document.createElement('img');
imgBackground.setAttribute('src', './img/background/Level_1/House/3.png');
imgBackground.setAttribute('id', 'backgroundImg');

background.appendChild(imgBackground);

document.body.appendChild(background);

const arrow = document.createElement('arrow');
arrow.setAttribute('id', 'arrow');


const leftArrow = document.createElement("i")
leftArrow.setAttribute('class', 'fas fa-arrow-left fa-4x');
leftArrow.setAttribute('id', 'leftArrow');
//ajoute un event listener sur le leftArrow
leftArrow.addEventListener("click", function() {
    LivingRoom();
});


// const rightArrow = document.createElement("i")
// rightArrow.setAttribute('class', 'fas fa-arrow-right fa-4x');
// rightArrow.setAttribute('id', 'rightArrow');


arrow.appendChild(leftArrow);
// arrow.appendChild(rightArrow);

document.body.appendChild(arrow);
}