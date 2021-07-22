submitMessage = () => {
    const passcode = document.querySelector("#passcode").value;
    const message = document.querySelector("#message").value;

    console.log(message.length)
    if (message.length > 50 ) {
        alert("Message is too long. Enter a shorter one!");
    }

    else if (passwordSecure(passcode) == false) {
        alert("Password is not secure. Please have at least one capital letter and one number !");
    }

    else {

        firebase.database().ref("/messages").push ({
            passcode: new Hashes.MD5().hex(passcode),
            message: message
        // unique id is auto generated, dw
        });
        
    }
}

passwordSecure = (password) => {
    console.log(passwordHasNumber(password))
    console.log(passwordHasCapital(password))

    if (passwordHasNumber(password) && passwordHasCapital(password))
        return true
    return false
}

passwordHasNumber = (password) => {
    const numbers = [0,1,2,3,4,5,6,7,8,9];
    
    for (let num in numbers){
        if (password.includes(num)){
            console.log(num);
            // console.log(numbers);
            return true;
        }
    }

    return false;
}

passwordHasCapital = (password) => {
    const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    
    for (let i = 0; i < password.length; i++){
        if (password.includes(letters[i]))
        {   
            console.log(letters[i]);
            // console.log(letters);
            return true;
        }
    }
    return false;
}
