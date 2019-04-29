import 'babel-polyfill';
import { build } from 'vuenit';

import HeroProduct from './hero-product';

describe('components', () => {
    describe('organisms', () => {
        describe('hero-product', () => {

            const mount = build(HeroProduct, { props: {}});

            it('should render an HeroProduct component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
