
export function DisplayLevel (Level){
    switch (Level){
        case 1:
            const parentElement = document.body; // Or any other parent element you want to target
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
            location.href = "Level1.html"
            break
        case 2:
            console.log("Level 2")
            break
        case 3:
            console.log("Level 3")
            break
}

}