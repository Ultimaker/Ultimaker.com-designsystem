/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/sub-navigation-item.data';
import { SubNavigationItem } from './sub-navigation-item';

describe('components', () => {
    describe('molecules', () => {
        describe('subnavigation-item', () => {
            const mount = build(SubNavigationItem, { props: {} });

            it('should render an SubnavigationItem component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`subnavigation-item ${key} props`, () => {
                const props = data[key];
                const mount = build(SubNavigationItem, { props });

                it(`should render an SubnavigationItem component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
