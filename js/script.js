/* CREARE FORM REGISTRAZIONE
NOME COGNOME ETA MAIL
AL CLICK VEDERE A VIDEO I DATI */

/* RANGE DI ANNI CON SOTTRAZIONE
CALCOLARE QUANDO SI VA IN PENSIONE QUANTO MANCA
EX. 70 ANNI 
SORTA DI CALCOLATRICE CON 2 NUMERI 
70-32 STAMPA RISULTATO */

/* 

form NOME COGNOME ETA CITTA MAIL

p NOME form -
COGNOME -
ETA -
CITTA -
MAIL -
PENSIONE TRA - 
_________________

form NUM1 NUM2      bottoni  +    -   *   / 
RISULTATO

*/

function func1 () {
    let nome = document.getElementById('nome').value;
    console.dir(nome);
    document.getElementById('datinome').innerHTML = nome;
}
function func2 () {
    let cognome = document.getElementById('cognome').value;
    console.dir(cognome);
    document.getElementById('daticognome').innerHTML = cognome;

}
function func3 () {
    let eta = document.getElementById('eta').value;
    console.dir(eta);
    document.getElementById('datieta').innerHTML = eta;
    func6(eta);
}
function func4 () {
    let citta = document.getElementById('citta').value;
    console.dir(citta);
    document.getElementById('daticitta').innerHTML = citta;

}
function func5 () {
    let email = document.getElementById('email').value;
    console.dir(email);
    document.getElementById('datiemail').innerHTML = email;

}
function func6 (eta) {          //NON FUNZIONA
    let pensione = 70 - eta;
    document.getElementById('datipensione').innerHTML = pensione;

}


