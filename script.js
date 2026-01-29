const form = document.getElementById('registrationForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

// Reusable function to set error states [cite: 13, 18]
function setError(input, message, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.innerText = message;
    input.classList.add('error');
    input.classList.remove('success');
}

// Reusable function to set success states [cite: 16, 18]
function setSuccess(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.innerText = '';
    input.classList.add('success');
    input.classList.remove('error');
}

// Individual validation functions [cite: 12]
function validateName() {
    if (username.value.trim().length < 3) {
        setError(username, "Name must be at least 3 characters", "nameError");
        return false;
    }
    setSuccess(username, "nameError");
    return true;
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 
    if (!emailRegex.test(email.value)) {
        setError(email, "Enter a valid email address", "emailError");
        return false;
    }
    setSuccess(email, "emailError");
    return true;
}

function validatePassword() {
    // Password must be at least 6 chars with one number [cite: 17]
    const passRegex = /^(?=.*[0-9]).{6,}$/;
    if (!passRegex.test(password.value)) {
        setError(password, "Min 6 chars & at least 1 number", "passError");
        return false;
    }
    setSuccess(password, "passError");
    return true;
}

function validateConfirm() {
    if (confirmPassword.value !== password.value || confirmPassword.value === "") {
        setError(confirmPassword, "Passwords do not match", "confirmError");
        return false;
    }
    setSuccess(confirmPassword, "confirmError");
    return true;
}

// Real-time validation using blur events [cite: 15]
username.addEventListener('blur', validateName);
email.addEventListener('blur', validateEmail);
password.addEventListener('blur', validatePassword);
confirmPassword.addEventListener('blur', validateConfirm);

// Form submission handler
form.addEventListener('submit', (event) => {
    // Run all validations [cite: 17]
    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isPassValid = validatePassword();
    const isConfirmValid = validateConfirm();

    if (!(isNameValid && isEmailValid && isPassValid && isConfirmValid)) {
        event.preventDefault(); // Stop form submission [cite: 14, 24]
    } else {
        alert("Form submitted successfully!");
    }
});