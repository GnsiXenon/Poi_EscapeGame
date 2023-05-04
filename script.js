import { createHud } from "./Hud.js";
const map = document.getElementById("map");
const openMap = document.getElementById("openMap");





let itemChoose = 0;

const inventory = document.getElementById("inventory");
const openInv = document.getElementById("openInv");

//afficher la navigation
map.addEventListener("click", function() {

  if (openMap.style.display === "flex") {
    openMap.style.display = "none";
  }else{
    console.log("test");
  openMap.style.display = "flex";
  }
  });


//afficher l'inventaire
inventory.addEventListener("click", function() {
  if (openInv.style.display === "flex") {
    openInv.style.display = "none";
  }else{
    console.log("test1");
  openInv.style.display = "flex";
  openInv.style.position = "absolute";
  }

});




const caseDivs = document.querySelectorAll(".case");

caseDivs.forEach(function(caseDiv) {
  caseDiv.addEventListener("click", function() {
    var imgElement = caseDiv.querySelector("img");
    if (imgElement) {
      if (caseDiv.classList.contains("use")) {
        itemChoose -= 1;
        caseDiv.classList.remove("use");
        ActionBtn();
      }else{
        caseDiv.classList.add("use");
        itemChoose += 1;
        ActionBtn();
        start();
      }
      }
       else {
      console.log("La div avec la classe 'case' ne contient pas de balise img");
    }
  });
});


function ActionBtn(){
  if (itemChoose > 1){
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

      if (itemChoose > 1){
        if (caseAction === document.getElementById("dismantle") || caseAction === document.getElementById("examine")){
          return false;
        }
      }

      if (caseAction.classList.contains("use")) {
        caseAction.classList.remove("use");
      }else{
        caseAction.classList.add("use");
      }

      
  });
});





const rightArrow = document.getElementById("rightArrow"); 


rightArrow.addEventListener("click", function() {
  const parentElement = document.body; // Or any other parent element you want to target
while (parentElement.firstChild) {
  parentElement.removeChild(parentElement.firstChild);
}
  createHud();

});

