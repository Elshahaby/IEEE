document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelectorAll(".alert").forEach(alert => {
            alert.style.display = "none"; // Hides messages after 5 seconds
        });
    }, 4000);
});