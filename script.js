// get the text from the text input field when the submit button is clicked 

var userYear = ``;
var output;

async function getUserYear() {
    userYear = document.getElementById('userYear').value;
    console.log(userYear);

    //transfer the text value into the API Url and get the generated text for the label from the api and save it in a variable
    const response = await fetch(`https://numbersapi.com/${userYear}/year?json`);
    output = await response.json();

    //display the generated text from the api in the label on the webpage
    refreshLabel();
}

function refreshLabel () {
   const label = document.getElementById('outputLabel');
   label.textContent = output.text;
}

document.getElementById('submitButton').addEventListener('click', getUserYear);




