<?php
if( isset($_POST['name']) )
{
  $to = 'info@nagadevata.com'; // Replace with your email
  
  $subject = $_POST['subject'];

  $message = 
              "Name: " .  $_POST['name'] .
               "\n" .
               "dob: " . $_POST['dob'] .
                 "\n\n" .
                 "gender: " . $_POST['gender'] .
                 "\n\n" .
                "Phone: " . $_POST['phone'] .
                 "\n\n" .
                 "email: " . $_POST['email'] .
                 "\n\n" .
                 "subject: " . $_POST['subject'] .
                    "\n\n" .
                  "address, \n" . $_POST['address'] .
                   ".";
  $headers = 'From: ' . $_POST['name'] . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
  
  mail($to, $subject, $message, $headers);
  
  if( $_POST['copy'] == 'on' )
  {
    mail($_POST['email'], $subject, $message, $headers);
  }
}


?>
