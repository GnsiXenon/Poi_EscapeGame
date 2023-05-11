
import {inventory as _inventory} from "./Object.js";
import { actualRoom} from "./Level1_House.js";
import { ChildrenBedroom } from "./Level1_House.js";
import { LivingRoom } from "./Level1_House.js";
import { MasterBedroom } from "./Level1_House.js";
import { Library,CourtOffice,BreakRoom } from "./Level1_House.js";
import {ItemUse} from "./Hud.js"


export function ScriptHud(){

const map = document.getElementById("map");
const openMap = document.getElementById("openMap");

let inHand = null;






const itemChoose = [];

const inventory = document.getElementById("inventory");
const openInv = document.getElementById("openInv");

const background = document.getElementById("background");
const arrow = document.getElementById("arrow");
const game = document.getElementById("Game");

//afficher la navigation
map.addEventListener("click", function() {

  if (openMap.style.display === "flex") {
    openMap.style.display = "none";
    background.classList.remove("blur");
    arrow.classList.remove("blur");
    (game != null)?game.classList.remove("blur"):null;
    inventory.classList.remove("blur");
  }else{
    background.classList.add("blur");
    arrow.classList.add("blur");
    (game != null)?game.classList.add("blur"):null;
    inventory.classList.add("blur");
  openMap.style.display = "flex";
  
  }
  });


//afficher l'inventaire
inventory.addEventListener("click", function() {
  OpenInv();
});

function OpenInv(){
  if (openInv.style.display === "flex") {
    openInv.style.display = "none";
    background.classList.remove("blur");
    arrow.classList.remove("blur");
    (game != null)?game.classList.remove("blur"):null;
    map.classList.remove("blur");
  }else{
    background.classList.add("blur");
    arrow.classList.add("blur");
    (game != null)?game.classList.add("blur"):null;
    map.classList.add("blur");
  openInv.style.display = "flex";
  openInv.style.position = "absolute";
  }
}






const caseDivs = document.querySelectorAll(".case");

caseDivs.forEach(function(caseDiv) {
  caseDiv.addEventListener("click", function() {
     const imgElement = caseDiv.querySelector("img");
    if (imgElement) {
      if (caseDiv.classList.contains("use")) {
        itemChoose.splice(itemChoose.indexOf(caseDiv.getAttribute("id")), 1);
        caseDiv.classList.remove("use");
        ActionBtn();
      }else{
        if (itemChoose.length <= 1){
          itemChoose.push(caseDiv.getAttribute("id"));
          caseDiv.classList.add("use");
          ActionBtn();
        }else{
          alert("Vous ne pouvez pas choisir plus de deux objets");
        }
      }
      }
       else {
      console.log("La div avec la classe 'case' ne contient pas de balise img");
    }
  });
});




function ActionBtn(){
  if (itemChoose.length > 1){
    document.getElementById("dismantle").disabled = true;
    document.getElementById("dismantle").classList.add("blocked");
    document.getElementById("examine").disabled = true;
    document.getElementById("examine").classList.add("blocked");
    document.getElementById("use").disabled = true;
    document.getElementById("use").classList.add("blocked");
  }else{
    document.getElementById("dismantle").disabled = false;
    document.getElementById("dismantle").classList.remove("blocked");
    document.getElementById("examine").disabled = false;
    document.getElementById("examine").classList.remove("blocked");
    document.getElementById("use").disabled = false;
    document.getElementById("use").classList.remove("blocked");
  }
}



const caseAction = document.querySelectorAll(".caseAction");

caseAction.forEach(function(caseAction) {
  caseAction.addEventListener("click", function() {
    if (itemChoose.length == 2 && caseAction.getAttribute("id") == "combine") {
     const Object1 = itemChoose[0];
     const Object2 = itemChoose[1];   
     _inventory.CombineObject(Object1,Object2);
     RefreshPage();
    }else if (caseAction.getAttribute("id") == "dismantle"){
      const Object1 = itemChoose[0];
      _inventory.DismantleObject(Object1);
      RefreshPage();
    }else if (caseAction.getAttribute("id") == "examine"){
      const Object1 = itemChoose[0];
      _inventory.ExamineObject(Object1);
    }else if (caseAction.getAttribute("id") == "use"){
      inHand = itemChoose[0];
      for (let i = 0; i < _inventory.Length(); i++) {
        if (_inventory.Id(i) == inHand) {
          ItemUse(_inventory.Image(i));
          document.getElementById("UseItem").style.display = "flex";
        }
      }

    }
  });
});





// Sélectionner tous les éléments de la page
let elements = document.querySelectorAll('*');

// Ajouter un écouteur d'événements "click" à chaque élément
elements.forEach(function(element) {
  element.addEventListener('click', function(event) {
    // console.log(event.target.id, inHand);
    _inventory.ItemUse(inHand, event.target.id);
  });
});



}


export function removeInHand(){
  inHand = null;
}

export function RefreshPage() {
  switch (actualRoom) {
    case "ChildrenBedroom":
      ChildrenBedroom(); 
      break;
    case "MasterBedroom":
      MasterBedroom();
      break;
    case "LivingRoom":
      LivingRoom();
      break;
    case "Library":
      Library();
      break;
    case "CourtOffice":
      CourtOffice();
      break;
    case "BreakRoom":
      BreakRoom();
      break;
  }
}

export function changeMap(i){
  switch (i) {
    case 1:
      LivingRoom();
      break;
    case 2:
      Library();
      break;
    case 3:
      alert("Vous ne pouvez pas aller ici (WIP)");
      break;
  }
}



