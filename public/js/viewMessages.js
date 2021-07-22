const getMessages = () => {
    const messagesRef = firebase.database().ref();
    messagesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    findMessage(data); 
    });
}

const findMessage = (data) => {
    const messages = data.messages;
    const passcodeAttempt = document.querySelector('#passcode').value;

    let found = false;
    for (message in messages) {
        const messageData = messages[message];
        
        if (messageData.passcode == passcodeAttempt) {
            renderMessageAsHtml(messageData);
            found = true;
        }
    }

    if (found == false)
        alert("Wrong password!");
}

const renderMessageAsHtml = (messageData) => {
    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.classList.add("is-hidden");
            
    const nextMessage = document.querySelector('#nextMsg');
    nextMessage.classList.remove("is-hidden");

    const messageDiv = document.querySelector('.message-body');
    messageDiv.innerHTML = messageData.message;
    
    document.querySelector('#message').classList.remove("is-hidden");
            
}

const nextMessages = () => {

    const passcodeInput = document.querySelector('#passcodeInput');
    passcodeInput.classList.remove("is-hidden");
            
    const nextMessage = document.querySelector('#nextMsg');
    nextMessage.classList.add("is-hidden");

    const messageDiv = document.querySelector('.message-body');
    messageDiv.innerHTML = "";        

    document.querySelector('#message').classList.add("is-hidden");
}


