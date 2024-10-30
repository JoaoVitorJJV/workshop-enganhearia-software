
function add(a: number, b: number) {
    return a + b;
}

function subtract(a: number, b: number) {
    return a - b;
}

function multiply(a: number, b: number) {
    return a * b;
}

function divide(a: number, b: number) {
    if (b === 0) {
        throw new Error("Não é possível dividir por zero.");
    }
    return a / b;
}

function calculator(operation: string, num1: number, num2: number) {
    switch (operation) {
        case 'adicao':
            return add(num1, num2);
        case 'subtracao':
            return subtract(num1, num2);
        case 'multiplicacao':
            return multiply(num1, num2);
        case 'divisao':
            return divide(num1, num2);
        default:
            throw new Error("Operação inválida. Use: 'adicao', 'subtracao', 'multiplicacao' ou 'divisao'.");
    }
}

const args = process.argv.slice(2);
const [operation, num1, num2] = args;

if (!operation || isNaN(Number(num1)) || isNaN(Number(num2))) {
    console.log("Uso: npm start <operation> <num1> <num2>");
    process.exit(1);
}

try {
    const result = calculator(operation, Number(num1), Number(num2));
    console.log(`Resultado: ${result}`);
} catch (error) {
    console.error(`Erro: ${(error as Error).message}`);
}
