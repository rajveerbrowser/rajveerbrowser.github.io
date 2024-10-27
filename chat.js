// chat.js

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

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

function appendMessage(message) {
    const messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += '<div>' + message + '</div>';
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // Scroll to the bottom
}

function getChatbotResponse(input) {
    // Basic chatbot responses (You can expand this)
    const responses = {
        hello: 'Hi there! How can I help you today?',
        'how are you?': 'I am just a program, but thanks for asking!',
        'what is your name?': 'I am a chatbot for Selfish RV!',
        // Add more responses as needed
    };

    return responses[input.toLowerCase()] || "I'm sorry, I don't understand that.";
}
