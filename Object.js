export class Object {
    Use = false; //boolean
    Dismantle = false; //boolean
    Combine = false; //boolean
    Examine = true; //boolean
    Description = ""; //string
    Name = ""; //string
    DismantleDrop = []; //array
    CombineDrop = []; //array
    ObjectUse = []; //array
    ObjectCombine = []; //array

    constructor(name, description,use, dismantle, combine, dismantleDrop, combineDrop, objectCombine, objectUse) {
        this.Name = name;
        this.Description = description;
        this.Use = use;
        this.Dismantle = dismantle;
        this.Combine = combine;
        this.DismantleDrop = dismantleDrop;
        this.CombineDrop = combineDrop;
        this.ObjectCombine = objectCombine;
        this.ObjectUse = objectUse;
       
    }


    DismantleObject() {
        if (this.Dismantle == true) {
            return true, this.DismantleDrop;
        }
        return false , null;
    }


    UseObject(Object) {
        if (this.Use == true && this.ObjectUse.includes(Object)) {
            return true
        }
        return false;
    }


    CombineObject(Object) {
        if (this.Combine == true && this.ObjectCombine.includes(Object)) {
            return true , this.CombineDrop;
        }
        return false , null;
    }


}

const Level1 = [
    PieceDePuzzle = new Object("PieceDePuzzle", "Il doit manquer une piece de puzlle quelle que part",true, false, false,[], [], [], ["Puzzle"]),
    Pile =new Object("Pile", "Une pile de 9V",true, false, true, [], [Télécommande_On], [Télécommande_Off], []),
    Télecommande = new Object("Télécommande", "Une télécommande pour la télevision ",false, true, false, [Télécommande_Off], [], [], []),
    Télécommande_Off = new Object("Télécommande", "Une télécommande qui nécésite quelque chose pour fonctionner ",false, false, true, [], [Télécommande_On], [Pile], []),
    Télécommande_On = new Object("Télécommande", "Une télécommande qui fonctionne ",true, false, false, [], [], [], ["Télévision"]),
    Ciseaux = new Object("Ciseaux", "Des ciseaux",true, false, false, [], [], [], ["Oreiller"]),
    Clef = new Object("Clef", "Une clef",true, false, false, [], [], [], ["Maison"]),
]

            // Name Description Use Dismantle Combine DismantleDrop CombineDrop ObjectCombine ObjectUse