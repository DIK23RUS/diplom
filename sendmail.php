<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language/');
    $mail->IsHTML(true);

    //От кого письмо
try {
    $mail->setFrom('info@fls.guru', 'Фрилансер по жизни');
} catch (Exception $e) {
}
// Кому отправить
try {
    $mail->addAddress('dik23rus@gmail.com');
} catch (Exception $e) {
}
//Тема письма
    $mail->Subject = 'Привет! Это "Фрилансер по жизни"';

    //Тело письма
    $body = '<h1>Тестовое письмо</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['tel']))){
        $body.='<p><strong>Телефон:</strong> '.$_POST['tel'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }

    //Отправляем
try {
    if ($mail->send()) {
        $message = 'Ошибка PHP';
    } else {
        $message = 'Данные отправлены';
    }
} catch (Exception $e) {
}

$response = ['message' => $message];

    header('Content-type: application/json');
    echo  json_decode((string)$response);
?>