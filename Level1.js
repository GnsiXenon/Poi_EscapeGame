import {ChildrenBedroom} from './Level1_House.js';
import { createHud } from './Hud.js';
import { PuzzleGame } from './PuzzleGame.js';
import {Script} from './script.js';

// Level1();

// Obtenez l'URL de la page en cours



export function Level1() {
    createHud();
    ChildrenBedroom();
    Script();
    PuzzleGame();
    //add the script into the html in
    // const script = document.createElement('script');



    //Intro();
}
