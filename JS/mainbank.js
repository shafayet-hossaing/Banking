// Function For Input
function getInput(inputId){
    const inputField = document.getElementById(inputId)
    let newInputValue = inputField.value
    let parseInputValue = parseFloat(newInputValue)
    
    // Clearing Input Field
    inputField.value = ""
    return parseInputValue
}


// Function For Field
function field(newUpdatedFieldValue, amount){
    const currentText = document.getElementById(newUpdatedFieldValue)
    const currentTextValue = currentText.innerText
    const parsingCurrentTextValue = parseFloat(currentTextValue)


    // Adding the current deposit amount with the update deposit amount
    const newUpdatedDepositText = amount + parsingCurrentTextValue

    // Assigning the new value of total deposit
    currentText.innerText = newUpdatedDepositText
}



// Function For Balance Board
function balance(parsingNewAmountValue, isAdd){
    const balance = document.getElementById("balance")
    let currentBalance = balance.innerText
    let parsingCurrentBalance = parseFloat(currentBalance)


    if(isAdd == true){
        // adding the updated deposit amount with balance
        let addingNewCurrentBalance = parsingCurrentBalance + parsingNewAmountValue
        // Updated balance amount
        balance.innerText = addingNewCurrentBalance
    }else{
        // adding the updated deposit amount with balance
        let addingNewCurrentBalance = parsingCurrentBalance - parsingNewAmountValue
        // Updated balance amount
        balance.innerText = addingNewCurrentBalance
    }
}



// Bank handling
const depositButton = document.getElementById("depositButton")
depositButton.addEventListener("click", () => {

    // Working with deposit board
    // Selecting deposit input
    /* // Applied Function
    const newDepositAmount = document.getElementById("newDepositAmount")
    let newDepositAmountValue = newDepositAmount.value
    let parsingNewDepositAmountValue = parseFloat(newDepositAmountValue)
    */

    


    // Selecting current deposit text
    /*
    const currentDepositText = document.getElementById("currentDepositText")
    const currentDepositTextValue = currentDepositText.innerText
    const parsingCurrentDepositTextValue = parseFloat(currentDepositTextValue)


    // Adding the current deposit amount with the update deposit amount
    const newUpdatedDepositText = parsingNewDepositAmountValue + parsingCurrentDepositTextValue


    // Assigning the new value of total deposit
    currentDepositText.innerText = newUpdatedDepositText
    */

    

    // Working with balance board
    // Selecting balance text
    /*
    const balance = document.getElementById("balance")
    let currentBalance = balance.innerText
    let parsingCurrentBalance = parseFloat(currentBalance)


    // adding the updated deposit amount with balance
    let addingNewCurrentBalance = parsingCurrentBalance + parsingNewDepositAmountValue


    // Updated balance amount
    balance.innerText = addingNewCurrentBalance
    */

    // Calling Function
    const parsingNewDepositAmountValue = getInput("newDepositAmount")

    // Condition For Minus Value
    if(parsingNewDepositAmountValue > 0){
        // Calling Function
        field("currentDepositText", parsingNewDepositAmountValue)
        // Calling Function
        balance(parsingNewDepositAmountValue, true)
    }else{
        alert("Gimme A Positive Value 💢 😠 ")
    }
    


    // Clearing Deposit Input Field
    // Applied Function
    // newDepositAmount.value = ""
})


// Withdraw handling
const withdrawButton = document.getElementById("withdrawButton")
withdrawButton.addEventListener("click", () => {
    

    // Selecting Withdraw Input
    /*  // Applied Function
    const newWithdrawAmount = document.getElementById("newWithdraw")
    const newWithdrawAmountText = newWithdrawAmount.value
    const parsingNewWithdrawAmountText = parseFloat(newWithdrawAmountText)
    */

    


    // Selecting withdraw text
    /*
    const currentWithdraw = document.getElementById("withdraw")
    const currentWithdrawText = currentWithdraw.innerText
    const parsingCurrentWithdrawText = parseFloat(currentWithdrawText)


    // Adding new withdraw with current withdraw
    const newUpdatedWithdrawAmount = parsingCurrentWithdrawText + parsingNewWithdrawAmountText
    currentWithdraw.innerText = newUpdatedWithdrawAmount
    */

    

    // Selecting balance text
    /*
    const balance = document.getElementById("balance")
    let currentBalance = balance.innerText
    let parsingCurrentBalance = parseFloat(currentBalance)

    // Subtracting new withdraw amount from balance
    const newUpdatedBalanceAmount = parsingCurrentBalance - parsingNewWithdrawAmountText
    balance.innerText = newUpdatedBalanceAmount
    */


    // Calling Function
    const parsingNewWithdrawAmountText = getInput("newWithdraw")

    // Condition For Minus Value
    if(parsingNewWithdrawAmountText > 0){
        // Calling Function
        field("withdraw", parsingNewWithdrawAmountText)
        // Calling Function
        balance(parsingNewWithdrawAmountText, false)
    }else{
        alert("Gimme A Positive Value 💢 😠 ")
    }
    
    


    // Clearing the withdraw input
    // Applied Function
    // newWithdrawAmount.value = ""

})