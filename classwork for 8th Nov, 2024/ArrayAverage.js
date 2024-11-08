const A = [1,2,3,4,5,6,7,8,,9,10];

const sum = A.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

const average = sum/A.length; 

console.log("The average is:", average);

