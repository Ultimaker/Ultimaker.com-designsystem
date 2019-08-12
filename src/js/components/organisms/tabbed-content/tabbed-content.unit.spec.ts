/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tabbed-content.data';
import { TabbedContent } from './tabbed-content';

describe('components', () => {
    describe('organisms', () => {
        describe('tabbed-content', () => {
            const mount = build(TabbedContent, { props: {} });

            it('should render an TabbedContent component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tabbed-content ${key} props`, () => {
                const props = data[key];
                const mount = build(TabbedContent, { props });

                it(`should render an TabbedContent component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
