function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById("email").value;
if(email.match(mailformat))
{
alert("You can soon expect your newsletter!");
return true;
}
else
{
alert("You have entered an invalid email address!");
return false;
}
}


