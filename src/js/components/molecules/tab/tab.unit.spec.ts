/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tab.data';
import { Tab } from './tab';

describe('components', () => {
    describe('molecules', () => {
        describe('tab', () => {
            const mount = build(Tab, { props: {} });

            it('should render an Tab component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tab ${key} props`, () => {
                const props = data[key];
                const mount = build(Tab, { props });

                it(`should render an Tab component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
