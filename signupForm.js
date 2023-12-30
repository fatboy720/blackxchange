document.getElementById('signupForm').addEventListener('submit', function(event){
    event.preventDefault();

    // Fetch form data
    var formData = {
        username: document.getElementById('username').value,
        firstName: document.getElementById('firstName').value,
        age: document.getElementById('age').value,
        race: document.getElementById('race').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        gender: document.getElementById('gender').value,
        maritalStatus: document.getElementById('maritalStatus').value,
        aboutMe: document.getElementById('aboutMe').value,
        lookingFor: document.getElementById('lookingFor').value
    };

    // Create tabs for profile information
    var profileTabs = document.getElementById('profileTabs');
    profileTabs.innerHTML = '';
    for (var key in formData) {
        if (formData.hasOwnProperty(key) && formData[key] !== '') {
            var div = document.createElement('div');
            div.innerHTML = `<b>${key}:</b> ${formData[key]}`;
            profileTabs.appendChild(div);
        }
    }

    // Show profile information
    document.querySelector('.profile-info').style.display = 'block';
});
