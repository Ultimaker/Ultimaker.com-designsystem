/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/search-bar-page.data';
import { SearchBarPage } from './search-bar-page';

describe('components', () => {
    describe('molecules', () => {
        describe('search-bar-page', () => {
            const mount = build(SearchBarPage, { props: {} });

            it('should render an SearchBarPage component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`search-bar-page ${key} props`, () => {
                const props = data[key];
                const mount = build(SearchBarPage, { props });

                it(`should render an SearchBarPage component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
