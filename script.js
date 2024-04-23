"use strict"

// Taking data from the user
const userName = prompt("Inserisci il tuo nome");
const userLastName = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");

// Generating a random integer between 1 and 100
let number = Math.floor(Math.random() * 100) + 1;

let password = `${userName} ${userLastName} ${userColor} ${number}`;

// Printing password in document
document.getElementById("password").innerHTML = password;

// Printing password in console
console.log(password);