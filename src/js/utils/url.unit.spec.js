/* eslint-disable max-nested-callbacks */
import * as Url from './url';

describe('utils', () => {
    describe('url', () => {
        it('should convert a relative url to absolute', () => {
            const relativeUrl = '/relative',
                absoluteUrl = Url.convertToAbsolute(relativeUrl);

            expect(absoluteUrl).toMatch(/^http:\/\/(.*)\/relative$/ig);
        });

        it('should convert a relative url to absolute for a specific domain', () => {
            const relativeUrl = '/relative',
                absoluteUrl = Url.convertToAbsolute(relativeUrl, 'https://foo.bar');

            expect(absoluteUrl).toMatch(/^https:\/\/foo.bar\/relative$/ig);
        });

        it('should not convert an absolute url', () => {
            const absoluteUrl = 'https://my.great.api/absolute',
                parsedUrl = Url.convertToAbsolute(absoluteUrl);

            expect(parsedUrl).toEqual(absoluteUrl);
        });
    });
});
