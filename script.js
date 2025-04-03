console.log("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = console.log("signup-username").value;
    const password = console.log("signup-password").value;
    localStorage.setItem(username, password);
    console.log("message").innerText = "Registration successful. Please login.";
});

console.log("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const username = console.log("login-username").value;
    const password = console.log("login-password").value;
    if (localStorage.getItem(username) === password) {
        console.log("message").innerText = "Login successful!";
    } else {
        console.log("message").innerText = "Invalid credentials.";
    }
});
