/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/hero-basic.data';
import { HeroBasic } from './hero-basic';

describe('components', () => {
    describe('organisms', () => {
        describe('hero-basic', () => {
            const mount = build(HeroBasic, { props: {} });

            it('should render an HeroBasic component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`hero-basic ${key} props`, () => {
                const props = data[key];
                const mount = build(HeroBasic, { props });

                it(`should render an HeroBasic component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
