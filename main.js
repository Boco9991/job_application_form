// Display selected file name
document.getElementById("resume").addEventListener("change", function () {
  var fileName = this.files[0] ? this.files[0].name : "No file chosen";
  document.getElementById("file-name").textContent = fileName;
});

// Handle form submission
document
  .getElementById("applicationForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Check if all required fields are filled
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const resume = document.getElementById("resume").value;

    if (name && email && phone && resume) {
      // Hide the form
      document.getElementById("applicationForm").classList.add("hidden");

      // Display the success message
      const successMessage = document.getElementById("successMessage");
      successMessage.classList.remove("hidden");

      // Get the current date and display it
      const currentDate = new Date().toLocaleDateString();
      document.getElementById(
        "currentDate"
      ).textContent = `Today's Date: ${currentDate}`;

      // Show the form again after 15 seconds
      setTimeout(function () {
        // Hide the success message
        successMessage.classList.add("hidden");

        // Reset form fields
        document.getElementById("applicationForm").reset();

        // Show the form again
        document.getElementById("applicationForm").classList.remove("hidden");
      }, 15000); // 15000 milliseconds = 15 seconds
    } else {
      alert("Please fill all the required fields.");
    }
  });
