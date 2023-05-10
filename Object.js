import { PuzzleGame } from './PuzzleGame.js';
export class Object {
    Id =""
    Use = false; //boolean
    Dismantle = false; //boolean
    Combine = false; //boolean
    Examine = true; //boolean
    Description = ""; //string
    Name = ""; //string
    DismantleDrop = ""; //array
    CombineDrop = ""; //array
    ObjectUse = ""; //array
    ObjectCombine = ""; //array
    Image = ""; //string

    constructor(id,name, description,use, dismantle, combine, dismantleDrop, combineDrop, objectCombine, objectUse, image) {
        this.Id = id;
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


   

}

export class Inventory{
    _Inventory = []
    constructor(){
        this._Inventory = []
    }
    AddObject(Object){
        this._Inventory.push(Object);
    }
    RemoveObject(Object){
        this._Inventory.splice(this._Inventory.indexOf(Object), 1);
    }

    Length(){
        return this._Inventory.length;
    }

    get (){
        return this._Inventory;
    }

    Image(i){
        return this._Inventory[i].image;
    }

    Id(i){
        return this._Inventory[i].Id;
    }


    CombineObject(Object1,Object2){
        const _Object1 = this._Inventory.find(element => element.Id == Object1);
        const _Object2 = this._Inventory.find(element => element.Id == Object2);
         if (_Object1.ObjectCombine == _Object2.Id && _Object2.ObjectCombine == _Object1.Id){
            this.RemoveObject(_Object1);
            this.RemoveObject(_Object2);
            console.log(Level1)
            for (let i = 0; i < Level1.length; i++) {
                if (Level1[i].Id == _Object1.CombineDrop) {
                    this.AddObject(Level1[i]);
                    }
                }
         }else{
            alert("Vous ne pouvez pas combiner ces deux objets");
         }
}

    ItemUse(inHand,IdDiv){

        DivDynamic.forEach(element => {
            if (element == IdDiv) {
                const _Object = this._Inventory.find(element => element.Id == inHand);
                        console.log(_Object)
                        if (_Object.Use == true){
                            if (_Object.ObjectUse == IdDiv){
                                this.RemoveObject(_Object);
                                switch (IdDiv) {
                                    case "Télévision":
                                        alert("Vous avez gagné");
                                        break;
                                    case "Oreiller":
                                        break;
                                    case "Maison":
                                        break;
                                    case "puzzleImg":
                                        PuzzleGame();
                                        document.getElementById("UseItem").style.display = "none";
                                        break;
                                }
                            }
                        }
                    }
                });
    }
            
 
        

        
    




    DismantleObject(Object){
        const _Object = this._Inventory.find(element => element.Id == Object);
        if (_Object.Dismantle == true){
            this.RemoveObject(_Object);
            for (let i = 0; i < Level1.length; i++) {
                if (Level1[i].Id == _Object.DismantleDrop) {
                    this.AddObject(Level1[i]);
                    }
                }
        }else{
            alert("Vous ne pouvez pas démonter cet objet");
        }
    }

    ExamineObject(Object){
        const _Object = this._Inventory.find(element => element.Id == Object);
        alert("Object : "+ _Object.Name +" | Description : "+ _Object.Description);
    }
}

const DivDynamic = ["puzzleImg"]

const PieceDePuzzle = new Object("PieceDePuzzle","PieceDePuzzle", "Il doit manquer une piece de puzlle quelle que part",true, false, false,"", '', "", "puzzleImg","./img/object/PieceDePuzzle/768px-Puzzle.svg.png")
const Télécommande_Off = new Object("Télécommande_Off","Télécommande", "Une télécommande qui nécésite quelque chose pour fonctionner ",false, false, true, "", "Télécommande_On", "Pile", "","./img/object/telecommande/boyou-telecommande-de-remplacement-universelle-pou2-removebg-preview.png") 
const Télecommande = new Object("Télecommande","Télécommande", "Une télécommande pour la télevision ",false, true, false, "Télécommande_Off", "", "", "","./img/object/telecommande/boyou-telecommande-de-remplacement-universelle-pou-removebg-preview.png")
const Télécommande_On = new Object("Télécommande_On","Télécommande", "Une télécommande qui fonctionne ",true, false, false, "", "", "", "Télévision","./img/object/telecommande/boyou-telecommande-de-remplacement-universelle-pou3-removebg-preview.png")
const Pile =new Object("Pile","Pile", "Une pile de 9V",true, false, true, "", "Télécommande_On", "Télécommande_Off", "","./img/object/Pile/batteries-2109241_960_720.png")
const Ciseaux = new Object("Ciseaux","Ciseaux", "Des ciseaux",true, false, false, "", "", "", "Oreiller","./img/object/Ciseaux/14503.png")
const Clef = new Object("Clef","Clef", "Une clef",true, false, false, "", "", "", "Maison","./img/object/Clef/14080.png")
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


// inventory.AddObject(Pile);


// Name Description Use Dismantle Combine DismantleDrop CombineDrop ObjectCombine ObjectUse



