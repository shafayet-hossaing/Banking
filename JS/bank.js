// Adding addEventListener To Submit Button
const submitButton = document.getElementById("submitButton")
submitButton.addEventListener("click", (e) => {
    e.preventDefault()

    // Selecting Email Input
    const emailBox = document.getElementById("emailBox")
    const emailBoxValue = emailBox.value

    // Selecting Password Input
    const passwordBox = document.getElementById("passwordBox")
    const passwordBoxValue = passwordBox.value


    // Checking Condition For Bank Access
    if(emailBoxValue != "son@father.com"){
        let emailVoice = new Audio("Audios/email.mp3") // Voice Error Alert
        emailVoice.play()
    }
    else if(emailBoxValue == "son@father.com" && passwordBoxValue == "Money"){
        window.location.href = "bank.html"
    }else{
        let PasswordVoice = new Audio("Audios/password.mp3") // Voice Error Alert
        PasswordVoice.play()
    }
    
})