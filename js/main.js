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
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        //First character should be an alphabetical letter and every other character should be between a and z
        //Exclamation means value isn't matching with expression
        nameError.innerHTML = 'Write full name';
        return false;
    }
    //Return success message when there is no error
    nameError.innerHTML = '<i class="fa-solid fa-user-check"></i>';//Add check icon
    return true;
}
//Phone number validation
function validatePhone(){
    var phone = document.getElementById('contact-phone').value;
    //Add condition to check phone number
    if(phone.length == 0){//Check whether phone input field is empty
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }
    if(phone.length !== 10){//Check if length of phone number is not equal to 10
        phoneError.innerHTML == 'Phone no. should be 10 digits';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){//Number is btwn 0-9 and is 10 characters
        phoneError.innerHTML = 'Phone no. is required';
        return false;
    }

    phoneError.innerHTML = '<i class="fa-solid fa-user-check"></i>';
    return true;
}