/* eslint-disable max-nested-callbacks */
import propertyMixin from './linked-property';

describe('mixins', () => {
    describe('linked-property', () => {
        it('should contain a specified property', () => {
            expect(propertyMixin('specifiedProperty').computed.specifiedProperty).toBeDefined();
        });

        it('should return an array of specifiedProperty', () => {
            const mockData = {
                    links: {
                        specifiedProperty: [
                            {
                                defined: true
                            }
                        ]
                    }
                },
                result = propertyMixin('specifiedProperty').computed.specifiedProperty.apply(mockData);

            expect(result.length).toEqual(1);
            expect(result[0].defined).toBeTruthy();
        });

        it('should fail gracefully when specifiedProperty doesn\'t exist', () => {
            expect(propertyMixin('specifiedProperty').computed.specifiedProperty()).toEqual(null);
        });
    });
});
