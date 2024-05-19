#!/usr/bin/env node
import inquirer, { QuestionCollection } from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

// Function to display welcome message with animation
const displayWelcomeMessage = async (): Promise<void> => {
  const welcomeAnimation = chalkAnimation.rainbow(
    "Welcome to Multiplication Table Generator Console App"
  );
  await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
  welcomeAnimation.stop();
  console.log(chalk.hex("#df899")("Let's create some multiplication tables!"));
};
const generateRainbowColor = (): string => {
  const now = new Date().getTime();
  const frequency = 0.1; // Adjust the frequency to change the speed of the rainbow effect
  const red = Math.sin(frequency * now + 0) * 127 + 128;
  const green = Math.sin(frequency * now + (2 * Math.PI) / 3) * 127 + 128;
  const blue = Math.sin(frequency * now + (4 * Math.PI) / 3) * 127 + 128;

  return `#${Math.round(red).toString(16)}${Math.round(green).toString(
    16
  )}${Math.round(blue).toString(16)}`;
};

// Example usage
const color: string = generateRainbowColor(); // Generate a rainbow-like color

// Function to animate multiplication table generation
const animateMultiplicationTable = async (
  tableNumber: number,
  tableLength: number
): Promise<void> => {
  const generationAnimation = chalkAnimation.rainbow(
    "Generating the multiplication table..."
  );
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait for 1 seconds
  generationAnimation.stop();
  console.log(
    `\n${chalk
      .hex("#f86820")
      .bold(`Multiplication table of ${tableNumber} up to ${tableLength}:\n`)}`
  );
};

// Function to generate and display multiplication table
const generateTable = async (
  tableNumber: number,
  tableLength: number
): Promise<void> => {
  await animateMultiplicationTable(tableNumber, tableLength);
  for (let i = 1; i <= tableLength; i++) {
    console.log(chalk.hex(color)(`${tableNumber} x ${i} = ${tableNumber * i}`));
  }
};

await displayWelcomeMessage();

const questions: QuestionCollection<any> = [
  {
    name: "tableNum",
    type: "number",
    default: 2,
    message: chalk.hex("#b1cd2")(
      "Which multiplication table would you like to see?"
    ),
  },
  {
    name: "tableLen",
    type: "number",
    default: 10,
    message: chalk.hex("#b1cd2")(
      "Up to which number would you like to see the multiplication table?"
    ),
  },
];

const answers: any = await inquirer.prompt(questions);

const tableLength: number = answers.tableLen;
const tableNumber: number = answers.tableNum;

generateTable(tableNumber, tableLength);
