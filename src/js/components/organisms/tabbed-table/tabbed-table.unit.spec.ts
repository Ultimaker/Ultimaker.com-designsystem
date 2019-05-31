import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tabbed-table.data';
import { TabbedTable } from './tabbed-table';

describe('components', () => {
    describe('organisms', () => {
        describe('tabbed-table', () => {
            const mount = build(TabbedTable, { props: {} });

            it('should render an TabbedTable component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tabbed-table ${key} props`, () => {
                const props = data[key];
                const mount = build(TabbedTable, { props });

                it(`should render an TabbedTable component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
