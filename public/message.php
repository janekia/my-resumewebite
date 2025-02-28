<?php
/*
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Debugging: Log all POST data
    error_log("Form data: " . print_r($_POST, true));

    // Sanitize and validate inputs
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    if (!$email || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email address provided.");
    }

    // Debugging: Check variables
    error_log("Email: $email, Subject: $subject, Message: $message");

    $to = "janekia.pinkard@gmail.com"; // Replace with your email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Debugging: Log mail sending attempt
    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        error_log("Mail sending failed.");
        echo "Failed to send the message. Please try again later.";
    }
} else {
    echo "Invalid request method.";
}
*/
?>


