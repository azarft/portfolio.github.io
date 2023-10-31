document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user's email and message
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // You can handle the submission in various ways, such as sending an email or storing the data
    // For this example, we'll log the data to the console
    console.log("Email: " + email);
    console.log("Message: " + message);

    // You can also add code to send an email or perform other actions here

    // Optionally, you can reset the form after submission
    document.getElementById("contact-form").reset();
});
