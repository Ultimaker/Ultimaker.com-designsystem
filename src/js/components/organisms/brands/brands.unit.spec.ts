import 'babel-polyfill';
import { build } from 'vuenit';

import { Brands } from './brands';
import { data } from './data/brands.data';

describe('components', () => {
    describe('organisms', () => {
        describe('brands', () => {

            const mount = build(Brands, { props: {} });

            it('should render an Brands component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).map((key) => {

            describe(`brands ${key} props`, () => {

                const props = data[key];
                const mount = build(Brands, { props });

                it(`should render an Brands component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
