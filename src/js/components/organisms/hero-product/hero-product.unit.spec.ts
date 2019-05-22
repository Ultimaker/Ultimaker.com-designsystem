import 'babel-polyfill';
import { build } from 'vuenit';

import HeroProduct from './hero-product';

import data from './data/hero-product.data';

describe('components', () => {
    describe('organisms', () => {
        describe('hero-product', () => {
            const mount = build(HeroProduct, { props: {} });

            it('should render an HeroProduct component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        describe('hero-product default props', () => {
            const defaultProps = data('default');
            const mount = build(HeroProduct, { props: defaultProps });

            it('should render an HeroProduct component width default props', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();

                const productsElement = vm.$el.querySelector('.hero__products');
                expect(productsElement.childNodes.length).toBe(defaultProps.products.length);

                const linklistELement = vm.$el.querySelector('.hero__linklist');
                expect(linklistELement.childNodes.length).toBe(defaultProps.linkList.length);

                vm.$destroy();
            });
        });
    });
});
