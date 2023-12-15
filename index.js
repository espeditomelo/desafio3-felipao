// classe para instanciamentos dos objetos hero
class hero {  

    constructor(heroName, heroAge, heroTypeSelected){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroTypeSelected = heroTypeSelected
    }   

    showAttack(){
        console.log(`o ${heroTypes.types[heroTypeSelected]} atacou usando ${heroTypes.attacks[heroTypeSelected]}`)
    }    
}

//inicio
const input = require("prompt-sync")({sigint: true})

// variáveis globais
let heroName
let heroAge
//json para tipos de heróis
let heroTypes = {
    types: ["mago", "guerreiro", "monge", "ninja"],
    attacks: ["magia", "espada", "artes maciais","shuriken"]
}
let heroTypeSelected
let answer = "s"

console.log()
console.log("*** Herói x Aventura ***")

// laço para cadastrar heroi
while (answer === "s" || answer === "S") {

    console.log()
    heroName = input("Insira o nome do herói: ")
    console.log()
    heroAge = input("Insira a idade do herói: ")    
    console.log()

    heroTypeSelected = heroTypes.types.length 
    
    // laço para só permitir escolher o um tipo de herói válido
    while (heroTypeSelected > heroTypes.types.length - 1) {

        // for in para apresentar heróis conforme o json heroTypes
        for (let index in heroTypes.types) {
            console.log(`${index}: ${heroTypes.types[index]}`)
        }

        console.log()
        heroTypeSelected = input("Selecione um tipo de herói: ")            
        console.log()

        if(heroTypeSelected > heroTypes.types.length){
            console.log()
            console.log("Atenção! Tipo de herói inválido.")
            console.log()
        }
    } 

    // instancia objeto hero
    let heroAdventure = new hero(heroName, heroAge, heroTypeSelected)

    // executa método para apresentacao do resultado a partir do tipo de herói
    heroAdventure.showAttack();

    console.log()
    answer = input("Deseja definir aventura para mais um herói? (S/N)")  
}
