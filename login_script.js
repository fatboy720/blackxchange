document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Here you would normally validate the user's credentials
    // For now, we will just redirect to the homepage

    window.location.href = 'Signup.html'; // Replace with the actual homepage path
});

document.querySelector('.sign-up-btn').addEventListener('click', function() {
    window.location.href = 'Index.html'; // Replace with your actual sign-up page path
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
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('username').setAttribute('name', 'newUsername');
    document.getElementById('password').setAttribute('name', 'newPassword');
});

document.getElementById('loginForm').onsubmit = function(event) {
    event.preventDefault();
    
    var rememberMe = document.getElementById('rememberMe').checked;
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (rememberMe) {
        // Send username and password to server for validation
        // If valid, server responds with a secure token
        // Here, use a placeholder token for demonstration
        var token = "secure_generated_token_from_server";

        localStorage.setItem('loginToken', token);
    }

    // Proceed with the login process
};
window.onload = function() {
    var token = localStorage.getItem('loginToken');
    if (token) {
        // Send the token to the server for validation
        // If valid, log the user in or pre-fill the username
    }
};



