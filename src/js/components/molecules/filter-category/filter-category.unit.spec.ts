/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/filter-category.data';
import { FilterCategory } from './filter-category';

describe('components', () => {
    describe('molecules', () => {
        describe('filter-category', () => {
            const mount = build(FilterCategory, { props: {} });

            it('should render an FilterCategory component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`filter-category ${key} props`, () => {
                const props = data[key];
                const mount = build(FilterCategory, { props });

                it(`should render an FilterCategory component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
