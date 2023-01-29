export function twoSum(array1, array2) {
  return Number(String(array1.join(""))) + Number(String(array2.join("")));
}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  value = value + "";
  return value === value.split("").reverse().join("");
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // ✕ identifies if there is no input value (9 ms)
  // ✕ identifies invalid inputs (1 ms)
  // ✕ returns an empty string for valid inputs (3 ms)

  return (input != "0" && Number(input) == 0) ||
    (input && input.length == 0) ||
    String(input) == "null" ||
    String(input) == "undefined"
    ? "Required field"
    : input != "0" && Number.isInteger(Math.round(Number(input)))
    ? ""
    : "Must be a number besides 0";
}
