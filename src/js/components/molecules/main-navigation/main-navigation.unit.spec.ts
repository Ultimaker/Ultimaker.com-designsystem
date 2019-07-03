import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/main-navigation.data';
import { MainNavigation } from './main-navigation';

describe('components', () => {
    describe('molecules', () => {
        describe('main-navigation', () => {
            const mount = build(MainNavigation, { props: {} });

            it('should render an MainNavigation component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`main-navigation ${key} props`, () => {
                const props = data[key];
                const mount = build(MainNavigation, { props });

                it(`should render an MainNavigation component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
