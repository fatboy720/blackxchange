<?php
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

// Retrieve user ID from URL query parameter
$userId = isset($_GET['userId']) ? $_GET['userId'] : die("User ID not specified");

// SQL to fetch user data
$sql = "SELECT username, last_active, profile_views, member_since, gender, location, age, languages, ethnicity, religion, orientation, about_me FROM users WHERE id = ?";

// Prepare and bind
$stmt = $conn->prepare($sql);
$stmt->bind_param("i", $userId);
$stmt->execute();
$result = $stmt->get_result();
$userData = $result->fetch_assoc();

$stmt->close();
$conn->close();

// HTML starts here
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Profile</title>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kalnia">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <link rel="stylesheet" type="text/css" href="Blackxchange.css">
    </head>

</head>
<body>  
    <nav id="mainNav">
        <div class="nav-left">
            <span class="website-name">Black Xchange</span>
        </div>
        <div class="nav-center">
            <a href="#" class="nav-item">Message <span class="badge" id="messageCount">0</span></a>
            <a href="#" class="nav-item">Friend Request <span class="badge" id="friendRequestCount">0</span></a>
            <a href="#" class="nav-item">Browse</a>
            <a href="#" class="nav-item">Viewers <span class="badge" id="viewerCount">0</span></a>
        </div>
        <div class="nav-right">
            <div class="nav-profile-icon">
            <img src="default_profile.jpg" alt="User Profile" id="navUserProfilePhoto" style="cursor:pointer;">
        </div>
    </nav>

    <div id="profile-container">
        <img src="path_to_default_photo.jpg" alt="User Profile" id="profileUserProfilePhoto">
    </div>

    <input type="file" id="profilePhotoInput" accept="image/*" style="display: none;">

    <div class="area"></div>
<nav class="main-menu">
    <ul>
        <li>
            <a href="#">
                <i class="fa fa-home fa-2x"></i>
                <span class="nav-text">Home</span>
            </a>
        </li>
        <li class="has-subnav">
            <a href="messaging_system.html">
                <i class="fa fa-globe fa-2x"></i>
                <span class="nav-text">Message</span>
            </a>
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-heart"></i>
                <span class="nav-text">Favorite</span>
            </a>
        </li>
        <li class="has-subnav">
            <a href="#">
                <i class="fa fa-handshake-o"></i>
                <span class="nav-text">Friends List</span>
            </a>
        </li>
        <li>
            <a href="#">
                <i class="fa fa-comments fa-2x"></i>
                <span class="nav-text">Chat</span>
            </a>
        </li>

        <li class="has-subnav">
            <a href="Settings.html">
                <i class="fa fa-cog"></i>
                <span class="nav-text">Settings</span>
            </a>
        </li>
    </ul>
    <ul class="logout">
        <li>
            <a href="Logout.html">
                <i class="fa fa-power-off fa-2x"></i>
                <span class="nav-text">Logout</span>
            </a>
        </li>
    </ul>
</nav>

    <div class="section">
        <div class="section-header">
          <h2>Friends (<span id="friends-count">0</span>)</h2>
            <input type="file" id="file-upload" style="display: none;" multiple />
          </span>
          <a href="Friends_List.html">See All</a>
        </div>
        <section id="friends-list" class="card-container">
         <!-- Add friend cards here --> 
        </section>
      </div>

      <div id="comment-section">
        <h3>User Comments</h3>
        <div id="comments-list">
          <!-- Comments will appear here -->
        </div>
        <textarea id="comment-box" placeholder="Write a comment..."></textarea>
        <button id="submit-comment">Post Comment</button>
      </div>

    <div class="accordion-container"></div>
    <div id="accordion">
        <h3>Profile</h3>
        <div class="content">
            <div class="user-details">
                <h4>Teddybear</h4>
                <p><strong>Last Active:</strong> 2 months ago</p>
                <p><strong>Profile Views:</strong> 2427 times</p>
                <p><strong>Profile Skin:</strong> Default</p>
                <p><strong>Member Since:</strong> May 30, 2023</p>
                <p><strong>Gender:</strong> Female</p>
                <p><strong>Location:</strong> Detroit, MI</p>
                <p><strong>Age:</strong> 49</p>
                <p><strong>Languages:</strong> Español - América Latina</p>
                <p><strong>Ethnicity:</strong> Black</p>
                <p><strong>Religion:</strong> Christian</p>
                <p><strong>Orientation:</strong> Straight</p>
            </div>
            <div class="about-me">
                <h4>About Me</h4>
                <p>a single black woman</p>
            </div>
        </div>
        <!-- ... other sections ... -->
    </div>

    <div class="gallery">
        <a href="Photo_Gallery.html" target="_blank"><img src="Jay.JPG" alt="Image 1"></a>
        <a href="Photo_Gallery.html" target="_blank"><img src="Lil.JPG" alt="Image 2"></a>
        <a href="Photo_Gallery.html" target="_blank"><img src="Oo.JPG" alt="Image 3"></a>
        <a href="Photo_Gallery.html" target="_blank"><img src="Ww.JPG" alt="Image 4"></a>
        <a href="Photo_Gallery.html" target="_blank"><img src="Lin.JPG" alt="Image 5"></a>
    </div>
      
      <div id="myModal" class="modal">
        <!-- The Close Button -->
        <span class="close">&times;</span>
    
        <!-- Modal Content (The Image) -->
        <img class="modal-content" id="img01">
    
        <!-- Modal Caption (Image Title) -->
        <div id="caption"></div>
    </div>

    <div id="sidebar">
        <div class="user" onclick="openChat('user1')">
          <img src="Lil.JPG" alt="User 1">
        </div>
        <div class="user" onclick="openChat('user2')">
          <img src="Lin.JPG" alt="User 2">
        </div>
        <!-- More users -->
      </div>
      
      <div id="chatbox" style="display:none;">
        <div id="chat-header">
            <img src="" id="chat-user-img" alt="Chat User">
            <span id="chat-user-name">User Name</span>
        </div>
        <div id="chat-messages" style="height: 300px; overflow-y: auto;">
            <!-- Messages will be appended here -->
          </div>
          
        <div id="chat-footer">
            <input type="text" id="chat-input" placeholder="Type a message...">
            <button onclick="sendMessage()">Send</button>
            <button onclick="closeChat()" id="close-chat-btn">Close</button>
        </div>
    </div> 

    <script src="Blackxchange.js"></script>
    <footer class="simple-footer">
        <p>© 2023 Black Xchange. All Rights Reserved.</p>
      </footer>
      
</body>
</html>
