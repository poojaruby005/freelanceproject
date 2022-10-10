<?php
if( isset($_POST['name']) )
{
  $to = 'info@abaconsultants.in'; // Replace with your email
  
  $subject = $_POST['subject'];

  $message = 
              "Name: " .  $_POST['name'] .
               "\n" .
                "Phone: " . $_POST['phone'] .
                 "\n\n" .
                 "Message: " . $_POST['message'] .
                    "\n\n" .
                  "Regards, \n" . $_POST['name'] .
                   ".";
  $headers = 'From: ' . $_POST['name'] . "\r\n" . 'Reply-To: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
  
  mail($to, $subject, $message, $headers);
  
  if( $_POST['copy'] == 'on' )
  {
    mail($_POST['email'], $subject, $message, $headers);
  }
}


?>
