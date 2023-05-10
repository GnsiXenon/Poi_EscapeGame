import { createHud } from "./Hud.js";
import { ScriptHud } from "./script.js";
import {inventory as _inventory,Level1} from "./Object.js";
import { RefreshPage } from "./script.js";

export let actualRoom = "";
let tc = false;
let pile = false;

/*



CHildrenBedroom





*/
export function ChildrenBedroom (){
actualRoom = "ChildrenBedroom"

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
ScriptHud();
}


/*


LivingRoom


*/

export function LivingRoom (){
    actualRoom = "LivingRoom"
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
document.body.appendChild(arrow)


telecommande();
Tv();





ScriptHud();
}


/*


MasterBedroom



*/



export function MasterBedroom (){
    actualRoom = "MasterBedroom"
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

const game = document.createElement('game');
game.setAttribute('id','Game')
game.style.display = 'flex';

document.body.appendChild(game);
Pile();

ScriptHud();
}


function telecommande(){
    if (tc == false){ 
    const telecommande = document.createElement('telecommande');
telecommande.setAttribute('id', 'telecommande');
const imgTelecommande = document.createElement('img');
imgTelecommande.setAttribute('id', 'telecommandeImg');
imgTelecommande.setAttribute('src', './img/object/telecommande/T-l-commande-pour-LG-3D-smart-LCD-TV-nouveaut.jpg_Q90.jpg_-removebg-preview.png');

telecommande.appendChild(imgTelecommande);

imgTelecommande.addEventListener("click", function() {
    _inventory.AddObject(Level1.find(element => element.Id == "Télecommande"));
    telecommande.style.display = "none";
    tc = true
    RefreshPage();
});

document.body.appendChild(telecommande);
    }
}

function Pile(){
    if (pile == false){ 
    const pile = document.createElement('pile');
pile.setAttribute('id', 'pile');
const imgPile = document.createElement('img');
imgPile.setAttribute('id', 'pileImg');
imgPile.setAttribute('src', './img/object/Pile/batteries-2109241_960_720.png');

pile.appendChild(imgPile);

imgPile.addEventListener("click", function() {
    _inventory.AddObject(Level1.find(element => element.Id == "Pile"));
    pile.style.display = "none";
    pile = true
    RefreshPage();

});

document.body.appendChild(pile);

    }

}


function Tv(){
    const tv = document.createElement('tv');
tv.setAttribute('id', 'tv');
document.body.appendChild(tv);


}