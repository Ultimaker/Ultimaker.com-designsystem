import SocialNav from './social-nav';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('social-nav', () => {
            const mount = build(SocialNav, {});

            it('should render a social-nav component', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
            });
        });
    });
});
