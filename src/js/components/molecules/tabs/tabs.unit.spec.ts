/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tabs.data';
import { Tabs } from './tabs';

describe('components', () => {
    describe('molecules', () => {
        describe('tabs', () => {
            const mount = build(Tabs, { props: {} });

            it('should render an Tabs component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tabs ${key} props`, () => {
                const props = data[key];
                const mount = build(Tabs, { props });

                it(`should render an Tabs component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
