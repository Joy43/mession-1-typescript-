{
    // Install ts-node-dev and run with the following command:
// npm i -g ts-node-dev || ts-node-dev --respawn --transpile-only ./module/src/ternary.ts

// Ternary operation example
const age: number = 15;
const isAdult = age >= 18 ? 'adult' : 'not adult';
console.log({ isAdult }); // Output: { isAdult: 'not adult' }

// Nullish coalescing operation example
const isAuthenticated: string | null = null;
const result1 = isAuthenticated ?? 'Guest';
const result2=isAuthenticated?isAuthenticated:'guest';

console.log({ result1,result2 }); // Output: { result1: 'Guest' }

}