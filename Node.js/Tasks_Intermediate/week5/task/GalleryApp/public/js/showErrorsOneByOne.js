document.addEventListener("DOMContentLoaded", function () {
    const errors = document.querySelectorAll(".alert-danger"); // Select all error messages
    let index = 0;
    const displayTime = 1000; // 🔹 Change this value to control how long each message appears (in milliseconds)

    function showNextError() {
        if (index > 0) {
            errors[index - 1].remove(); // Remove the previous message
        }

        if (index < errors.length) {
            errors[index].classList.remove("hidden"); // Show current error
            setTimeout(showNextError, displayTime); // Wait before showing the next message
            index++;
        }
    }

    showNextError(); // Start the loop
});
