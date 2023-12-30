
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
