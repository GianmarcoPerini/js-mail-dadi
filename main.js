const accessoConsentito = ["Marco", "Giovanni", "Laura", "Francesca", "Joele", "Michael", "John", "Gianmarco"];
let verificaAccesso = prompt("Inserisci il tuo nome");
let playerTwo;
let playerOne;

for (i = 0; i < accessoConsentito.length; i++){
    if(verificaAccesso == accessoConsentito[i]){
        let sceltaNumero =parseInt(prompt("scegli un numero a tuo piacimento"))
        playerOne = parseInt(((Math.random()*sceltaNumero)+ 1))
        playerTwo = parseInt(((Math.random()*sceltaNumero)+ 1))
        document.getElementById("player-one").innerHTML = playerOne
        document.getElementById("player-two").innerHTML = playerTwo
    } else if(playerOne > playerTwo){
        document.getElementById("risultato").innerHTML = "HAI VINTOOOO"
    } else if (playerOne < playerTwo){
        document.getElementById("risultato").innerHTML = "Andrà meglio la prossima volta :("
    } else if(playerOne = playerTwo){
        document.getElementById("risultato").innerHTML = "BRAVI TUTTIIIIII"
    }
}