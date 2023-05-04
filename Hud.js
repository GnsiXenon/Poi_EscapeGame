export function createHud (){

// Créer le nav element
const nav = document.createElement('nav');
nav.setAttribute('id', 'nav');

// Créer le map div
const mapDiv = document.createElement('div');
mapDiv.setAttribute('id', 'map');

// Créer l'img element pour la carte
const mapImg = document.createElement('img');
mapImg.setAttribute('src', './img/cartoon-map-euclidean-vector-tourist-map-vector-map-depositphotos-bgremover.png');
mapImg.setAttribute('class', 'map-img');
mapImg.setAttribute('alt', 'map');

// Ajouter la carte à la div map
mapDiv.appendChild(mapImg);

// Ajouter l'openMap div au nav
nav.appendChild(mapDiv);

// Créer l'openMap div
const openMapDiv = document.createElement('div');
openMapDiv.setAttribute('id', 'openMap');

// Créer les trois environnements
for (let i = 1; i <= 3; i++) {
  const envDiv = document.createElement('div');
  envDiv.setAttribute('id', `env${i}`);
  envDiv.setAttribute('class', 'box');

  const imgEnv = document.createElement('img');
  imgEnv.setAttribute('src', `/img/background/Level_1/House/${i}.png`);
  imgEnv.setAttribute('class', 'imgEnv');

  const spanLoc = document.createElement('span');
  spanLoc.setAttribute('class', 'Location');

  const pLoc = document.createElement('p');
  pLoc.setAttribute('class', 'textLocation');
  pLoc.textContent = 'House';

  spanLoc.appendChild(pLoc);
  envDiv.appendChild(imgEnv);
  envDiv.appendChild(spanLoc);

  openMapDiv.appendChild(envDiv);
}

// Ajouter l'openMap div au nav
nav.appendChild(openMapDiv);

// Créer l'inventaire
const invDiv = document.createElement('div');
invDiv.setAttribute('id', 'inventory');

const invImg = document.createElement('img');
invImg.setAttribute('src', './img/pngwing.com.png');
invImg.setAttribute('class', 'backpack');
invImg.setAttribute('alt', 'sac');

invDiv.appendChild(invImg);

// Ajouter l'inventaire au nav
nav.appendChild(invDiv);

// Créer l'openInv div
// Création de la div qui contiendra l'inventaire
const openInv = document.createElement("div");
openInv.id = "openInv";

// Création de la div qui contiendra toutes les cases de l'inventaire
const allCase = document.createElement("div");
allCase.id = "allCase";
openInv.appendChild(allCase);

// Création des cases de l'inventaire
for (let i = 1; i <= 14; i++) {
  const invCase = document.createElement("div");
  invCase.classList.add("case");
  if (i <= 2) { //Item dans l'inventaire 
    invCase.classList.add("notEmpty");
    const img = document.createElement("img");
    img.src = "./img/pngwing.com.png";
    invCase.appendChild(img);
  }
  allCase.appendChild(invCase);
}

// Création de la div qui contiendra les actions de l'inventaire
const action = document.createElement("div");
action.id = "action";
openInv.appendChild(action);

// Création des cases d'action de l'inventaire
const use = document.createElement("div");
use.id = "use";
use.classList.add("caseAction");
const useText = document.createElement("p");
useText.classList.add("textPolice");
useText.textContent = "USE";
use.appendChild(useText);
action.appendChild(use);

const combine = document.createElement("div");
combine.id = "combine";
combine.classList.add("caseAction");
const combineText = document.createElement("p");
combineText.classList.add("textPolice");
combineText.textContent = "COMBINE";
combine.appendChild(combineText);
action.appendChild(combine);

const dismantle = document.createElement("div");
dismantle.id = "dismantle";
dismantle.classList.add("caseAction");
const dismantleText = document.createElement("p");
dismantleText.classList.add("textPolice");
dismantleText.textContent = "DISMANTLE";
dismantle.appendChild(dismantleText);
action.appendChild(dismantle);

const examine = document.createElement("div");
examine.id = "examine";
examine.classList.add("caseAction");
const examineText = document.createElement("p");
examineText.classList.add("textPolice");
examineText.textContent = "EXAMINE";
examine.appendChild(examineText);
action.appendChild(examine);

// Ajout de la div contenant l'inventaire à la navigation
nav.appendChild(openInv);

// Ajout de la navigation au body du document
document.body.appendChild(nav);


}