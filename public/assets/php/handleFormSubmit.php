<?php
	
	require '../../../vendor/autoload.php';

	header('Content-Type: application/json');

	if (isset($_POST['action'])) {

		switch ($_POST['action']) {
			case 'sendmail':
				
				$from = new SendGrid\Email(null, $_POST['email']);
				$subject = "Contact from portfolio web";
				$to = new SendGrid\Email(null, "daniegarcia254@gmail.com");
				$content = new SendGrid\Content("text/plain", "Nombre: " . $_POST['name'] . "\r\n\r\n" . "Email: " . $_POST['email'] . "\r\n\r\n" . $_POST['message']);
				$mail = new SendGrid\Mail($from, $subject, $to, $content);

				$apiKey = getenv('SENDGRID_API_KEY');
				$sg = new \SendGrid($apiKey);

				$response = $sg->client->mail()->send()->post($mail);
				echo $response->statusCode();
				echo $response->headers();
				echo $response->body();
				//echo json_encode($response);
				break;
			
			default:
				$res['sendstatus'] = 0;
				$res['message'] = 'Action '+$_POST['action']+' is unkown';
				echo json_encode($res);
				break;
		}

	} else {
		$res['sendstatus'] = 0;
		$res['message'] = 'Action is not set in the POST request';
		echo json_encode($res);
	}
?>
