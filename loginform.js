function validate()
{
    //These are supposed to set the variables
    var username=document.getElementById("username").Value; 
    var password=document.getElementById("password").Value;

    if(username=="admin" && password=="root") //These are supposed to validate the entered username and password, but it has an error.
    {
        alert("Successful Login");
        return false;
    }
    else{alert ("Invalid Username and Password");}
}