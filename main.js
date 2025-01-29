const fs = require('fs');
const computeSecret = require('./modules/computeSecret');

// Read the first input JSON file
const inputData1 = JSON.parse(fs.readFileSync('testCase1.json', 'utf8'));

// Read the second input JSON file
const inputData2 = JSON.parse(fs.readFileSync('testCase2.json', 'utf8'));

// Compute secrets for both test cases
const secret1 = computeSecret(inputData1);
const secret2 = computeSecret(inputData2);

// Output the results
console.log('Secret for Test Case 1:', secret1);
console.log('Secret for Test Case 2:', secret2);
