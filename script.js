
        function showContent(section) {
            let content = {
                home: "<h1>Home Section</h1><p>Welcome to the Home section!</p>",
                about: "<h1>About Section</h1><p>Learn more about us here.</p>",
                services: "<h1>Services Section</h1><p>Check out our services.</p>",
                contact: "<h1>Contact Section</h1><p>Get in touch with us.</p>"
            };
            document.getElementById("content").innerHTML = content[section];
        }
// Typing Effect
const text = ["Aspiring Full-Stack Developer", "Java Enthusiast", "Web Developer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j);
            j++;
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j);
            j--;
        }

        document.getElementById("typing-text").innerHTML = currentText;

        if (!isDeleting && j === text[i].length) {
            isDeleting = true;
            setTimeout(typeEffect, 1000);
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            if (i === text.length) i = 0;
            setTimeout(typeEffect, 500);
        } else {
            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
}
document.addEventListener("DOMContentLoaded", typeEffect);
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const formData = new FormData(this);

    fetch("contact.php", {
        method: "POST",
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").innerText = data;
    })
    .catch(error => {
        document.getElementById("responseMessage").innerText = "Error sending message.";
    });

    this.reset(); // Clear the form after submission
});
