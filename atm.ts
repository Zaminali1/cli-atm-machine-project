#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 7777;
let pinAnswer = await inquirer.prompt(
[
    {
        name : "pin",
        message: "Enter your pin",
        type: "number"
    }
]
);
if (pinAnswer.pin===myPin){
    console.log("Correct pin code");
    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "please select one option",
                type : "list",
                choices: ["withdraw" ,"fast cash", "check balance"]
            }
        ]
    );
    if (operationAns.operation==="withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name : "amount",
                    message: "Enter amount ",
                    type: "number"
                }
            ]
        );
           if (amountAns.amount > myBalance){
            console.log("your balance is Insufficient")
           }


      else{  myBalance -= amountAns.amount;
        console.log("Your Remaining Balance is: "  +myBalance)
      }
    } 
       else if (operationAns.operation==="fast cash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "Select the amount which you want to withdraw",
                    type: "list",
                    choices: [1000 , 2000 , 5000 , 10000 , 20000]
                }
            ]
         );
            myBalance -= fast.fastcash;
            console.log(`You have successfully withdraw: ${fast.fastcash} \nYour Remaining Balance is: ${myBalance}`)    
   }



    else if (operationAns.operation==="check balance" ){
        console.log (`Your current balance is ${myBalance}`)
    
    }
}
else {
    console.log("Incorrect pin Please Try Again");
}