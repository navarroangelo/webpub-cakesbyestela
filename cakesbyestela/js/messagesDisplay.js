document.addEventListener("DOMContentLoaded", function () {
  const customerMsgsList = document.querySelector(".customerMsgs-list-content");
  const searchInput = document.getElementById("customerSearch");

  async function fetchMessages() {
    try {
      const response = await fetch("http://localhost:5000/api/messages");
      const messages = await response.json();
      displayMessages(messages);

      searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredMessages = messages.filter(
          (msg) =>
            msg.name.toLowerCase().includes(query) ||
            msg.email.toLowerCase().includes(query) ||
            msg.message.toLowerCase().includes(query)
        );
        displayMessages(filteredMessages);
      });
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }

  function displayMessages(messages) {
    customerMsgsList.innerHTML = "";
    if (messages.length === 0) {
      customerMsgsList.innerHTML = "<p>No messages found</p>";
    } else {
      messages.forEach((msg) => {
        const msgDiv = document.createElement("div");
        msgDiv.classList.add("message-item");
        msgDiv.innerHTML = `
          <p><strong>Name:</strong> ${msg.name}</p>
          <p><strong>Email:</strong> ${msg.email}</p>
          <p><strong>Phone:</strong> ${msg.phone}</p>
          <p><strong>Message:</strong> ${msg.message}</p>
          <p><strong>Date:</strong> ${msg.date}</p>
        `;
        customerMsgsList.appendChild(msgDiv);
      });
    }
  }

  fetchMessages();
});
