<?php
// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Database configuration
    $host = "fdb1032.awardspace.net"; // Your database host
    $username = "4404426_database"; // Your database username
    $password = "Biglaz720#"; // Your database password
    $database = "4404426_database"; // Your database name

    // Create a connection to the database
    $conn = new mysqli($host, $username, $password, $database);

    // Check the connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve and sanitize input data
    $firstName = $conn->real_escape_string($_POST['firstName']);
    $userName = $conn->real_escape_string($_POST['userName']);
    $password = $conn->real_escape_string($_POST['password']);
    $confirmPassword = $conn->real_escape_string($_POST['confirmPassword']);
    // ... Do this for all fields

    // Check if the two passwords match
    if ($password !== $confirmPassword) {
        die("Passwords do not match.");
    }

    // Hash the password before storing it
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Prepare the SQL statement to insert data
    $sql = "INSERT INTO users (first_name, username, password, gender, dob, city, state, country, email, marital_status, weight, height, race, education, occupation, about_me, looking_for) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

    // Prepare and bind
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssssssssssssss", $firstName, $userName, $hashedPassword, $_POST['gender'], $_POST['dob'], $_POST['city'], $_POST['state'], $_POST['country'], $_POST['email'], $_POST['maritalStatus'], $_POST['weight'], $_POST['height'], $_POST['race'], $_POST['education'], $_POST['occupation'], $_POST['aboutMe'], $_POST['lookingFor']);

    // Attempt to execute the prepared statement
    if ($stmt->execute()) {
        echo "Registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
}
?>

