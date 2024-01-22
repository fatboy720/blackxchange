document.getElementById('resetForm').onsubmit = function(event) {
    event.preventDefault();
    var email = document.getElementById('email').value;
    // Add email validation logic here
    alert('Reset link sent to ' + email);
};
