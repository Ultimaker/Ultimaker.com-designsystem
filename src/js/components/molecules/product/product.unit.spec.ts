import 'babel-polyfill';
import { build } from 'vuenit';

import Product from './product';

import data from './data/product.data';

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

        describe('product default props', () => {

            const defaultProps = data('default');
            const mount = build(Product, { props: defaultProps });

            it('should render an product component width default props', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();

                const nameElement = vm.$el.querySelector('.product__name');
                expect(nameElement.innerText.trim()).toBe(defaultProps.name);

                const pricingELement =  vm.$el.querySelector('.product__pricing');
                expect(pricingELement.innerText.trim()).toBe(defaultProps.pricing.label);

                vm.$destroy();
            });

        });
    });
});
