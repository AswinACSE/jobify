function validate(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var password1=document.getElementById("password1").value;
    var password2=document.getElementById("password2").value;

    if(name==null || name==""){
        document.getElementById("errorBox").innerHTML="Enter the name";
        return false;
    }
    if(email==null || email==""){
        document.getElementById("errorBox").innerHTML="Enter the email";
        return false;
    }
    if(password1==null || password1==""){
        document.getElementById("errorBox").innerHTML="Enter the password";

    }
    if(password2==null || password2==""){
        document.getElementById("errorBox").innerHTML="Enter the password";

    }
    if(password1 != password2){
        document.getElementById("errorBox").innerHTML="password not matched";


    }
    
}