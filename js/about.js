function ValidateEmail()
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var email = document.getElementById("email").value;
if(email.match(mailformat))
{
alert("You can soon expect your newsletter!");
//document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
//document.form1.text1.focus();
return false;
}
}


