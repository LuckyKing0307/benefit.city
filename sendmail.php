<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
//use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
//require 'phpmailer/src/SMTP.php';

$mail = new PHPMailer(true);

$from_email = 'info@benefit.com'; //Указать нужный E-mail от кого письмо
$to_emails = [  // Указать нужный E-mail
	'partner@benefit.city',
];

$server_link = (empty($_SERVER['HTTPS']) ? 'http' : 'https') . "://$_SERVER[HTTP_HOST]";
$default_form_subject = 'Заявка с - ' . $server_link;
$form_subject   = ($_POST['subject']) ? $_POST['subject'] : $default_form_subject; // get form subject from  ( in page line 3 as var $formSubject)

$page_lang 			= htmlspecialchars($_POST['page_lang'], ENT_QUOTES, 'UTF-8');
$firstName      	= htmlspecialchars($_POST['user_name'], ENT_QUOTES, 'UTF-8');
$lastName       	= htmlspecialchars($_POST['user_sername'], ENT_QUOTES, 'UTF-8');
$company    		= htmlspecialchars($_POST['user_company'], ENT_QUOTES, 'UTF-8');
$employees    		= htmlspecialchars($_POST['user_employees'], ENT_QUOTES, 'UTF-8');
$number        		= htmlspecialchars($_POST['user_phone'], ENT_QUOTES, 'UTF-8');
$email         		= htmlspecialchars($_POST['user_email'], ENT_QUOTES, 'UTF-8');
$user_role      	= htmlspecialchars($_POST['user_role'], ENT_QUOTES, 'UTF-8');
$user_institution	= htmlspecialchars($_POST['user_institution'], ENT_QUOTES, 'UTF-8');
$fake_input			= htmlspecialchars($_POST['user_url'], ENT_QUOTES, 'UTF-8');


$msg_done 	= 'Данные успешно отправлены!';
$msg_error 	= 'Ошибка отправки';
$msg_spam 	= 'Спам обнаружен';
$lang = 'ru';

if ($page_lang  == 'az') {
	$msg_done 	= 'Məlumat uğurla göndərildi!';
	$msg_error 	= 'Göndərmə xətası';
	$msg_spam	= 'Spam aşkarlandı';
	$lang 		= 'az';
}
if ($page_lang  == 'en') {
	$msg_done 	= 'Data sent successfully!';
	$msg_error 	= 'Send error';
	$msg_spam	= 'Spam detected';
	$lang 		= 'en';
}

try {
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage($lang, 'phpmailer/language/');
	$mail->IsHTML(true);

	//smtp
	// $mail->isSMTP();
	// $mail->Host = 'mail.adm.tools';  // Укажите SMTP-сервер
	// $mail->Port = 465;  // Укажите порт SMTP-сервера
	// //$mail->SMTPAuth = true;
	// $mail->SMTPSecure = 'ssl';
	// $mail->Username = 'dev@webskill.fun';  // Укажите свой email
	// $mail->Password = 'i5MB663xhE';  // Укажите пароль от email
	//

	//От кого письмо
	$mail->setFrom($from_email, $server_link);
	//Кому отправить
	foreach ($to_emails as $to_mail) {
		$mail->addAddress($to_mail);
	}
	//Тема письма
	$mail->Subject = $default_form_subject;

	// //Данные для таблицы
	// $tableData = [
	// 	['Имя:', 					$firstName],
	// 	['Фамилия:', 				$lastName],
	// 	['Название компании:', 		$company],
	// 	['Количество сотрудников:', $employees],
	// 	['Телефон:', 				$number],
	// 	['Почта:', 					$email]
	// ];

	// //Формирование HTML-кода таблицы';
	// $table = '<table class="gmail-table" style="border-collapse: collapse; width: 100%;max-widht: 600px;border: solid 2px #DDEEEE;">';
	// $table .= '<thead><tr><th style="background-color:#DDEDED;border:1px solid #DDEEEE;padding:10px;"></th><th></th></tr></thead>';
	// $table .= '<tbody>';
	// foreach ($tableData as $row) {
	// 	$table .= '<tr>';
	// 	foreach ($row as $cell) {
	// 		$table .= '<td style="border:1px solid #DDEEEE;color:#333;padding:10px;">' . $cell . '</td>';
	// 	}
	// 	$table .= '</tr>';
	// }
	// $table .= '</tbody>';
	// $table .= '</table>'; 
	////

	$mailbody = 	'';

	$mailbody .=	'<strong>Имя: </strong>' . $firstName . '' . PHP_EOL . '<br>';
	$mailbody .=	'<strong>Фамилия: </strong>' . $lastName . '' . PHP_EOL . '<br>';
	if ($company) {
		$mailbody .=	'<strong>Название компании: </strong>' . $company . '' . PHP_EOL . '<br>';
	}
	if ($employees) {
		$mailbody .=	'<strong>Количество сотрудников: ' . $employees . '' . PHP_EOL . '<br>';
	}
	if ($user_role) {
		if ($user_role == 'trainer') {
			$user_role = 'Спортивный тренер';
		}
		if ($user_role == 'owner') {
			$user_role = 'Владелец спорт.комплекса';
		}
		$mailbody .=	'<strong>Роль партнера: </strong>' . $user_role . '' . PHP_EOL . '<br>';
	}
	if ($user_institution) {
		$mailbody .=	'<strong>Спортивное заведение:</strong>' . $user_institution . '' . PHP_EOL . '<br>';
	}
	$mailbody .=	'<strong>Телефон: </strong>' . $number . '' . PHP_EOL . '<br>';
	$mailbody .=	'<strong>Почта: </strong>' . $email . '' . PHP_EOL . '<br>';

	/*
	//Прикрепить файл
	if (!empty($_FILES['image']['tmp_name'])) {
		//путь загрузки файла
		$filePath = __DIR__ . "/files/sendmail/attachments/" . $_FILES['image']['name']; 
		//грузим файл
		if (copy($_FILES['image']['tmp_name'], $filePath)){
			$fileAttach = $filePath;
			$body.='<p><strong>Фото в приложении</strong>';
			$mail->addAttachment($fileAttach);
		}
	}
	*/
	if ($fake_input === '' && ($firstName && $lastName && $number && $email)) {
		//$firstName && $lastName && $company && $employees && $number && $email && 
		$mail->Body = $mailbody;
		//$mail->Body = $table;

		//Отправляем
		if (!$mail->send()) {
			//http_response_code(500);
			$message = $msg_error;
		} else {
			//http_response_code(200);
			$message = $msg_done;
		}

		$response = [
			'message' 	=> $message,
			// 'form_info'	=> [
			// 	'first_name'	=>	$firstName,
			// 	'last_name'		=>	$lastName,
			// 	'company'		=>	$company,
			// 	'employees'		=>	$employees,
			// 	'number'		=>	$number,
			// 	'email'			=>	$email,
			// 	'user_role'		=>	$user_role,
			// 	'server_url'	=> 	$server_link,
			// 	'fake_field'	=> 	$fake_input
			// ]
		];

		header('Content-type: text/html'); //application/json

		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	} else if ($fake_input) {
		$message = $msg_spam;

		$response = [
			'message' 	=> $message,
		];

		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	} else {
		$message = $msg_error;

		$response = [
			'message' 	=> $message,
		];

		echo json_encode($response, JSON_UNESCAPED_UNICODE);
	}
} catch (Exception $e) {
	echo "Сообщение не удалось отправить. Ошибка: {$mail->ErrorInfo}";
}
