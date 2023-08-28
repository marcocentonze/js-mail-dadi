/*
-Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. Stabilire il vincitore, in base a chi fa il punteggio più alto.
Prima di partire a scrivere codice poniamoci qualche domanda: Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve? */

//ottengo l'id
const diceRoll = document.getElementById("roll");

//inserisco evento al clicco del bottone
diceRoll.addEventListener('click',
function() {

    //funzione per avere i numeri casuali da 1 a 6(si parte da 0)
  let playerRoll = Math.floor(Math.random()*6) + 1;
  let computerRoll = Math.floor(Math.random()*6) + 1;
  
//condizione se vinco,se perdo,se faccio pareggio
  if (playerRoll > computerRoll) {
    risultato = 'Hai vinto!' 
} else if (playerRoll < computerRoll) {
    risultato = 'Hai perso!Riprova,sarai più fortunato'
} else if (playerRoll == computerRoll) {
    risultato = 'Hai pareggiato!Peccato,eri vicino.'
  }

  //inserisco in pagina
  document.getElementById('player').innerHTML = ('Tu: ') + (playerRoll);// aggiungere colori ai risultati per farlo più carino
  document.getElementById('computer').innerHTML = ('Il tuo avversario: ') + (computerRoll);
  document.getElementById('risultato').innerHTML = risultato;

}
);