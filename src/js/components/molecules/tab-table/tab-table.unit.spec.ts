import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tab-table.data';
import { TabTable } from './tab-table';

describe('components', () => {
    describe('molecules', () => {
        describe('tab-table', () => {
            const mount = build(TabTable, { props: {} });

            it('should render an TabTable component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tab-table ${key} props`, () => {
                const props = data[key];
                const mount = build(TabTable, { props });

                it(`should render an TabTable component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
