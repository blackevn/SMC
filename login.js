let loginAttempts = 0;
let lockedUntil = null;

function login() {
    if (lockedUntil && Date.now() < lockedUntil) {
        document.getElementById('error').textContent = `Account locked. Try again in ${Math.ceil((lockedUntil - Date.now()) / 1000)} seconds.`;
        return;
    }

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy database with hardcoded credentials
    const database = [
        { username: 'user1', password: 'pass1', firstName: 'John', surname: 'Doe', email: 'john@email.com' },
        // Add more users as needed
    ];

    const user = database.find(u => u.username === username && u.password === password);

    if (user) {
        // Successful login
        loginAttempts = 0;
        document.getElementById('error').textContent = '';
        alert(`Welcome, ${user.firstName} ${user.surname} (${user.email})!`);
    } else {
        // Failed login
        loginAttempts++;
        document.getElementById('error').textContent = 'Invalid username or password.';
        
        if (loginAttempts >= 3) {
            // Lock the account for 10 minutes
            lockedUntil = Date.now() + 10 * 60 * 1000;
            loginAttempts = 0;
        }
    }
}
