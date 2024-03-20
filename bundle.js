(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// get the text from the text input field when the submit button is clicked 

var userYear = ``;
var output;

async function getUserYear() {
    userYear = document.getElementById('userYear').value;
    console.log(userYear);

    //transfer the text value into the API Url and get the generated text for the label from the api and save it in a variable
    const response = await fetch(`http://numbersapi.com/${userYear}/year?json`);
    output = await response.json();

    //display the generated text from the api in the label on the webpage
    refreshLabel();
}

function refreshLabel () {
   const label = document.getElementById('outputLabel');
   label.textContent = output.text;
}

document.getElementById('submitButton').addEventListener('click', getUserYear);





},{}]},{},[1]);
