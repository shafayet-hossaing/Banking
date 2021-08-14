// Bank handling
const depositButton = document.getElementById("depositButton")
depositButton.addEventListener("click", () => {

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

    // Selecting balance text

    // Clearing Deposit Input Field
    newDepositAmount.value = ""
})