function loadFile(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var output = document.getElementById('profilePic');
        output.src = reader.result;
    };
    reader.readAsDataURL(event.target.files[0]);
}


  document.getElementById('upload-link').addEventListener('click', function() {
    document.getElementById('file-upload').click(); // Simulate file input click
  });

  document.getElementById('file-upload').addEventListener('change', function(event) {
    const files = event.target.files;
    const gallery = document.getElementById('gallery');
    const photoCountSpan = document.getElementById('photo-count');
    
    let photoCount = parseInt(photoCountSpan.textContent, 10); // Get the current count

    if (files) {
      Array.from(files).forEach(file => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        img.onload = function() {
          URL.revokeObjectURL(img.src); // Free up memory
        };
        gallery.appendChild(img);
        photoCount += 1; // Increment the photo count
      });

      photoCountSpan.textContent = photoCount.toString(); // Update the display
    }
  });
  
  function openChat(userId) {
  // You would replace this with actual user data fetching logic
  var userName = 'User Name'; // Placeholder
  var userImgSrc = 'path_to_profile_picture.jpg'; // Placeholder

  document.getElementById('chat-user-name').textContent = userName;
  document.getElementById('chat-user-img').src = userImgSrc;
  document.getElementById('chatbox').style.display = 'block';
}

function closeChat() {
  document.getElementById('chatbox').style.display = 'none';
}

function sendMessage() {
  var message = document.getElementById('chat-input').value;
  // Add logic to send message to the server and display it in the chat
}

function updateMessageCount() {
  // Replace with the actual API call to your backend
  fetch('/api/unread-message-count')
      .then(response => response.json())
      .then(data => {
          const countElement = document.getElementById('messageCount');
          countElement.textContent = data.count; // Set the message count
          // Show or hide the badge depending on the count
          countElement.style.display = data.count > 0 ? 'inline-block' : 'none';
      })
      .catch(error => {
          console.error('Error fetching message count:', error);
      });
}

function fetchAndDisplayUserInfo() {
  // Example function to fetch user data from server
  // Replace URL with your actual endpoint
  fetch('/api/user-info')
      .then(response => response.json())
      .then(data => {
          // Assuming 'data' is an object containing user info
          document.getElementById('dob').textContent = data.dateOfBirth;
          document.getElementById('gender').textContent = data.gender;
          document.getElementById('location').textContent = `${data.city}, ${data.state}, ${data.country}`;
          document.getElementById('email').textContent = data.email;
      })
      .catch(error => {
          console.error('Error fetching user info:', error);
      });
}

// Call the function when the page loads
window.onload = fetchAndDisplayUserInfo;


// Call this function on page load and/or set an interval to refresh the count
window.onload = updateMessageCount;


