// @ts-check

/**
 * This function is responsible for adding two numbers
 * @param {number} number1 - First number for sum
 * @param {number} number2 - Second number for sum
 * @returns {number} - Sum of both numbers
 */
const add = (number1, number2) => {
  return number1 + number2;
};

add(4, 100);

let obj = {
  name: 'Rabi',
  lastName: 'Siddique',
  city: 'Gujranwala',
};

/**
 * This function is responsible for printing the given object
 * @typedef {Object} User
 * @property {string} name
 * @property {string} lastName
 * @property {string} city
 */

/**
 *
 * @param {User} obj
 */
const printObject = (obj) => {
  console.log(obj.name);
  console.log(obj.lastName);
  console.log(obj.city);
};

/**
 * Prints the elements of the array
 * @param {any[]} arr - Array of any type
 * @example
 * // Example Usage
 * const numbers = [1, 2, 3]
 * printArray(numbers)
 */
const printArray = (arr) => {
  for (let elem of arr) {
    console.log(elem);
  }
};

/**
 * Divides two numbers.
 * @param {number} numerator - The numerator.
 * @param {number} denominator - The denominator.
 * @returns {number} The division result.
 * @throws {Error} If the denominator is zero.
 */
const divide = (numerator, denominator) => {
  if (denominator === 0) {
    throw new Error('Cannot divide by zero');
  }
  return numerator / denominator;
};
