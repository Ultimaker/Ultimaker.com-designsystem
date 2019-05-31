import 'babel-polyfill';
import { build } from 'vuenit';

import { Brand } from './brand';
import { data } from './data/brand.data';

describe('components', () => {
    describe('molecules', () => {
        describe('brand', () => {
            const mount = build(Brand, { props: {} });

            it('should render an Brand component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`brand ${key} props`, () => {
                const props = data[key];
                const mount = build(Brand, { props });

                it(`should render an Brand component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
