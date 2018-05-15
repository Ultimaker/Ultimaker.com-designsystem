/* eslint-disable max-nested-callbacks */
import Arithmetic from './arithmetic';

describe('utils', () => {
    describe('arithmetic', () => {
        it('should round a number with the specified number of decimals', () => {
            const number = 5000.145,
                decimals = 2,
                expected = 5000.15;

            expect(Arithmetic.round(number, decimals)).toEqual(expected);
        });

        it('should round a number to a fixed string of specfied decimals', () => {
            const number = 5000.145,
                decimals = 2,
                expected = '5000.15';

            expect(Arithmetic.fixedNumber(number, decimals)).toEqual(expected);
        });

        it('should find the greatest common divisor of two specified numbers', () => {
            const numberA = 400,
                numberB = 600,
                expected = 200;

            expect(Arithmetic.greatestCommonDivisor(numberA, numberB)).toEqual(expected);
        });
    });
});
