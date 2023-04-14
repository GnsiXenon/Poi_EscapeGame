const openInv = document.getElementById("inventory");

openInv.addEventListener("click", function() {
  const inv = document.getElementById("openInv");
  if (inv.style.display === "flex") {
    inv.style.display = "none";
  }else{
    inv.style.display = "flex";
  inv.style.position = "absolute";
  }
  
});
