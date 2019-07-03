import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/main-navigation-item.data';
import { MainNavigationItem } from './main-navigation-item';

describe('components', () => {
    describe('molecules', () => {
        describe('main-navigation-item', () => {

            const mount = build(MainNavigationItem, { props: {} });

            it('should render an MainNavigationItem component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {

            describe(`main-navigation-item ${key} props`, () => {

                const props = data[key];
                const mount = build(MainNavigationItem, { props });

                it(`should render an MainNavigationItem component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
