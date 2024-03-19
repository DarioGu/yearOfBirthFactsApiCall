// get the text from the text input field when the submit button is clicked 

function getUserYear() {
    const userYear = document.getElementById('userYear').value;
    console.log(userYear);
    document.getElementById('userYear').value = "";
}

document.getElementById('submitButton').addEventListener('click', getUserYear);

//transfer the text value into the API Url

//get the generated text for the label from the api and save it in a variable

//display the generated text from the api in the label on the webpage

