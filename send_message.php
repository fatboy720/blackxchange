<?php
session_start();

// Check if the user is logged in
if (!isset($_SESSION['user_id'])) {
    // Redirect to the login page if not logged in
    header('Location: login.php');
    exit;
}

// Database configuration
$host = "fdb1032.awardspace.net";
$dbUsername = "4404426_database";
$dbPassword = "Biglaz720#";
$dbName = "4404426_database";

// Create database connection
$conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize input data
    $receiverId = $conn->real_escape_string($_POST['receiver_id']);
    $message = $conn->real_escape_string($_POST['message']);
    $senderId = $_SESSION['user_id']; // The sender's user ID

    // SQL to insert a new message
    $sql = "INSERT INTO messages (sender_id, receiver_id, message, created_at) VALUES (?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iis", $senderId, $receiverId, $message);

    // Attempt to execute the prepared statement
    if ($stmt->execute()) {
        echo "Message sent successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

$conn->close();
?>
