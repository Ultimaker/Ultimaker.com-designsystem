import { Color } from './color';

describe('utils', () => {
    describe('color', () => {
        it('should calculate the lightness level as percentage', () => {
            const color = '#888888';
            const expected = 0.53;
            const actual = Color.lightness(color);

            expect(actual).toEqual(expected);
        });
    });
});
