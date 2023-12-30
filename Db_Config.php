<?php
$servername = "localhost";
$username = "ezyro_35694826";
$password = "Biglaz720#";
$dbname = "ezyro_35694826_blackxchange";


$conn = new mysqli($servername, $username, $password, $dbname);

// Prepare a statement for execution
$stmt = $conn->prepare("INSERT INTO tablename (column1, column2) VALUES (?, ?)");

// Bind variables to the prepared statement as parameters
$stmt->bind_param("ss", $var1, $var2);

// Set parameters and execute
$var1 = 'value1';
$var2 = 'value2';
$stmt->execute();

$stmt->close();
$conn->close();


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
