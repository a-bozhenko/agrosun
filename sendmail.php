<?php


$name = $_POST['user-name'];
$phone = $_POST['user-phone']; 
$name2 = $_POST['user-name2'];
$phone2 = $_POST['user-phone2']; 
$today = date("Y-m-d H:i:s"); 

$to      = 'Agrosuntd@gmail.com';
// $to  = 'Taren91@gmail.com';
$subject = 'Запрос с лендинга';
$message = 'Form1: ' . "\r\n" . 'Имя клиента:' . $name . "\r\n" . 'Телефон клиента:' . $phone .  "\r\n" . 'Form2:' . "\r\n" . ' Имя клиента:' . $name2 . "\r\n" . 'Телефон клиента:' . $phone2 .  "\r\n" . 'Дата и время:' . $today;
$headers = 'From: webmaster@example.com' . "\r\n" .
    'Reply-To: webmaster@example.com' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);
   
   echo 'Ваша заявка сформирована, наш менеджер свяжется с вами в кротчайшие сроки!';
?> 



