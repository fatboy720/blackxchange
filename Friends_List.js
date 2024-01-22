function deleteFriend(friendId) {
    console.log("Deleting friend with ID:", friendId);
    // Make an HTTP request to your server to delete the friend
}

function reportFriend(friendId) {
    console.log("Reporting friend with ID:", friendId);
    // Make an HTTP request to your server to report the friend
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach a click event listener to the "Add Friend" button
    const addFriendButtons = document.querySelectorAll('.add-friend-btn');
    
    addFriendButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the data-user-id attribute value from the clicked button
            const targetUserId = this.dataset.userId;
            sendFriendRequest(targetUserId, this);
        });
    });
});

function sendFriendRequest(targetUserId, buttonElement) {
    // Replace with the actual API endpoint URL
    fetch('/api/friend-requests/send', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Include authorization headers if required
        },
        body: JSON.stringify({ targetUserId: targetUserId })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // If friend request was accepted, redirect to the friends list
        if (data.friendRequestAccepted) {
            window.location.href = 'Friends_List.html';
        } else {
            // Otherwise, show a message or notification
            displayNotification('Friend request sent.');
        }
    })
    .catch(error => {
        console.error('Error sending friend request:', error);
    });
}

// Display a simple notification to the user
function displayNotification(message) {
    alert(message);
}


