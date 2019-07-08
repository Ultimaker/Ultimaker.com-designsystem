/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/social-sharing.data';
import { SocialSharing } from './social-sharing';

describe('components', () => {
    describe('molecules', () => {
        describe('social-sharing', () => {
            const mount = build(SocialSharing, { props: {} });

            it('should render an SocialSharing component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`social-sharing ${key} props`, () => {
                const props = data[key];
                const mount = build(SocialSharing, { props });

                it(`should render an SocialSharing component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
