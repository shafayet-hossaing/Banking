// Bank handling
const depositButton = document.getElementById("depositButton")
depositButton.addEventListener("click", () => {

    // Working with deposit board
    // Selecting deposit input
    const newDepositAmount = document.getElementById("newDepositAmount")
    let newDepositAmountValue = newDepositAmount.value

    // Selecting current deposit text
    const currentDepositText = document.getElementById("currentDepositText")
    const currentDepositTextValue = currentDepositText.innerText

    // Adding the current deposit amount with the update deposit amount
    const newUpdatedDepositText = parseFloat(currentDepositTextValue) + parseFloat(newDepositAmountValue)

    // Assigning the new value of total deposit
    currentDepositText.innerText = newUpdatedDepositText



    // Working with balance board
    // Selecting balance text
    const balance = document.getElementById("balance")
    let currentBalance = balance.innerText

    // adding the updated deposit amount with balance
    let addingNewCurrentBalance = parseFloat(currentBalance) + parseFloat(newDepositAmountValue)

    // Updated balance amount
    balance.innerText = addingNewCurrentBalance

    // Clearing Deposit Input Field
    newDepositAmount.value = ""
})


// Withdraw handling
const withdrawButton = document.getElementById("withdrawButton")
withdrawButton.addEventListener("click", () => {
    

    // Selecting Withdraw Input
    const newWithdrawAmount = document.getElementById("newWithdraw")
    const newWithdrawAmountText = newWithdrawAmount.value

    // Selecting withdraw text
    const currentWithdraw = document.getElementById("withdraw")
    const currentWithdrawText = currentWithdraw.innerText

    // Adding new withdraw with current withdraw
    const newUpdatedWithdrawAmount = parseFloat(currentWithdrawText) + parseFloat(newWithdrawAmountText)
    currentWithdraw.innerText = newUpdatedWithdrawAmount

    // Selecting balance text
    const balance = document.getElementById("balance")
    let currentBalance = balance.innerText

    // Subtracting new withdraw amount from balance
    const newUpdatedBalanceAmount = currentBalance - newWithdrawAmountText
    balance.innerText = newUpdatedBalanceAmount

})