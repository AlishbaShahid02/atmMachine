import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.yellowBright(`"Welcome to CLI based ATM Machine"`));
let myBalance = 1000000;
let myPin = 1234;

let pinNumber = await inquirer.prompt([{
    name: "pin",
    type: "number",
    message: "Enter your pin code:"
}]);
if (pinNumber.pin === myPin){
    console.log(chalk.green("Correct pin code!!"));

let operationAns = await inquirer.prompt([{
    name:"operations",
    type: "list",
    message: "Please select any option",
    choices: ["Withdraw", "Deposit", "Check Balance"]
}]);
if (operationAns.operations === "Withdraw"){
    let withdarwAmount = await inquirer.prompt([{
        name: "withdrawMethod",
        type: "list",
        message: "select withdraw method",
        choices: ["Fast Cash", "Enter Amount"]
    }]);
    if(withdarwAmount.withdrawMethod === "Fast Cash"){
        let fastCashAmount = await inquirer.prompt([{
            name: "fastCash",
            type: "list",
            message:"Select an Amount to Withdraw",
            choices: ["500", "1000", "5000", "10000", "20000", "50000"]
        }]);
        if(fastCashAmount.fastCash > myBalance){
            console.log(chalk.bold.red("Insufficient Balance!"));
        }
        else{
            myBalance -= fastCashAmount.fastCash;
            console.log(chalk.bold.magentaBright(`"Your remaining balance is ${myBalance}"`));
        }
    }
    else if(withdarwAmount.withdrawMethod === "Enter Amount"){
        let amountAns = await inquirer.prompt([{
            name: "amount",
            type: "number",
            message:"Enter the amount you want to withdraw"
        }]);
        if(amountAns.amount > myBalance){
            console.log(chalk.bold.red("Insufficient Balance"));
        }
        else{
            myBalance -= amountAns.amount;
            console.log(chalk.bold.magentaBright(`"Your remaining balance is ${myBalance}"`));
        }
}
}
else if(operationAns.operations === "Deposit"){
    let depositAns = await inquirer.prompt([{
        name:"depositAmount",
        type:"number",
        message:"Enter the amount you want to deposit"
    }]);
    myBalance += depositAns.depositAmount;
            console.log(chalk.bold.magentaBright(`"Now, your current balance is ${myBalance}"`));
}
else if(operationAns.operations === "Check Balance"){
    console.log(chalk.bold.magentaBright(`"Your balance is ${myBalance}"`));
}
}
else{
    console.log(chalk.bold.red("Incorrect Pin! Try again!"));
}
