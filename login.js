// Login form submission simulation
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    // Basic validation (for demo purposes)
    if (username.length < 3 || password.length < 6) {
        alert('Username must be at least 3 characters and password at least 6 characters.');
        return;
    }

    // Simulate login success
    alert(`Login successful! Welcome, ${username}.`);
    if (remember) {
        localStorage.setItem('username', username);
    } else {
        localStorage.removeItem('username');
    }

    // Redirect to main page (for demo, just a simulation)
    window.location.href = 'index.html';
});

// Check if "Remember Me" was previously checked
window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('username').value = savedUsername;
        document.getElementById('remember').checked = true;
    }
};
