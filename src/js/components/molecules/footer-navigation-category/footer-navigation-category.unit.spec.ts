import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/footer-navigation-category.data';
import { FooterNavigationCategory } from './footer-navigation-category';

describe('components', () => {
    describe('molecules', () => {
        describe('footer-navigation-category', () => {

            const mount = build(FooterNavigationCategory, { props: {} });

            it('should render an FooterNavigationCategory component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {

            describe(`footer-navigation-category ${key} props`, () => {

                const props = data[key];
                const mount = build(FooterNavigationCategory, { props });

                it(`should render an FooterNavigationCategory component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
