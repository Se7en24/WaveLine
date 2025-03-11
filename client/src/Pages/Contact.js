document.addEventListener("DOMContentLoaded", function () {
    const contactSection = document.createElement("section");
    contactSection.className = "contact-section";
    contactSection.innerHTML = `
        <style>
            .contact-section {
                background: #f5f5f5;
                padding: 50px;
                text-align: center;
            }

            .container {
                max-width: 600px;
                margin: auto;
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
            }

            .contact-details p {
                font-size: 16px;
                color: #333;
                margin: 5px 0;
            }

            h2, h3 {
                color: #222;
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 10px;
                margin-top: 15px;
            }

            input, textarea {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                font-size: 14px;
            }

            textarea {
                resize: vertical;
                height: 100px;
            }

            button {
                background-color: #ffcc00;
                border: none;
                padding: 10px;
                font-size: 16px;
                cursor: pointer;
                border-radius: 5px;
                font-weight: bold;
            }

            button:hover {
                background-color: #ffdb4d;
            }

            #responseMessage {
                margin-top: 10px;
                font-weight: bold;
                color: green;
            }
        </style>
        
        <div class="container">
            <h2>Contact Us</h2>
            <div class="contact-details">
                <p><strong>Email:</strong> support@oceanoracle.com</p>
                <p><strong>Phone:</strong> +1 234 567 890</p>
                <p><strong>Address:</strong> 123 Ocean Drive, Shipping City</p>
            </div>
            <h3>Feedback Form</h3>
            <form id="feedback-form">
                <input type="text" id="name" placeholder="Your Name" required>
                <input type="email" id="email" placeholder="Your Email" required>
                <textarea id="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send</button>
            </form>
            <p id="responseMessage"></p>
        </div>
    `;

    document.body.appendChild(contactSection);

    document.getElementById("feedback-form").addEventListener("submit", function (event) {
        event.preventDefault();
        document.getElementById("responseMessage").textContent = "Thank you for your feedback!";
    });
});
