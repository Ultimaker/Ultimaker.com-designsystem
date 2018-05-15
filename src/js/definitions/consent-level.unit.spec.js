/* eslint-disable max-nested-callbacks */
import Defaults from 'constants/defaults';
import ConsentLevel from './consent-level';

describe('definitions', () => {
    describe('cookie-consent-level', () => {
        it('should have a default consent level', () => {
            const consentLevel = new ConsentLevel();

            expect(consentLevel.toString()).toEqual(Defaults.consentLevel.toString(2));
        });

        it('should have fallback for various constructor argument types', () => {
            let consentLevel = new ConsentLevel(0b101);

            expect(consentLevel.toString()).toEqual('101');
            expect(consentLevel.level()).toEqual(0b101);

            consentLevel = new ConsentLevel('1101');
            expect(consentLevel.toString()).toEqual('1101');
            expect(consentLevel.level()).toEqual(0b1101);

            consentLevel = new ConsentLevel('not really a parseable integer');
            expect(consentLevel.toString()).toEqual(Defaults.consentLevel.toString(2));
        });

        it('should be able to set a consent level', () => {
            const consentLevel = new ConsentLevel();

            consentLevel.set(ConsentLevel.Levels.personalization);
            expect(consentLevel.toString()).toEqual('111');
            expect(consentLevel.has(ConsentLevel.Levels.personalization)).toBeTruthy();
            expect(consentLevel.has(ConsentLevel.Levels.tracking)).toBeFalsy();

            consentLevel.set(ConsentLevel.Levels.tracking);
            expect(consentLevel.toString()).toEqual('1111');
            expect(consentLevel.has(ConsentLevel.Levels.personalization)).toBeTruthy();
            expect(consentLevel.has(ConsentLevel.Levels.tracking)).toBeTruthy();
        });

        it('should be able to unset a consent level', () => {
            const consentLevel = new ConsentLevel();

            consentLevel.set(ConsentLevel.Levels.personalization);
            consentLevel.set(ConsentLevel.Levels.tracking);
            consentLevel.unset(ConsentLevel.Levels.functional);

            expect(consentLevel.toString()).toEqual('1110');
        });

        it('should be able to check if a consentLevel has been set', () => {
            const consentLevel = new ConsentLevel();

            expect(consentLevel.has(ConsentLevel.Levels.functional)).toBeTruthy();
            expect(consentLevel.has(ConsentLevel.Levels.tracking)).toBeFalsy();
        });
    });
});
