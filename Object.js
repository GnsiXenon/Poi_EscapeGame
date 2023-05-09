
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
    Image = ""; //string

    constructor(name, description,use, dismantle, combine, dismantleDrop, combineDrop, objectCombine, objectUse, image) {
        this.Name = name;
        this.Description = description;
        this.Use = use;
        this.Dismantle = dismantle;
        this.Combine = combine;
        this.DismantleDrop = dismantleDrop;
        this.CombineDrop = combineDrop;
        this.ObjectCombine = objectCombine;
        this.ObjectUse = objectUse;
        this.image = image;
       
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

export class Inventory{
    Inventory = [];
    constructor(){
        this.Inventory = [];
    }
    AddObject(Object){
        this.Inventory.push(Object);
    }
    RemoveObject(Object){
        this.Inventory.splice(this.Inventory.indexOf(Object), 1);
    }

    Length(){
        return this.Inventory.length;
    }

    Image(i){
        console.log(this.Inventory[i].Image, i);
        return this.Inventory[i].image;
    }
}

const PieceDePuzzle = new Object("PieceDePuzzle", "Il doit manquer une piece de puzlle quelle que part",true, false, false,[], [], [], ["Puzzle"],"")
const Télécommande_Off = new Object("Télécommande", "Une télécommande qui nécésite quelque chose pour fonctionner ",false, false, true, [], ["Télécommande_On"], ["Pile"], [],"./img/object/telecommande/boyou-telecommande-de-remplacement-universelle-pou2-removebg-preview.png") 
const Télecommande = new Object("Télécommande", "Une télécommande pour la télevision ",false, true, false, ["Télécommande_Off"], [], [], [],"./img/object/telecommande/boyou-telecommande-de-remplacement-universelle-pou-removebg-preview.png")
const Télécommande_On = new Object("Télécommande", "Une télécommande qui fonctionne ",true, false, false, [], [], [], ["Télévision"],"./img/object/telecommande/boyou-telecommande-de-remplacement-universelle-pou3-removebg-preview.png")
const Pile =new Object("Pile", "Une pile de 9V",true, false, true, [], ["Télécommande_On"], ["Télécommande_Off"], [],"./img/object/Pile/batteries-2109241_960_720.webp")
const Ciseaux = new Object("Ciseaux", "Des ciseaux",true, false, false, [], [], [], ["Oreiller"],"")
const Clef = new Object("Clef", "Une clef",true, false, false, [], [], [], ["Maison"],"")
export const Level1 = [
    PieceDePuzzle,
    Pile,
    Télecommande,
    Télécommande_Off,
    Télécommande_On,
    Ciseaux,
    Clef
]

export const inventory = new Inventory();

// inventory.AddObject(Télecommande);
// inventory.AddObject(Télécommande_Off);
// inventory.AddObject(Télécommande_On);
// inventory.AddObject(Pile);

// Name Description Use Dismantle Combine DismantleDrop CombineDrop ObjectCombine ObjectUse



