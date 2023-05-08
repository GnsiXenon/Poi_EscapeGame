
export function DisplayLevel (Level){
    const parentElement = document.body; // Or any other parent element you want to target
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
    switch (Level){
        case 1:
            location.href = "test.html"
            break
        case 2:
            console.log("Level 2")
            break
        case 3:
            console.log("Level 3")
            break
}

}