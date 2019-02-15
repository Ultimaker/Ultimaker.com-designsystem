import FooterNav from './footer-nav';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('footer-nav', () => {
            const mount = build(FooterNav, {});

            it('should render a footer-nav component', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
            });
        });
    });
});
