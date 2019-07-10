/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/list-section.data';
import { ListSection } from './list-section';

describe('components', () => {
    describe('molecules', () => {
        describe('list-section', () => {
            const mount = build(ListSection, { props: {} });

            it('should render an ListSection component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`list-section ${key} props`, () => {
                const props = data[key];
                const mount = build(ListSection, { props });

                it(`should render an ListSection component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
