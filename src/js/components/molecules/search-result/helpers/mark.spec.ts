/** @format */

import mark from './mark';

describe('search result helpers', () => {
    describe('mark', () => {
        it('should return the original text when it does not contain a term', () => {
            const text = 'lorem ipsum dolor sit amet';
            const terms = 'foo';

            expect(mark(text, terms)).toEqual(text);
        });

        it('should wrap terms in mark', () => {
            const text = 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet';
            const terms = 'lorem';

            expect(mark(text, terms)).toEqual(
                '<mark>lorem</mark> ipsum dolor sit amet <mark>lorem</mark> ipsum dolor sit amet',
            );
        });
    });
});
