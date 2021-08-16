// Function For Input Value
function getInput(inputId){
    const newDepositAmount = document.getElementById(inputId);
    let newDepositAmountValue = newDepositAmount.value
    let parsingNewDepositAmountValue = parseFloat(newDepositAmountValue)

    // Applied Function
    newDepositAmount.value = ""

    return parsingNewDepositAmountValue
}



// Function For Text Field
function textField(textFieldId, parsingNewDepositAmountValue){
    const currentDepositText = document.getElementById(textFieldId)
    const currentDepositTextValue = currentDepositText.innerText
    const parsingCurrentDepositTextValue = parseFloat(currentDepositTextValue)

    // Adding the current deposit amount with the update deposit amount
    const newUpdatedDepositText = parsingNewDepositAmountValue + parsingCurrentDepositTextValue

    // Assigning the new value of total deposit
    currentDepositText.innerText = newUpdatedDepositText
}



// Function For Balance .........
function getCurrentBalance(){
    const balance = document.getElementById("balance")
    let currentBalance = balance.innerText
    let parsingCurrentBalance = parseFloat(currentBalance)

    return parsingCurrentBalance
}



// Function For Balance
function balance(parsingNewDepositAmountValue, isAdd){
    const balance = document.getElementById("balance")

    const parsingCurrentBalance = getCurrentBalance()
    if(isAdd){
        // adding the updated deposit amount with balance
        let addingNewCurrentBalance = parsingCurrentBalance + parsingNewDepositAmountValue

        // Updated balance amount
        balance.innerText = addingNewCurrentBalance
    }else{
        // adding the updated deposit amount with balance
        let addingNewCurrentBalance = parsingCurrentBalance - parsingNewDepositAmountValue

        // Updated balance amount
        balance.innerText = addingNewCurrentBalance
    }
}


// Bank handling
const depositButton = document.getElementById("depositButton")
depositButton.addEventListener("click", () => {
    const parsingNewDepositAmountValue = getInput("newDepositAmount")

    if(parsingNewDepositAmountValue > 0){
        textField("currentDepositText", parsingNewDepositAmountValue)
        balance(parsingNewDepositAmountValue, true)
    }else{
        alert("Gimme A Positive Value 💢 😠 ")
    }
    
})


// Withdraw handling
const withdrawButton = document.getElementById("withdrawButton")
withdrawButton.addEventListener("click", () => {
    const parsingNewWithdrawAmountText = getInput("newWithdraw")
    const currentBalance = getCurrentBalance()

    if(parsingNewWithdrawAmountText > 0 && parsingNewWithdrawAmountText < currentBalance){
        textField("withdraw", parsingNewWithdrawAmountText)
        balance(parsingNewWithdrawAmountText, false)
    }
    if(parsingNewWithdrawAmountText > currentBalance){
        alert("Check if the money you've in your account you are asking for")
    }
})