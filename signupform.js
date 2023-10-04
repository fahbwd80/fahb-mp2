var email = document.getElementById('inputEmailAdd');
var password = document.getElementById('inputPassword');

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
        errorMessage(email_error, "Email is required"); // Updated error message
        email.style.border = "1px solid red";
        email_error.style.color = "red"; // Set text color to red
        email_error.style.display = "block"; // Display the error message
        valid = false;
    } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email.value)) { // Check for valid email format
        errorMessage(email_error, "Please enter a valid email address"); // Updated error message
        email.style.border = "1px solid red";
        email_error.style.color = "red"; // Set text color to red
        email_error.style.display = "block"; // Display the error message
        email_error.innerHTML = "Please input correctly.";
        valid = false;
    }

    if (password.value.length === 0) { // Check for empty password field
        errorMessage(pass_error, "Password is required"); // Updated error message
        password.style.border = "1px solid red";
        pass_error.style.color = "red"; // Set text color to red
        valid = false;
    } else if (password.value.length > 15) { // Check for maximum character limit
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
    element.style.display = "block"; // Display the error message
}

document.getElementById('btn-signup').addEventListener('click', function () {
    // Validate the form when the "Sign up for free!" button is clicked
    if (validate()) {
        // If validation succeeds, you can submit the form here if needed
        // For example, you can uncomment the following line to submit the form:
        // document.forms['loginForm'].submit();
        alert("Form submitted successfully!");
    }
});

function loginWithFacebook() {
    // Implement Facebook login functionality here
    // You need to use the Facebook SDK to handle this login process
}

function loginWithGoogle() {
    // Implement Google login functionality here
    // You need to use the Google Sign-In API to handle this login process
}