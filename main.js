// const accessoConsentito = ["Marco","Giovanni","Laura","Francesca","Joele","Michael","John","Gianmarco"];
// let verificaAccesso = prompt("Inserisci il tuo nome, se sei in lista potrei GIOCARE");
// let sceltaNumero;
// let playerTwo;
// let playerOne;

// for (i = 0; i < accessoConsentito.length; i++)


//     if(verificaAccesso == accessoConsentito[i]){
//         sceltaNumero =parseInt(prompt("Inserisci il tuo numero preferito"))
//         playerOne = parseInt(((Math.random()*sceltaNumero)+ 1))
//         playerTwo = parseInt(((Math.random()*sceltaNumero)+ 1))
//         document.getElementById("player-one").innerHTML = playerOne
//         document.getElementById("player-two").innerHTML = playerTwo

//         if (Number.isNaN(sceltaNumero)){
//             alert ("Ti ho detto di scegliere un NUMERO. Ora il computer sceglierà randomicamente un numero al posto tuo")
//             let playerOne = parseInt(((Math.random()*100) + 1))
//             let playerTwo = parseInt(((Math.random()*100) + 1))
//             document.getElementById("player-one").innerHTML = playerOne
//             document.getElementById("player-two").innerHTML = playerTwo
//                 if (playerOne > playerTwo){
//                     document.getElementById("risultato-si").innerHTML = "HAI VINTOOOO"
//                 } else if (playerOne < playerTwo){
//                     document.getElementById("risultato-no").innerHTML = "Andrà meglio la prossima volta :("
//                 } else if(playerOne = playerTwo){
//                     document.getElementById("risultato").innerHTML = "BRAVI TUTTIIIIII"
//                 }
//         }
//     }



//     if (playerOne > playerTwo){
//         document.getElementById("risultato-si").innerHTML = "HAI VINTOOOO"
//     } else if (playerOne < playerTwo){
//         document.getElementById("risultato-no").innerHTML = "Andrà meglio la prossima volta :("
//     } else if(playerOne = playerTwo){
//         document.getElementById("risultato").innerHTML = "BRAVI TUTTIIIIII"
//     }
    






// const accessoConsentito = ["Marco","Giovanni","Laura","Francesca","Joele","Michael","John","Gianmarco"]
const accessoConsentito = ["Marco","Giovanni","Laura","Francesca","Joele","Michael","John","Gianmarco"];
const validazione = a => a === verificaAccesso;
let verificaAccesso = prompt("Inserisci il tuo nome, se sei in lista potrei GIOCARE");
let sceltaNumero;
let playerTwo;
let playerOne;
// for (i = 0; i < accessoConsentito.length; i++);
// let tig = verificaAccesso == accessoConsentito[i];


    if(accessoConsentito.some(validazione)){
        sceltaNumero =parseInt(prompt("Inserisci il tuo numero preferito"))
        playerOne = parseInt(((Math.random()*sceltaNumero)+ 1))
        playerTwo = parseInt(((Math.random()*sceltaNumero)+ 1))
        document.getElementById("player-one").innerHTML = playerOne
        document.getElementById("player-two").innerHTML = playerTwo
        document.getElementById("accesso-si").innerHTML = "ACCESSO CONSENTITO"

        if (Number.isNaN(sceltaNumero)){
            alert ("Ti ho detto di scegliere un NUMERO. Ora il computer sceglierà randomicamente un numero al posto tuo")
            playerOne = parseInt(((Math.random()*100) + 1))
            playerTwo = parseInt(((Math.random()*100) + 1))
            document.getElementById("player-one").innerHTML = playerOne
            document.getElementById("player-two").innerHTML = playerTwo
                if (playerOne > playerTwo){
                    document.getElementById("risultato-si").innerHTML = "HAI VINTOOOO"
                } else if (playerOne < playerTwo){
                    document.getElementById("risultato-no").innerHTML = "Andrà meglio la prossima volta :("
                } else if(playerOne = playerTwo){
                    document.getElementById("risultato").innerHTML = "BRAVI TUTTIIIIII"
                }
        }

    if (playerOne > playerTwo){
                document.getElementById("risultato-si").innerHTML = "HAI VINTOOOO"
            } else if (playerOne < playerTwo){
                document.getElementById("risultato-no").innerHTML = "Andrà meglio la prossima volta :("
            } else if(playerOne = playerTwo){
                document.getElementById("risultato").innerHTML = "BRAVI TUTTIIIIII"
            }
    } else{
        document.getElementById("accesso").innerHTML = "ACCESSO NON CONSENTITO"
    } 



