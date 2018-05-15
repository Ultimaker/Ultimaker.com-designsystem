/**
 * Arithmetic (from the Greek ἀριθμός arithmos, "number") is a branch of mathematics that consists
 * of the study of numbers, especially the properties of the traditional operations between them—addition,
 * subtraction, multiplication and division.
 */
class Arithmetic {
    /**
     * Rounds a number to the given amount of decimals
     * @param {!number} number - Number to round
     * @param {!number} decimals - Amount of decimals
     * @returns {number} - Result
     */
    static round(number, decimals) {
        const multiplier = Math.pow(10, decimals);

        return decimals > 0 ?
            Math.round(number * multiplier) / multiplier :
            Math.round(number);
    }

    /**
     * Converts a number to a string with specified number of decimals
     * @remark .toFixed uses floor instead of round
     * @param {!number} number - Number to convert
     * @param {!number} decimals - Amount of decimals
     * @returns {string} - Result
     */
    static fixedNumber(number, decimals) {
        const rounded = Arithmetic.round(number, decimals);

        return parseFloat(rounded).toFixed(decimals);
    }

    /**
     * Finds the greatest common divisor for two numbers
     * @param {!number} a - First number
     * @param {!number} b - Second number
     * @returns {number} - Common divisor
     */
    static greatestCommonDivisor(a, b) {
        return b === 0 ? a : Arithmetic.greatestCommonDivisor(b, a%b);
    }
}

export default Arithmetic;
