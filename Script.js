function submitForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Allow any username/password combination
    alert("Login successful! Welcome, " + username);
    window.location.href = "index.html";
    return false; // Prevent form submission
}