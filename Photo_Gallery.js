$(document).ready(function() {
    $('#file-upload').change(function() {
        var fileInput = this;
        if (fileInput.files && fileInput.files[0]) {
            var reader = new FileReader();
            reader.onload = function(e) {
                // Retrieve existing gallery photos from localStorage, or initialize an empty array if none exist
                var galleryPhotos = JSON.parse(localStorage.getItem('galleryPhotos')) || [];
                
                // Append the new image to the array
                galleryPhotos.push(e.target.result);
                
                // Save the updated array back to localStorage
                localStorage.setItem('galleryPhotos', JSON.stringify(galleryPhotos));
                
                // Redirect to the profile page to view the updated gallery
                // This assumes your user profile page is named 'index.html'
                window.location.href = 'Tit.html';
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
    });

    // Trigger the file upload when the upload button is clicked
    $('#upload-btn').click(function() {
        $('#file-upload').click();
    });
});

$(document).ready(function() {
    // Display gallery photos
    function displayGalleryPhotos() {
        var galleryPhotos = JSON.parse(localStorage.getItem('galleryPhotos')) || [];
        $('#gallery').empty();
        galleryPhotos.forEach(function(photoSrc, index) {
            var img = $('<img>', { src: photoSrc, class: 'gallery-item' });
            // Set click handler for each gallery image to set it as the profile photo
            img.click(function() {
                localStorage.setItem('profilePhoto', photoSrc);
                $('#profileUserProfilePhoto').attr('src', photoSrc);
            });
            $('#gallery').append(img);
        });
    }

    // Display profile photo
    function displayProfilePhoto() {
        var profilePhoto = localStorage.getItem('profilePhoto');
        if (profilePhoto) {
            $('#profileUserProfilePhoto').attr('src', profilePhoto);
        }
    }

    displayProfilePhoto();
    displayGalleryPhotos();
});

