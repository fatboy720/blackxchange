$(document).ready(function(){
    $('#accordion h3').click(function() {
        $(this).next().slideToggle('fast');
        $('.content').not($(this).next()).slideUp('fast');
    });
});

              $(document).ready(function() {
        $("#accordion").accordion({
            collapsible: true,
            active: false,
            heightStyle: "content"
        });
    });

    $(document).ready(function(){
        $('.gallery img').hover(
            function() {
                $(this).css("cursor","pointer");
                $(this).animate({width: "200px", height: "200px"}, 'slow');
            }, 
            function() {
                $(this).animate({width: "100px", height: "100px"}, 'slow');
            }
        );
    });
    
    
    $(document).ready(function() {
        // Example to set badge counts
        $('#messageCount').text('5');  // Update with actual count
        $('#friendRequestCount').text('3');  // Update with actual count
        $('#viewerCount').text('12');  // Update with actual count
    
        // Additional jQuery code as needed
    });
    
    $(document).ready(function() {
        // When either profile photo is clicked, trigger the file input
        $('#profileUserProfilePhoto, #navUserProfilePhoto').click(function() {
            $('#profilePhotoInput').click();
        });
    
        // Event handler for changing the profile photo
        $('#profilePhotoInput').on('change', function(e) {
            if (this.files && this.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    // Update the SRC of both profile images
                    $('#profileUserProfilePhoto, #navUserProfilePhoto').attr('src', e.target.result);
                };
                reader.readAsDataURL(this.files[0]);
            }
        });
    });
    
    
    
        // Modal functionality using jQuery
        $('.close').click(function() {
            $('#myModal').css('display', 'none');
        });
    
    var users = {
      user1: {
        name: "User 1",
        avatar: "Lil.JPG"
      },
      user2: {
        name: "User 2",
        avatar: "Lin.JPG"
      }
      // Add more user data as needed
    };
    
    // Populates the sidebar with users
    function populateSidebar() {
      var userList = document.getElementById('user-list');
      userList.innerHTML = ''; // Clear the list first
    
      Object.keys(users).forEach(function(userId) {
        var user = users[userId];
        var listItem = document.createElement('li');
        listItem.className = 'user-item';
        listItem.innerHTML =
          '<img src="' + user.avatar + '" class="user-avatar" alt="' + user.name + '" />' +
          '<span class="user-name">' + user.name + '</span>' +
          '<button class="delete-chat" onclick="deleteChat(\'' + userId + '\')">X</button>';
        listItem.onclick = function() { openChat(userId); };
        userList.appendChild(listItem);
      });
    }
    
    // Deletes a user from the sidebar
    function deleteChat(userId) {
      event.stopPropagation(); // Prevents the openChat from being called
      delete users[userId]; // Remove user from the data object
      populateSidebar(); // Refresh the sidebar
    }
    
    // Opens a chat box for the selected user
    function openChat(userId) {
      var user = users[userId];
      if (!user) {
        console.error("User data for " + userId + " not found.");
        return; // Exit the function if user data is not found
      }
    
      // Fetch the chat box elements
      var chatBox = document.getElementById('chatbox');
      var chatUserName = document.getElementById('chat-user-name');
      var chatUserImg = document.getElementById('chat-user-img');
    
      if (chatBox && chatUserName && chatUserImg) {
        // Set the user's name and image in the chat box
        chatUserName.textContent = user.name;
        chatUserImg.src = user.avatar;
        // Make the chat box visible
        chatBox.style.display = 'block';
      } else {
        console.error("Chat elements not found in the DOM.");
      }
    }
    
    // Closes the chat box
    function closeChat() {
      document.getElementById('chatbox').style.display = 'none';
    }
    
    // Sends a message (placeholder function)
    function sendMessage() {
      var message = document.getElementById('chat-input').value.trim();
      var chatMessages = document.getElementById('chat-messages');
      
      // Assuming the current user's name and avatar are set when the chat is opened
      var currentUser = document.getElementById('chat-user-name').textContent;
      var userAvatarSrc = document.getElementById('chat-user-img').src;
    
      if (message) {
        // Create a new message bubble element
        var msgBubble = document.createElement('div');
        msgBubble.classList.add('chat-message-bubble');
    
        // Add user avatar if it's the current user
        if (currentUser) {
          var avatarImg = document.createElement('img');
          avatarImg.src = userAvatarSrc;
          avatarImg.classList.add('chat-avatar');
          msgBubble.appendChild(avatarImg);
        }
    
        // Add message text
        var msgText = document.createElement('span');
        msgText.textContent = message;
        msgBubble.appendChild(msgText);
    
        // Append the new message bubble to the chat messages container
        chatMessages.appendChild(msgBubble);
    
        // Scroll to the bottom of the chat messages container
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    
      // Clear the input after sending
      document.getElementById('chat-input').value = '';
    }

    document.addEventListener('DOMContentLoaded', function () {
        var mainMenu = document.querySelector('.main-menu');
        var menuItems = mainMenu.querySelectorAll('li');
    
        // Toggle menu on icon click
        mainMenu.addEventListener('click', function (event) {
            // Only toggle for clicks on icons or if menu is already expanded
            if (event.target.closest('i') || mainMenu.classList.contains('expanded')) {
                mainMenu.classList.toggle('expanded');
    
                // Adjust width of li elements based on the expanded state
                menuItems.forEach(function (item) {
                    item.style.width = mainMenu.classList.contains('expanded') ? '250px' : '60px';
                });
            }
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        var submitBtn = document.getElementById('submit-comment');
        var commentBox = document.getElementById('comment-box');
        var commentsList = document.getElementById('comments-list');
      
        submitBtn.addEventListener('click', function() {
          var commentText = commentBox.value.trim();
          if(commentText) {
            var newComment = document.createElement('div');
            newComment.classList.add('comment');
            newComment.textContent = commentText;
            commentsList.appendChild(newComment);
            commentBox.value = ''; // Clear the comment box
          } else {
            alert('Please enter a comment.');
          }
        });
      });
       
