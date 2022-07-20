<?php

$name = $_POST['name']
$organization = $_POST['organization']
$award = $_POST['award']
$comment = $_POST['comment']
$voter_name = $_POST['voter_name']
$voter_phone = $_POST['voter_phone']
$voter_email = $_POST['voter_email']

$email_from = 'info@panafricanonline.com';

$email_subject = 'New Form Submission';

$email_body = "Name: $name.\n".
                "Organization: $organization.\n".
                "Award: $award.\n".
                "Comment: $comment.\n".
                "Voter's Name: $voter_name.\n".
                "Voter's Phone No: $voter_phone.\n".
                "Voter's Email: $voter_email.\n";


$to = 'archibongakan99@gmail.com';

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $voter_email \r\n";

mail($to,$email_subject,$email_body,$headers)

headers("Location: vote.html");

?>