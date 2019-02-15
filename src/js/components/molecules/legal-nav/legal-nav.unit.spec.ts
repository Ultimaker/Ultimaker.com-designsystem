import LegalNav from './legal-nav';
import {build} from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('legal-nav', () => {
            const mount = build(LegalNav, {});

            it('should render a legal-nav component', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
            });
        });
    });
});
