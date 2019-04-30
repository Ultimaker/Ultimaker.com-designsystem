import 'babel-polyfill';
import { build } from 'vuenit';

import Product from './product';

describe('components', () => {
    describe('molecules', () => {
        describe('product', () => {

            const mount = build(Product, { props: {} });

            it('should render an Product component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
