#!/usr/bin/env node
import inquirer from "inquirer";

const questions: any = await inquirer.prompt([
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
    message:
      "Up to which number would you like to see the multiplication table?",
  },
]);

const generateTable = (tableNumber: number, tableLength: number): void => {
  console.log(`Multiplication table of ${tableNumber} up to ${tableLength}:`);
  for (let i = 1; i <= tableLength; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
  }
};

let tableLength: number = questions.tableLen;
let tableNumber: number = questions.tableNum;

generateTable(tableNumber, tableLength);
