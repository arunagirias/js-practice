

function isEven(num) {
  if (num % 2 === 0) {
    console.log(num + " is Even");
  } else {
    console.log(num + " is Odd");
  }
}
isEven(4); // Output: Even

// 2. Arrow function to print name 5 times
const printName = (name) => {
  for (let i = 1; i <= 5; i++) {
    console.log(i + ". " + name);
  }
};
printName("Arunagiri");

// 3. Convert string to upper and lower case
function changeCase(str) {
  console.log("Uppercase: " + str.toUpperCase());
  console.log("Lowercase: " + str.toLowerCase());
}
changeCase("JavaScript");

// 4. Find factorial of a number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log("Factorial of " + n + " is " + result);
}
factorial(5); // Output: 120

// 5. Count vowels in a string
function countVowels(str) {
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  console.log("Number of vowels in '" + str + "' is: " + count);
}
countVowels("Hello World");

// 6. Array insert and delete
const a1 = [23, 45, 89, 22, 77, 9];
a1.push(55); // Add new element
console.log("After Insert: " + a1);
a1.pop(); // Remove last element
console.log("After Delete Last: " + a1);

// 7. Table of 8
function printTable(n) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${i} X ${n} = ${i * n}`);
  }
}
printTable(8);

// 8. Replace "front end" to "Full Stack"
let text = "I am a front end developer";
let newText = text.replace("front end", "Full Stack");
console.log("Updated Text: " + newText);

// 9. Check if a number is divisible by 6
function isDivisibleBy6(num) {
  if (num % 6 === 0) {
    console.log(num + " is divisible by 6");
  } else {
    console.log(num + " is NOT divisible by 6");
  }
}
isDivisibleBy6(18);

// 10. Print today’s date
function printTodayDate() {
  const today = new Date();
  const formatted = today.toLocaleDateString();
  console.log("Today's Date: " + formatted);
}
printTodayDate();