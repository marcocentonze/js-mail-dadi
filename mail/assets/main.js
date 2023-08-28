/*  -Mail
Chiedi all'utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
Bonus:
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.*/



// chiedi all’utente la sua email
const userEmail = prompt("Inserisci la tua email");
// Seleziona l'elemento bottone
const verificaBtn = document.getElementById("verifica");

//creo l'evento cliccabile sul bottone
verificaBtn.addEventListener("click", function() {
    const userEmail = document.getElementById("email").value;//.value per ottenere il valore messo dall'utente

// creo array dove dichiaro tutte le email che sono sulla lista
 const emailList = ['luca.java@gmail.com','alessia.java@gmail.com','filippo.java@gmail.com','giovanni.java@gmail.com'];

 // variabile per capire se l'utente è stato trovato nella lista
let utenteTrovato = false; //nella condizione cambierà valore


// controlla che sia nella lista di chi può accedere
for (let i = 0; i < emailList.length; i++) {
    const utente = emailList[i];


    if (utente === userEmail) {
        utenteTrovato = true;
        document.getElementById("risultato").textContent = "Complimenti, fai parte della lista!";
       // console.log("Complimenti, fai parte della lista!"); // stampa in console risultato positivo
    } else {
        document.getElementById("risultato").textContent = "Mi dispiace, non fai parte della lista!";
       // console.log('Mi dispiace,non fai parte della lista');// stampa in console risultato negativo
    }

  }
});

