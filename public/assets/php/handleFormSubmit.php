<?php
	header('Content-Type: application/json');

	if (isset($_POST['action'])) {

		switch ($_POST['action']) {
			case 'sendmail':
				
				$to      = 'daniegarcia254@gmail.com';
				$subject = 'Contact from portfolio web';
				$headers = 'From: ' . $_POST['email'] . "\r\n" . 'X-Mailer: PHP/' . phpversion();
				$message = "Nombre: " . $_POST['name'] . "\r\n\r\n" . "Email: " . $_POST['email'] . "\r\n\r\n" . $_POST['message'];
				
				$success = mail($to, $subject, $message, $headers);
				if (!$success) {
					$res['sendstatus'] = 0;
					$res['message'] = error_get_last()['message'];
					echo json_encode($res);	
				} else {
					$res['sendstatus'] = 1;
					$res['message'] = 'Email has been sent succesfully';
					echo json_encode($res);
				}
					
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
