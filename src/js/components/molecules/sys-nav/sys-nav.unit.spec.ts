/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/sys-nav.data';
import { SysNav } from './sys-nav';

describe('components', () => {
    describe('molecules', () => {
        describe('sys-nav', () => {
            const mount = build(SysNav, { props: {} });

            it('should render an SysNav component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`sys-nav ${key} props`, () => {
                const props = data[key];
                const mount = build(SysNav, { props });

                it(`should render an SysNav component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
