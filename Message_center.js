document.querySelector('.message-input button').addEventListener('click', function() {
    var input = document.querySelector('.message-input input');
    var message = input.value.trim();
    
    if (message) {
      // Append message to conversation
      var conversation = document.querySelector('.conversation');
      var messageElement = document.createElement('div');
      messageElement.classList.add('message');
      messageElement.textContent = message;
      conversation.appendChild(messageElement);
      
      // Clear input
      input.value = '';
      
      // Scroll to the bottom
      conversation.scrollTop = conversation.scrollHeight;
    }
  });
  
  function deleteConversation() {
      // Logic to delete the conversation
      alert('Delete conversation functionality to be implemented');
      // Here you would add the code to delete the conversation
  }