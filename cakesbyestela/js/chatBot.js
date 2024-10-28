// CHATBOT SCRIPTS FOR CAKES BY ESTELA
// CHATBOT SCRIPTS FOR CAKES BY ESTELA
// CHATBOT SCRIPTS FOR CAKES BY ESTELA
// CHATBOT SCRIPTS FOR CAKES BY ESTELA
// CHATBOT SCRIPTS FOR CAKES BY ESTELA
document.addEventListener("DOMContentLoaded", function () {
  const chatForm = document.getElementById("chatForm");
  const userInput = document.getElementById("userInput");
  const chatMessages = document.getElementById("chatMessages");

  const botResponses = {
    hello: "Hi! How can I help you today?",
    hours: "Our shop is open from 8 AM to 6 PM daily.",
    location: "We are located at San Sebastian Village Gate 3, Tarlac City",
    order: "You can place an order through our website or call us directly.",
    bye: "Goodbye! Have a sweet day!",
  };

  function displayMessage(message, sender) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chatMessage");
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  chatForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const userMessage = userInput.value.trim();
    if (userMessage === "") return;

    displayMessage(userMessage, "user");

    const lowerCaseMessage = userMessage.toLowerCase();
    let botResponse =
      botResponses[lowerCaseMessage] ||
      "Sorry, I didn't understand that. Please try again.";

    setTimeout(() => {
      displayMessage(botResponse, "bot");
    }, 1000);

    userInput.value = "";
  });
});
