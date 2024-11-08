function factorial(n) { 
    let result = BigInt(1);
    for (let i = 1; i <=n; i++) {
        result *=BigInt(i);
    }
    return result; 
}

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

        reult = combination(Y, X);
        console.log(`C(${Y}, ${X}) = ${result.toString()}`);
    }

    return result; 

}

calculateCombination(12, 7);
calculateCombination(7, 7);
calculateCombination(7, 3);