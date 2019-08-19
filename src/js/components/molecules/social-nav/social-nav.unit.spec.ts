/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/social-nav.data';
import { SocialNav } from './social-nav';

describe('components', () => {
    describe('molecules', () => {
        describe('social-nav', () => {
            const mount = build(SocialNav, { props: {} });

            it('should render an SocialNav component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`social-nav ${key} props`, () => {
                const props = data[key];
                const mount = build(SocialNav, { props });

                it(`should render an SocialNav component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
