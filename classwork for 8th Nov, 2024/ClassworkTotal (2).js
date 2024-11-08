const A = [1,2,3,4,5,6,7,8,9,10];

const sum = A.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum/A.length; 



//Task 2: factorial of last two digitis of my matric number

const matricNumber = "21CJ029177";
const lastTwoDigits = parseInt(matricNumber.slice(-2));

function factorial(n) { 

    let result = BigInt(1);
    for(let i = 1; i <= n; i++) { 
        result *= BigInt(i);
    }

    return result; 
}


//TASK 3: 


function combination(n,r) { 
    if (r > n) return BigInt(0);
    return factorial(n) / (factorial(r) * factorial(n-r));

}

function calculateCombination(X, Y) { 
    let result; 
    if (X > Y) { 
        ''
        result = combination(X, Y); 
        console.log(`C(${X}, ${Y}) = ${result.toString()}`)
    } else if (X === Y) {
        result = combination(X+1, Y);
        console.log(`C(${X + 1}, ${Y}) = ${result.toString()}`)
    } else { 

        result = combination(Y, X);
        console.log(`C(${Y}, ${X}) = ${result.toString()}`);
    }

    return result; 

}













calculateCombination(12, 7);
calculateCombination(7, 7);
calculateCombination(7, 3);

const factorialofLastTwoDigits = factorial(lastTwoDigits);
console.log("The factorial of the last twor digits (77) is:", factorialofLastTwoDigits.toString());

console.log("The average is:", average);