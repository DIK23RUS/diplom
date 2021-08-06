<?php
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);

if (mail("dik23rus@gmail.com", "Заявка",
    "Имя:".$name."\n"."Телефон:".$phone."\n"."Почта:".$email))
{
    echo "Ваш запрос принят, спасибо";
    header("refresh: 1; url=http://pchelocentr.com/");

} else {
   echo "Произошла неведомая ошибка, мы разберемся, а Вы можете попробовать снова";
}
?>