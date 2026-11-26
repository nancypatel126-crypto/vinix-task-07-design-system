
const themeToggle = document.getElementById("themeToggle");

// Light and Dark Theme
themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight
        ? "🌙 Dark Theme"
        : "☀️ Light Theme";
});

// Demo form validation
const formButton = document.getElementById("formButton");

formButton.addEventListener("click", function () {
    const name = document.getElementById("userName").value.trim();
    const email = document.getElementById("userEmail").value.trim();
    const message = document.getElementById("formMessage");

    if (name === "" || email === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "#EF4444";
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "#EF4444";
        return;
    }

    message.textContent = "Form submitted successfully!";
    message.style.color = "#22C55E";
});
