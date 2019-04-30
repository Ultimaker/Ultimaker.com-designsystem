import 'babel-polyfill';
import { build } from 'vuenit';

import HeroHeading from './hero-heading';

describe('components', () => {
    describe('molecules', () => {
        describe('hero-heading', () => {

            const mount = build(HeroHeading, { props: {}});

            it('should render an HeroHeading component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
