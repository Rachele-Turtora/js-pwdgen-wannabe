"use strict"

// Taking data from the user
const userName = prompt("Inserisci il tuo nome")
const userLastName = prompt("Inserisci il tuo cognome")
const userColor = prompt("Inserisci il tuo colore preferito")

let password = `${userName} ${userLastName} ${userColor} 21`

// Printing password in document
document.getElementById("password").innerHTML = password

// Printing password in console
console.log(password)