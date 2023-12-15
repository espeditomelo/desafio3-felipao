class hero {  

    constructor(heroName, heroAge, heroTypeSelected){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroTypeSelected = heroTypeSelected
    }   

}

const input = require("prompt-sync")({sigint: true})

let heroName
let heroAge
let heroTypes = ["mago", "guerreiro", "monge", "ninja"]
let heroTypeSelected
let answer = "s"

while (answer === "s" || answer === "S") {

    heroName = input("Insira o nome do herói: ")
    heroAge = input("Insira a idade do herói: ")    
    console.log()

    heroTypeSelected = heroTypes.length + 1    
    while (heroTypeSelected > heroTypes.length) {

        for (let index in heroTypes) {
            console.log(`${index}: ${heroTypes[index]}`)
        }

        heroTypeSelected = input("Selecione um tipo de herói: ")            
        
        if(heroTypeSelected > heroTypes.length){
            console.log()
            console.log("Atenção! Tipo de herói inválido.")
            console.log()
        }
    } 
    
    console.log()

    let heroAdventure = new hero(heroName, heroAge, heroTypeSelected)

    //tested
    console.log(heroAdventure.heroName + " "+ heroAdventure.heroAge + " " + heroTypeSelected)

    answer = input("Deseja definir aventura para mais um herói? (S/N)")

    console.log()
    

}


