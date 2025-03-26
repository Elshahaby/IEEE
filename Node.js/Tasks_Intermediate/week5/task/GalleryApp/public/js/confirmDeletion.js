document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".delete-btn").forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const imageId = this.getAttribute("data-image-id"); // Fetch public_id from button attribute
            const deleteUrl = `/gallery/delete/${imageId}`; // Construct DELETE API URL

            Swal.fire({
                title: "Are you sure?",
                text: "This action cannot be undone!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    fetch(deleteUrl, { method: "DELETE" })
                        .then(response => response.json())
                        .then(res => {
                            if (res.success) {
                                Swal.fire("Deleted!", res.message, "success").then(() => {
                                    location.reload(); // Refresh page to update UI
                                });
                            } else {
                                Swal.fire("Error!", res.error || "Deletion Error Detected", "error");
                            }
                        })
                        .catch(error => {
                            console.error("Deletion Error:", error);
                            Swal.fire("Error!", "Something went wrong.", "error");
                        });
                }
            });
        });
    });
});
