import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/table-compare.data';

import TableCompare from './table-compare';

describe('components', () => {
    describe('organisms', () => {
        describe('table-compare', () => {

            const mount = build(TableCompare, { props: {} });

            it('should render an TableCompare component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).map((key) => {

            describe(`table-compare ${key} props`, () => {

                const props = data[key];
                const mount = build(TableCompare, { props });

                it(`should render an TableCompare component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
