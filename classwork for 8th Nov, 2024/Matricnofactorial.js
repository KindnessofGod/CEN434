const matricNumber = "21CJ029177";
const lastTwoDigits = parseInt(matricNumber.slice(-2));

function factorial(n) { 

    let result = BigInt(1);
    for(let i = 1; i <= n; i++) { 
        result *= BigInt(i);
    }

    return result; 
}
const factorialofLastTwoDigits = factorial(lastTwoDigits);
console.log("The factorial of the last twor digits (77) is:", factorialofLastTwoDigits.toString());