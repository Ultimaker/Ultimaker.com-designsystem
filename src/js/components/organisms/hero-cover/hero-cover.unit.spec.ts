/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/hero-cover.data';
import { HeroCover } from './hero-cover';

describe('components', () => {
    describe('organisms', () => {
        describe('hero-cover', () => {
            const mount = build(HeroCover, { props: {} });

            it('should render an HeroCover component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`hero-cover ${key} props`, () => {
                const props = data[key];
                const mount = build(HeroCover, { props });

                it(`should render an HeroCover component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
