let myAccount = {
    name: "Sina",
    expenses: 0,
    income: 0
}

let otherAccount = myAccount
otherAccount.income = 1000
otherAccount = {}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (account) {
    console.log(`Account for ${account.name} hase $${account.income - account.expenses}. $${account.income} in income. $${account
    .expenses} in expenses`)
}

addIncome(myAccount, 2000)
addExpense(myAccount, 2.50)
addExpense(myAccount, 160)
getAccountSummary(myAccount)
resetAccount(myAccount)
getAccountSummary(myAccount)