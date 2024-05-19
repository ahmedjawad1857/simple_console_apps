#!/usr/bin/env node
import inquirer from "inquirer";
import clipboardy from "clipboardy";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
// Function to display welcome message with animation
const displayWelcomeMessage = async () => {
    const text = "Welcome to Password Generator Console App";
    const welcomeAnimation = chalkAnimation.karaoke(text);
    await new Promise((resolve) => setTimeout(resolve, 4000));
    welcomeAnimation.stop();
    console.log(chalk.greenBright("Here you can generate a random password."));
};
// Function to animate prompts
const animatePrompts = async () => {
    const promptAnimation = chalkAnimation.karaoke("Select your options:");
    await new Promise((resolve) => setTimeout(resolve, 2900)); // Wait for 2.9 seconds
    promptAnimation.stop();
};
// Function to animate password generation
const animatePasswordGeneration = async () => {
    const generationAnimation = chalkAnimation.karaoke("Generating your password...");
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Wait for 3 seconds
    generationAnimation.stop();
};
await displayWelcomeMessage();
await animatePrompts();
const questions = [
    {
        name: "passwordLength",
        message: chalk.rgb(252, 15, 192)("How many characters would you like your password to be?"),
        type: "number",
        validate: (value) => {
            if (!isNaN(value) && value >= 4 && value <= 20) {
                return true;
            }
            return chalk.red("Please enter a number between 4 and 20.");
        },
        default: 8,
    },
    {
        name: "selectedOptions",
        type: "checkbox",
        message: chalk.rgb(252, 15, 192)("Select one or more options:"),
        choices: [
            "Add UpperCase letters",
            "Add LowerCase letters",
            "Add Numbers",
            "Add Symbols",
        ],
        default: ["Add LowerCase letters"],
        validate: (answer) => {
            if (answer.length < 1) {
                return chalk.red("You must choose at least one option.");
            }
            return true;
        },
    },
];
const answers = await inquirer.prompt(questions);
// Function to generate password based on options
const generatePassword = (options, passLength) => {
    let generatedPassword = "";
    let charset = "";
    if (options.includes("Add UpperCase letters")) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (options.includes("Add LowerCase letters")) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (options.includes("Add Numbers")) {
        charset += "0123456789";
    }
    if (options.includes("Add Symbols")) {
        charset += "#@!£$%&*";
    }
    for (let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        generatedPassword += charset[randomIndex];
    }
    return generatedPassword;
};
await animatePasswordGeneration();
const generatedPassword = generatePassword(answers.selectedOptions, answers.passwordLength);
console.log(`${chalk.yellow("Your generated password is:")} ${chalk
    .hex("#6495ED")
    .bold(generatedPassword)}`);
// Function to check password strength
const checkPasswordStrength = (password) => {
    const length = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[@#£$%&*]/.test(password);
    let strength = "Weak";
    if (length >= 8 && hasUppercase && hasLowercase && hasNumber && hasSymbol) {
        strength = "Strong";
    }
    else if (length >= 6 && hasLowercase && (hasNumber || hasSymbol)) {
        strength = "Moderate";
    }
    return strength;
};
const copyPassword = (password) => {
    clipboardy.writeSync(password); // Copy the password to clipboard
    console.log(chalk.green("Password copied to clipboard!"));
};
// Analyze password strength and display the result
const passwordStrength = checkPasswordStrength(generatedPassword);
switch (passwordStrength) {
    case "Weak":
        console.log(chalk.red(`Password Strength: ${chalk.italic(passwordStrength)}`));
        break;
    case "Moderate":
        console.log(chalk.hex("#FF9800")(`Password Strength: ${chalk.italic(passwordStrength)}`));
        break;
    case "Strong":
        console.log(chalk.green(`Password Strength: ${chalk.italic(passwordStrength)}`));
        break;
    default:
        console.log(chalk.rgb(252, 15, 192)("Password Strength: Weak"));
        break;
}
const copiedQuestion = await inquirer.prompt({
    name: "copyPassword",
    type: "confirm",
    message: chalk.rgb(252, 15, 192)("Do you want to copy your password?"),
    default: true,
});
if (copiedQuestion.copyPassword) {
    copyPassword(generatedPassword);
}
else {
    console.log(chalk.red("Password not copied to clipboard!"));
}
