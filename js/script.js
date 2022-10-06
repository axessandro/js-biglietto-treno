// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.

// ask km
const kmToDo = parseInt(prompt("Inserisci il numero di chilometri da percorrere"));
console.log(kmToDo, typeof(kmToDo), "km");
// ask passenger age
const age = parseInt(prompt("Inserisci l'età del passeggero"));
console.log(age, typeof(age), "age");

// calculate full-price ticket 
const fullPrice = kmToDo * 0.21;
console.log(fullPrice, typeof(fullPrice), "full price");

// DISCOUNTED PRICE
// SE age è minore a 18
    // fullPrice * 0.8
// SE age è maggiore a 65
    // fullPrice * 0.6

if (age < 18){
    const result18 = fullPrice * 0.8;
    const price18 = result18.toFixed(2);
    console.log(price18, "under18 price");
    alert(`Il prezzo scontato del biglietto è: ${price18}€`);
}else if (age > 65){
    const result65 = fullPrice * 0.6;
    const price65 = result65.toFixed(2);
    console.log(price65, "over65 price");
    alert(`Il prezzo scontato del biglietto è: ${price65}€`);
} else {
    alert(`Il prezzo del biglietto è: ${fullPrice}€`);
}