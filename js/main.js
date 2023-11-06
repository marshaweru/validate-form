//Add variables for IDs in html
var nameError = document.getElementById('name-error');
var phoneError = document.getElementById('phone-error');
var emailError = document.getElementById('email-error');
var messageError = document.getElementById('message-error');
var submitErro = document.getElementById('sbmit-error');

//Add function that will validate input box
function validateName(){//Function to be executed when we type into input field
    var name = document.getElementById('contact-name').value;
    //var called name will store content written in input box
    //Then add condition
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*&/)){
        //First character should be an alphabetical letter and every other character should be between a and z

    })
}