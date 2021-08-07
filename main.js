const accessoConsentito = ["Marco","Giovanni","Laura","Francesca","Joele","Michael","John","Gianmarco"];
const validazione = a => a === verificaAccesso;
let verificaAccesso = prompt("Inserisci il tuo nome, se sei in lista potrei GIOCARE");
let sceltaNumero;
let playerTwo;
let playerOne;



    if(accessoConsentito.some(validazione)){
        document.getElementById("accesso-si").innerHTML = "ACCESSO CONSENTITO"
        sceltaNumero =parseInt(prompt("Inserisci il tuo numero preferito"))
        playerOne = parseInt(((Math.random()*sceltaNumero)+ 1))
        playerTwo = parseInt(((Math.random()*sceltaNumero)+ 1))
        document.getElementById("player-one").innerHTML = playerOne
        document.getElementById("player-two").innerHTML = playerTwo
    } else {
        document.getElementById("accesso").innerHTML = "ACCESSO NON CONSENTITO"
    }

    if (Number.isNaN(sceltaNumero)){
        alert ("Ti ho detto di scegliere un NUMERO. Ora il computer sceglierà randomicamente un numero al posto tuo")
        playerOne = parseInt(((Math.random()*100) + 1))
        playerTwo = parseInt(((Math.random()*100) + 1))
        document.getElementById("player-one").innerHTML = playerOne
        document.getElementById("player-two").innerHTML = playerTwo
    }

    if (playerOne > playerTwo){
        document.getElementById("risultato-si").innerHTML = "HAI VINTOOOO"
    } else if (playerOne < playerTwo){
        document.getElementById("risultato-no").innerHTML = "Andrà meglio la prossima volta :("
    } else if(playerOne = playerTwo){
        document.getElementById("risultato").innerHTML = "BRAVI TUTTIIIIII"
    }