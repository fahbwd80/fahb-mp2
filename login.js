var email = document.forms['loginForm']['inputEmailAdd'];
var password = document.forms['loginForm']['inputPassword'];

var email_error = document.getElementById('email_error');
var pass_error = document.getElementById('pass_error');

function validate() {
    // Reset error messages, borders, and text color
    email_error.style.display = "none";
    email.style.border = "1px solid silver";
    email_error.style.color = "black"; // Reset text color
    pass_error.style.display = "none";
    password.style.border = "1px solid silver";
    pass_error.style.color = "black"; // Reset text color

    var valid = true;

    if (email.value.length === 0) { // Check for empty email field
        errorMessage(email_error, "Please include the @ and . symbols"); // Updated error message
        email.style.border = "1px solid red";
        email_error.style.color = "silver"; // Set text color to silver
        valid = false;
    } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email.value)) { // Check for valid email format
        email_error.style.display = "block";
        email.style.border = "1px solid red";
        email_error.style.color = "red"; // Set text color to red
        email_error.innerHTML = "Please input correctly"; // Set innerHTML to "Please input correctly"
        valid = false;
    }

    if (password.value.length === 0) { // Check for empty password field
        pass_error.style.display = "block";
        password.style.border = "1px solid red";
        pass_error.style.color = "red"; // Set text color to red
        valid = false;
    }
    else if (password.value.length > 15) { // Check for maximum character limit
        errorMessage(pass_error, "Password should be 15 characters or less"); // Updated error message
        password.style.border = "1px solid red";
        pass_error.style.color = "red"; // Set text color to red
        valid = false;
    }

    if (!valid) {
        alert("Fill the form correctly.");
    }

    return valid;
}
function errorMessage(element, message) {
    element.textContent = message;
}

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Validate the form when it's submitted
    if (validate()) {
        // If validation succeeds, you can submit the form here if needed
        // For example, you can uncomment the following line to submit the form:
        // this.submit();
        alert("Form submitted successfully!");
    }
});

function loginWithFacebook() {
    FB.init({
        appId: 'your-app-id',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v11.0'
    });

    FB.login(function(response) {
        if (response.authResponse) {
            // User is logged in and has granted permissions

            // Fetch user data
            FB.api('/me', { fields: 'email,first_name,last_name' }, function(userData) {
                if (userData) {
                    // Pre-fill form fields with user data
                    document.getElementById('inputEmailAdd').value = userData.email;
                    // You can pre-fill other fields similarly
                }
            });
        } else {
            // User canceled the login or didn't grant permissions
        }
    }, { scope: 'email' });
}

gapi.load('auth2', function() {
    gapi.auth2.init({
        client_id: 'your-client-id',
    });
});

function loginWithGoogle() {
    gapi.auth2.getAuthInstance().signIn().then(function(googleUser) {
        var profile = googleUser.getBasicProfile();

        // Pre-fill form fields with Google user data
        document.getElementById('inputEmailAdd').value = profile.getEmail();
        // You can pre-fill other fields similarly
    }, function(error) {
        console.error('Google Sign-In Error:', error);
    });
}
