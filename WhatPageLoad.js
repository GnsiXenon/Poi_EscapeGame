import { Intro } from "./Intro.js";
import { Level1 } from "./Level1.js";

var currentURL = window.location.href;

// Vérifiez si l'URL correspond à la page1.html
if (currentURL.indexOf("index.html") !== -1) {
    Intro();
} else if (currentURL.indexOf("Level1.html") !== -1) {
    // Code spécifique à la page2.html
    console.log("La page 2 est chargée !");
    Level1();
    // Appeler des fonctions spécifiques à la page2.html ou effectuer des actions supplémentaires
} else {
    // Code pour les autres pages (si nécessaire)
    console.log("Une autre page est chargée !");
}
