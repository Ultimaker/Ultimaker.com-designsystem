/* eslint-disable max-nested-callbacks */
import halParser from './hal-parser';

describe('utils', () => {
    describe('halParser', () => {
        const fixture = require('./hal-parser.unit.spec.json');

        it('should parse a basic object return the same object', () => {
            const result = halParser(fixture.basicObject);

            expect(fixture.basicObject).toEqual(result);
        });

        it('should convert embedded objects to plain json', () => {
            const result = halParser(fixture.embeddedObject);

            expect(result.image[0].isImage).toBeTruthy();
        });

        it('should include linked objects to plain json', () => {
            const result = halParser(fixture.linkedObject);

            expect(result.links.self.href).toEqual(fixture.linkedObject._links.self.href);
            expect(result.links.image.href).toEqual(fixture.linkedObject._links.image.href);
            expect(result.links.someArray[0].property).toBeTruthy();
            expect(result.links.someArray[1].property).toBeFalsy();
        });
    });
});
