document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Reset error messages
    resetErrorMessages();

    // Fetch form values
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phoneNumber').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Validate form fields
    var valid = true;

    if (fullName.length < 5) {
        document.getElementById('fullNameError').innerHTML = 'Name must have at least 5 characters';
        valid = false;
    }

    if (email.indexOf('@') === -1) {
        document.getElementById('emailError').innerHTML = 'Enter a valid email address';
        valid = false;
    }

    if (phoneNumber === '123456789' || phoneNumber.length !== 10 || isNaN(phoneNumber)) {
        document.getElementById('phoneNumberError').innerHTML = 'Enter a valid 10-digit phone number';
        valid = false;
    }

    if (password.length < 8 || password === 'password' || password === fullName) {
    document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long and cannot be "password" or the user\'s name';
        valid = false;
    }

    if (password !== confirmPassword) {
        document.getElementById('confirmPasswordError').innerHTML = 'Passwords do not match';
        valid = false;
    }

    // if logic fails,do not submit
    if (!valid) return;

    //reset the form if everything is correct
    document.getElementById('validationForm').reset();
});

// Function to reset error messages
function resetErrorMessages() {
    document.getElementById('fullNameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneNumberError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    document.getElementById('confirmPasswordError').textContent = '';
}