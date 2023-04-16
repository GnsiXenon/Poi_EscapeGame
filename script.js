let itemChoose = 0;



const inventory = document.getElementById("inventory");
const openInv = document.getElementById("openInv");

inventory.addEventListener("click", function() {
  if (openInv.style.display === "flex") {
    openInv.style.display = "none";
  }else{
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
  }else{
    document.getElementById("dismantle").disabled = false;
    document.getElementById("dismantle").classList.remove("blocked");
    document.getElementById("examine").disabled = false;
    document.getElementById("examine").classList.remove("blocked");
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
