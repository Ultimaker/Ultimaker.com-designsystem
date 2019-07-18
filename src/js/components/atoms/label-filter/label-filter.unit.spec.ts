/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/label-filter.data';
import { LabelFilter } from './label-filter';

describe('components', () => {
    describe('atoms', () => {
        describe('label-filter', () => {
            const mount = build(LabelFilter, { props: {} });

            it('should render an LabelFilter component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`label-filter ${key} props`, () => {
                const props = data[key];
                const mount = build(LabelFilter, { props });

                it(`should render an LabelFilter component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
