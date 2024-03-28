// form.js

document.addEventListener('DOMContentLoaded', function () {
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');

    // Event listener for password confirmation
    confirmPasswordInput.addEventListener('input', function () {
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;

        if (password !== confirmPassword) {
            confirmPasswordInput.setCustomValidity('Passwords do not match');
        } else {
            confirmPasswordInput.setCustomValidity('');
        }
    });

    // Event listener for displaying range input value
    const rangeInput = document.getElementById('rating');
    const output = document.querySelector('output[for="rating"]');
    rangeInput.addEventListener('input', function () {
        output.textContent = rangeInput.value;
    });
});