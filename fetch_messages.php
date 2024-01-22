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

// Fetch messages for the logged-in user
$userId = $_SESSION['user_id']; // The ID of the currently logged-in user
$sql = "SELECT m.id, m.sender_id, m.receiver_id, m.message, m.created_at, u.username as sender_name
        FROM messages m
        JOIN users u ON u.id = m.sender_id
        WHERE receiver_id = ?
        ORDER BY m.created_at DESC";

$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();

// Array to hold messages
$messages = [];
while ($row = $result->fetch_assoc()) {
    $messages[] = $row;
}

$stmt->close();
$conn->close();

// Now $messages contains an array of messages for the user
?>
