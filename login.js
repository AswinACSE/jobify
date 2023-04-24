function validate(){
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;

    if(email=="aswin@gmail.com" && password=="12345"){
        return true;
    }
    if(email==null || email==""){
        document.getElementById("errorBox").innerHTML="Enter the email";
        return false;
    }
    if(password==null || password==""){
        document.getElementById("errorBox").innerHTML="Enter the password"

    }
    else{
        document.getElementById("errorBox").innerHTML="Invalid email or password";
        return false;
    }
}