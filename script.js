"use strict"

let currentElement = document.getElementById("password");
let currentText = currentElement.innerHTML;

// Taking data from the user
const userName = prompt("Inserisci il tuo nome");
const userLastName = prompt("Inserisci il tuo cognome");
const userColor = prompt("Inserisci il tuo colore preferito");
const maxNum = prompt("Inserisci un numero massimo");

// Generating a random integer between 1 and maxNum
let number = Math.floor(Math.random() * maxNum) + 1;

// Generating password
const password = `${userName} ${userLastName} ${userColor} ${number}`;

// Printing password in document
currentText = `${currentText} ${password}`;
currentElement.innerHTML = currentText;

// Printing password in console
console.log(password);
