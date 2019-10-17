/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/overview-ubr.data';
import { OverviewUBR } from './overview-ubr';

describe('components', () => {
    describe('organisms', () => {
        describe('overview-ubr', () => {
            const mount = build(OverviewUBR, { props: {} });

            it('should render an OverviewUbr component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`overview-ubr ${key} props`, () => {
                const props = data[key];
                const mount = build(OverviewUBR, { props });

                it(`should render an OverviewUbr component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
