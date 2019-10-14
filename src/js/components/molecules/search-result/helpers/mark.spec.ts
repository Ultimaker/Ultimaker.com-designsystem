/** @format */

import mark from './mark';

describe('search result helpers', (): void => {
    describe('mark', (): void => {
        it('should return the original text when it does not contain a term', (): void => {
            const text = 'lorem ipsum dolor sit amet';
            const terms = 'foo';

            expect(mark(text, terms)).toEqual(text);
        });

        it('should wrap terms in mark', (): void => {
            const text = 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet';
            const terms = 'lorem';

            expect(mark(text, terms)).toEqual(
                '<mark>lorem</mark> ipsum dolor sit amet <mark>lorem</mark> ipsum dolor sit amet',
            );
        });

        it('should deal with regex special character ?', (): void => {
            const text = 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet ?';
            const terms = 'amet ?';

            expect(mark(text, terms)).toEqual(
                'lorem ipsum dolor sit <mark>amet</mark> lorem ipsum dolor sit <mark>amet</mark> <mark>?</mark>',
            );
        });

        it('should deal with regex special character [', (): void => {
            const text = 'lorem ipsum dolor sit amet lorem ipsum dolor sit amet [';
            const terms = 'amet [';

            expect(mark(text, terms)).toEqual(
                'lorem ipsum dolor sit <mark>amet</mark> lorem ipsum dolor sit <mark>amet</mark> <mark>[</mark>',
            );
        });
    });
});
