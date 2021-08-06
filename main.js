const accessoConsentito = ["Marco", "Giovanni", "Laura", "Francesca", "Joele", "Michael", "John", "Gianmarco"];
let verificaAccesso = prompt("Inserisci il tuo nome");



for (i = 0; i < accessoConsentito.length; i++){
    if( verificaAccesso == accessoConsentito[i]){
        document.getElementById("accesso").innerHTML = "ACCESO CONSENTITO"
        break
    } else {
        document.getElementById("accesso").innerHTML = "ACCESO NEGATO"
    }
}


