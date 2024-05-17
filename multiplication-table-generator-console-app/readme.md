# multiplication-table-genius

multiplication-table-genius is a simple Node.js package that generates multiplication tables based on user input.

## Installation

You can install multiplication-table-genius globally to use it as a command line tool, or locally to include it in your Node.js projects.

### Global Installation

```bash
npm install -g multiplication-table-genius
```

### Local Installation

```bash
npm install multiplication-table-genius
```

## Usage

### As a Command Line Tool

After installing multiplication-table-genius globally, you can run it using the `multiplication-table-genius` command in your terminal.

```bash
npx multiplication-table-genius
```

Follow the prompts to select the multiplication table you want to see and the range of numbers you want to display.

### In Node.js Projects

You can also use multiplication-table-genius in your Node.js projects by requiring it as a module.

```javascript
const tableMaker = require("multiplication-table-genius");

// Example usage
const table = tableMaker.generateTable(2, 10);
console.log(table);
```

## Features

- Generates multiplication tables based on user input.
- Allows users to specify the starting number and the range of numbers to display in the table.

## Example

```
Which multiplication table would you like to see? (default: 2):
Which number do you want to multiply up to? (default: 10):

Multiplication table of 2 up to 10:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
2 x 4 = 8
2 x 5 = 10
2 x 6 = 12
2 x 7 = 14
2 x 8 = 16
2 x 9 = 18
2 x 10 = 20
```

### here you see the code

[Table Master](https://github.com/ahmedjawad1857/simple_node_projects/multiplication-table-genius-console-app)
