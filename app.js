// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// Part 2: Prime Time
const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
const findNextPrime = (n) => {
  if (isPrime(n)) {
    console.log(`Next prime after starting number: ${n}`);
    return;
  }
  findNextPrime(n + 1);
};
findNextPrime(9);

// Part 3: Feeling Loopy
const parseCSV = (csvString) => {
  const rows = csvString.split("\n");
  for (let row of rows) {
    const cells = row.split(",");
    console.log(...cells);
  }
};

const exampleCSV = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;
console.log("Example CSV Output:");
parseCSV(exampleCSV);

const additionalCSV = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
console.log("\nAdditional CSV Output:");
parseCSV(additionalCSV);
