<?php

    $to = "rockybd1995@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $apellido = $_REQUEST['apellido'];
    $subject = $_REQUEST['subject'];
    $cmessage = $_REQUEST['message'];
    $celular = $_REQUEST['celular'];
    $telefono = $_REQUEST['telefono'];

    $headers = "From: $from";
	$headers = "From: " . $from . "\r\n";
	$headers .= "Reply-To: ". $from . "\r\n";
	$headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $logo = 'img/logo.png';
    $link = 'www.boca2nina.com';

	$body = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><title>Express Mail</title></head><body>";
	$body .= "<table style='width: 100%;'>";
	$body .= "<thead style='text-align: center;'><tr><td style='border:none;' colspan='2'>";
	$body .= "<a href='{$link}'><img src='{$logo}' alt=''></a><br><br>";
	$body .= "</td></tr></thead><tbody><tr>";
    $body .= "<td style='border:none;'><strong>Nombre:</strong> {$name}</td>";
    $body .= "<td style='border:none;'><strong>Apellido:</strong> {$apellido}</td>";
    $body .= "<td style='border:none;'><strong>Email:</strong> {$from}</td>";
    $body .= "<td style='border:none;'><strong>Celular:</strong> {$celular}</td>";
	$body .= "<td style='border:none;'><strong>Telefono:</strong> {$telefono}</td>";
	$body .= "</tr>";
	$body .= "<tr><td style='border:none;'><strong>Motivo:</strong> {$subject}</td></tr>";
	$body .= "<tr><td></td></tr>";
	$body .= "<tr><td colspan='2' style='border:none;'><strong>Mensaje:</strong> {$cmessage}</td></tr>";
	$body .= "</tbody></table>";
    $body .= "</body></html>";

    $send = mail($to, $subject, $body, $headers);

    $response = new stdClass();
    
    if ($send) {
        $Response->mensaje = 'Tu mensaje fue enviado correctamente.';
        $Response->ok = true;
        $jsonResponse = json_encode($Response);
    } else {
        $Response->mensaje = 'Error al enviar mensaje.';
        $Response->ok = true;
        $jsonResponse = json_encode($Response);
    }
    
    echo $jsonResponse;

?>