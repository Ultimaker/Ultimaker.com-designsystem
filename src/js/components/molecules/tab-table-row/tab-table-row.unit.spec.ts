import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tab-table-row.data';
import { TabTableRow } from './tab-table-row';

describe('components', () => {
    describe('molecules', () => {
        describe('tab-table-row', () => {
            const mount = build(TabTableRow, { props: {} });

            it('should render an TabTableRow component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tab-table-row ${key} props`, () => {
                const props = data[key];
                const mount = build(TabTableRow, { props });

                it(`should render an TabTableRow component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
