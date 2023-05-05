import {ChildrenBedroom} from './Level1_House.js';
import { createHud } from './Hud.js';
import { PuzzleGame } from './PuzzleGame.js';
import {Script} from './script.js';

export function Level1() {
    createHud();
    ChildrenBedroom();
    PuzzleGame();
    Script();
    //add the script into the html in
    // const script = document.createElement('script');



    //Intro();
}