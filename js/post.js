
function ValidateEmailAddress() {
    let email = document.forms["form"]["email"].value;

    var emailSymbol = email.indexOf("@");
    if(emailSymbol < 1) {
        alert("Please enter a valid email address containing the @ symbol at the right place");
    }
    
    var dot = email.indexOf(".");
    if(dot <= emailSymbol + 2) {
        alert("Please enter a valid email with the dot symbol at the right place");
    }
    

    if (dot === email.length - 1)  {      
    alert("Please enter a valid email with the dot symbol at the right place");
    }
    
    return true;
}