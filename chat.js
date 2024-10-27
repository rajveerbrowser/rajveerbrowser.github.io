document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Function to send message
function sendMessage() {
    const inputField = document.getElementById('user-input');
    const message = inputField.value;

    if (message.trim() === '') return; // Prevent sending empty messages

    appendMessage('User: ' + message);
    inputField.value = ''; // Clear input field

    // Simulate chatbot response
    setTimeout(() => {
        appendMessage('Chatbot: ' + getChatbotResponse(message));
    }, 1000);
}

// Append messages to the chat window
function appendMessage(message) {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += '<div>' + message + '</div>';
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

// Function to generate chatbot response
function getChatbotResponse(input) {
    const responses = {
        hello: 'Hi there! How can I help you today?',
        bye: 'Goodbye! Have a great day!',
        // Add more responses as needed
    };

    const normalizedInput = input.toLowerCase();
    return responses[normalizedInput] || "I'm sorry, I don't understand that.";
}

// Add iframe dynamically
function addChatbotIframe() {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://cdn.botpress.cloud/webchat/v2.2/shareable.html?configUrl=https://files.bpcontent.cloud/2024/10/27/11/20241027110138-HJT69B5R.json'; // Replace with your chatbot URL
    iframe.style.border = '0';
    iframe.style.width = '100%';
    iframe.style.height = '400px'; // Adjust height as needed

    document.getElementById('iframe-container').appendChild(iframe);
}

// Call the function to add the iframe when the page loads
window.onload = addChatbotIframe;
