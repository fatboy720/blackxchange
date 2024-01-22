<?php include 'fetch_messages.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Message Inbox</title>
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Kalnia">
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link href="https://cdn.jsdelivr.net/npm/emojionearea/dist/emojionearea.min.css" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/emojionearea/dist/emojionearea.min.js"></script>
    <script src="//code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="//code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
</head>
<body>
    <div class="inbox-container">
        <div class="inbox-header">
            <!-- Your header content -->
        </div>
        <div class="inbox-messages">
            <?php foreach ($messages as $message): ?>
                <div class="message-preview">
                    <div class="user-image">
                        <img src="path-to-image1.jpg" alt="<?php echo htmlspecialchars($message['sender_name']); ?>">
                    </div>
                    <div class="message-info">
                        <div class="user-name-location">
                            <span class="user-name"><?php echo htmlspecialchars($message['sender_name']); ?></span>,
                            <span class="user-location">Location here</span> <!-- Location can be added if available -->
                        </div>
                        <div class="last-message"><?php echo htmlspecialchars($message['message']); ?></div>
                    </div>
                    <div class="message-actions">
                        <button class="btn-message" onclick="event.stopPropagation(); openMessagePopup();">Message</button>
                        <button class="btn-delete" onclick="deleteMessage(event, this)">Delete</button>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
    <script>
        // Your existing JavaScript
    </script>
</body>
</html>
