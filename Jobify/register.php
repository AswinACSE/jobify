<?php


$usrname = $_POST['usrname'];
$email = $_POST['email'];
$password1 = $_POST['password1'];
$password2 = $_POST['password2'];

if(!empty($usrname) || !empty($email) || !empty($password1) || !empty($password2)){

    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "jobify";

    $conn = new mysqli($host , $dbusername , $dbpassword , $dbname);

    if(mysqli_connect_error()){
        die('Connect Error ('. mysqli_connect_errno() .') '
        . mysqli_connect_error());
    }

    else{

        $SELECT = "SELECT email From createaccount Where email = ? Limit 1"; 

        $INSERT = "INSERT Into createaccount( usrname , email ,password1 , password2 ) values(?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

        if($rnum==0){
            $stmt->close();
            $stmt = $conn->prepare($INSERT);
            $stmt->bind_param("ssss",$usrname , $email ,$password1 ,$password2);
            $stmt->execute();
            echo "New record inserted successfully";
        }
        else{
            echo "This email id is already existed";
        }
        $stmt->close();
        $conn->close();
    }
}else{
    echo "All field are required";
    die();
}

?>