document.getElementById('sendMessageForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);

    fetch('send_message.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Alert the response from send_message.php
        // Additional logic after message is sent
    })
    .catch(error => {
        console.error('Error:', error);
    });
});


function sendMessage() {
    var input = document.getElementById('messageInput');
    var message = input.value.trim();
    if (message) {
        var messagesContainer = document.getElementById('messages');
        var messageBubble = document.createElement('div');
        messageBubble.className = 'message-bubble';

        var userPhoto = document.createElement('img');
        userPhoto.src = 'user-profile-photo.jpg'; // Replace with the actual user profile photo
        userPhoto.className = 'message-photo';
        messageBubble.appendChild(userPhoto);

        var messageText = document.createElement('span');
        messageText.textContent = message;
        messageBubble.appendChild(messageText);

        messagesContainer.appendChild(messageBubble);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

document.querySelectorAll('.btn-message').forEach(button => {
    button.addEventListener('click', function() {
        // Logic to open the message conversation
        alert('Open message conversation here.');
    });
});

function openMessageWindow() {
        window.open('message.html', 'MsgWindow', 'width=800,height=600');
    }
    
    function deleteMessage(event, element) {
    event.stopPropagation(); // Prevent navigating when clicking the button
    alert('Delete functionality to be implemented');
    // Here you would add the code to delete the message
    // For example, using AJAX to call your backend.
}
