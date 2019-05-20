import 'babel-polyfill';
import { build } from 'vuenit';

import { Brands2 } from './brands2';
import { data } from './data/brands2.data';

describe('components', () => {
    describe('organisms', () => {
        describe('brands2', () => {

            const mount = build(Brands2, { props: {} });

            it('should render an Brands component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).map((key) => {

            describe(`brands ${key} props`, () => {

                const props = data[key];
                const mount = build(Brands2, { props });

                it(`should render an Brands component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
