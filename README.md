JS Doc is a documentation syntax used to add comments directly into JavaScript code, which helps generate API documentation and provides type hints for IDEs and tools like TypeScript.

# Observations

- Adding `@ts-check` at the top of a file makes JSDoc much more helpful while developing. It shows errors in the code while writing, making it easier to fix them.

# Basic Syntax

JSDoc comments are written inside `/** ... */` and typically placed above the element being documented.

```javascript
/**
 * A simple function to add two numbers.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 */
function add(a, b) {
  return a + b;
}
```

# Common Tags

Here are some frequently used JSDoc tags:

- `@param`: Describes function parameters.

  ```javascript
  /**
   * Multiplies two numbers.
   * @param {number} x - The first number.
   * @param {number} y - The second number.
   * @returns {number} The product of the numbers.
   */
  function multiply(x, y) {
    return x * y;
  }
  ```

- `@returns`: Describes the function's return value.

  ```javascript
  /**
   * Concatenates two strings.
   * @param {string} str1 - The first string.
   * @param {string} str2 - The second string.
   * @returns {string} The concatenated result.
   */
  function concat(str1, str2) {
    return str1 + str2;
  }
  ```

- `@typedef`: Defines custom types.

  ```javascript
  /**
   * @typedef {Object} User
   * @property {string} name - The user's name.
   * @property {number} age - The user's age.
   */

  /**
   * Logs user details.
   * @param {User} user - The user object.
   */
  function logUser(user) {
    console.log(`${user.name}, ${user.age}`);
  }
  ```

- `@example`: Adds code examples.

  ```javascript
  /**
   * Adds an item to an array.
   * @param {any[]} array - The array to modify.
   * @param {any} item - The item to add.
   * @returns {any[]} The updated array.
   * @example
   * // Example usage:
   * const numbers = [1, 2];
   * addItem(numbers, 3); // [1, 2, 3]
   */
  function addItem(array, item) {
    array.push(item);
    return array;
  }
  ```

- `@throws`: Indicates errors the function may throw.

  ```javascript
  /**
   * Divides two numbers.
   * @param {number} numerator - The numerator.
   * @param {number} denominator - The denominator.
   * @returns {number} The division result.
   * @throws {Error} If the denominator is zero.
   */
  function divide(numerator, denominator) {
    if (denominator === 0) {
      throw new Error('Cannot divide by zero');
    }
    return numerator / denominator;
  }
  ```
