<?php
if(isset($_POST['email'])) {

//Correo electronico del destinatario
//$mail_to = "destinatario@sudominio.com";
$mail_to = "pixgor@gmail.com";


// Se validan los datos ingresados por el usuario
if(!isset($_POST['name']) ||
!isset($_POST['email']) ||
!isset($_POST['subject']) ||
!isset($_POST['comments'])) {

echo "<b>Ocurrió un error y el formulario no ha sido enviado. </b><br />";
echo "Por favor, vuelva atrás y verifique la información ingresada<br />";
die();
}
//Asunto del correo
$mail_subject = $_POST['subject'];
//Contenido del mensaje 
$mail_message = "Información del Contacto:\n\n";
$mail_message .= "Name: " . $_POST['name'] . "\n";
$mail_message .= "E-mail: " . $_POST['email'] . "\n";
$mail_message .= "Comments: " . $_POST['comments'] . "\n\n";


// Ahora se envía el e-mail usando la función mail() de PHP
/*$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();*/
//mail(to,subject,message,headers,parameters);s
@mail($mail_to, $mail_subject, $mail_message,);

echo "¡El formulario se ha enviado con éxito!";

//header("Location: contact.html");

}
?>