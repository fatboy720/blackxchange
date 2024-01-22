$(document).ready(function() {
    $('#signupForm').on('submit', function(e) {
        e.preventDefault();

        var formData = new FormData(this);

        // AJAX request to send form data to a server-side script (e.g., PHP, Python, Node.js)
        $.ajax({
            url: 'Signup.php', // Replace with your server script URL
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response) {
                // Handle success - Redirect to user profile or show a success message
                console.log('Form submitted successfully.');
                // Redirect to the user profile page if needed
                // window.location.href = 'path/to/user/profile';
            },
            error: function(xhr, status, error) {
                // Handle errors
                console.error('Form submission failed:', error);
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    
    usernameInput.type = 'text';
    passwordInput.type = 'text';

    setTimeout(() => {
        usernameInput.type = 'text';
        passwordInput.type = 'password';
    }, 100);

    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('username').setAttribute('name', 'newUsername');
    document.getElementById('password').setAttribute('name', 'newPassword');

    // Password strength listener
    passwordInput.addEventListener('input', checkPasswordStrength);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Additional login logic here
    window.location.href = 'Index.html'; // Replace with actual homepage path
});

document.querySelector('.sign-up-btn').addEventListener('click', function() {
    window.location.href = 'signup.html'; // Replace with actual sign-up page path
});

document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    
    var rememberMe = document.getElementById('rememberMe').checked;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (rememberMe) {
        // Placeholder for authentication logic
        var token = "secure_generated_token_from_server";
        localStorage.setItem('loginToken', token);
    }

    // Additional login logic here
};

window.onload = function() {
    var token = localStorage.getItem('loginToken');
    if (token) {
        // Placeholder for token validation logic
    }
};

function checkPasswordStrength(event) {
    var password = event.target.value;
    var strength = { score: 0, message: '', color: 'red' };

    if (password.length >= 8) strength.score += 1;
    if (password.match(/[a-z]/)) strength.score += 1;
    if (password.match(/[A-Z]/)) strength.score += 1;
    if (password.match(/[0-9]/)) strength.score += 1;
    if (password.match(/[^a-zA-Z\d]/)) strength.score += 1;
}
    switch (strength.score) {
        case 5: strength.message = 'Very Strong'; strength.color = 'green'; break;
        case 4: strength.message = 'Strong'; strength.color = 'darkgreen'; break;
        case 3: strength.message = 'Medium'; strength.color = 'orange'; break;
        case 2: strength.message = 'Weak'; strength.color = 'red'; break;
        default: strength.message = 'Very Weak'; strength.color = 'darkred'; break;
    }

    
    var passwordHelpElement = document.getElementById('passwordHelp');
    if (passwordHelpElement) {
        passwordHelpElement.textContent = strength.message;
        passwordHelpElement.style.color = strength.color;
    }
    




