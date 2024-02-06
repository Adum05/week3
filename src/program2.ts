// beginner-calculator.ts

function calculator(operation: string, num1: number, num2: number): void {
    if (isNaN(num1) || isNaN(num2)) {
        console.error("Please enter valid numbers.");
        return;
    }

    let result: number;

    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 === 0) {
                console.error("Cannot divide by zero.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.error("Invalid operation. Use 'add', 'subtract', 'multiply', or 'divide'.");
            return;
    }

    console.log(`Result of ${operation} ${num1} and ${num2}: ${result}`);
}

const operation: string = process.argv[2];
const num1: number = parseFloat(process.argv[3]);
const num2: number = parseFloat(process.argv[4]);

if (!operation || isNaN(num1) || isNaN(num2)) {
    console.log("Usage: ts-node beginner-calculator.ts <operation> <num1> <num2>");
} else {
    calculator(operation, num1, num2);
}

