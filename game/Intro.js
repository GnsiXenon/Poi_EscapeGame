import { DisplayLevel } from "./ChooseLevel.js";

export function Intro (){

    document.body.style.backgroundColor = "black";

   // create a new paragraph element
const paragraph = document.createElement('p');
paragraph.style.color = "white";
paragraph.style.fontSize = "50px";
paragraph.style.textAlign = "center";
paragraph.style.marginTop = "200px";

// create a new text node with the content you want to add
const text = document.createTextNode('Voici le Menu du jeux, Selectionner votre niveau');

// add the text node to the paragraph element
paragraph.appendChild(text);

// add the paragraph element to the document
document.body.appendChild(paragraph);


const Levels = document.createElement('Levels');

Levels.style.display = "flex";
Levels.style.justifyContent = "center";
Levels.style.marginTop = "100px";
Levels.style.color = "white";
Levels.style.fontSize = "25px";
Levels.style.gap = "50px";



const Level1 = document.createElement('Level1');

const Level1Text = document.createTextNode('Level 1');

Level1.addEventListener("click", function() {
    DisplayLevel(1);
});

Level1.appendChild(Level1Text);

Levels.appendChild(Level1);



const Level2 = document.createElement('Level2');

const Level2Text = document.createTextNode('Level 2');

Level2.addEventListener("click", function() {
    DisplayLevel(2);
});


Level2.appendChild(Level2Text);

Levels.appendChild(Level2);


const Level3 = document.createElement('Level3');

const Level3Text = document.createTextNode('Level 3');

Level3.addEventListener("click", function() {
    DisplayLevel(3);
});


Level3.appendChild(Level3Text);

Levels.appendChild(Level3);

document.body.appendChild(Levels);
}

