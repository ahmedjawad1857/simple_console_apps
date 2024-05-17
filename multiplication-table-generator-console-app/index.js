#!/usr/bin/env node
import inquirer from "inquirer";
const questions = await inquirer.prompt([
    {
        name: "tableNum",
        type: "number",
        default: 2,
        message: "Which multiplication table would you like to see?",
    },
    {
        name: "tableLen",
        type: "number",
        default: 10,
        ma,
        message: "Up to which number would you like to see the multiplication table?",
    },
]);
const generateTable = (tableNumber, tableLength) => {
    console.log(`Multiplication table of ${tableNumber} up to ${tableLength}:`);
    for (let i = 1; i <= tableLength; i++) {
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
    }
};
let tableLength = questions.tableLen;
let tableNumber = questions.tableNum;
generateTable(tableNumber, tableLength);
