/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/content-general.data';
import { ContentGeneral } from './content-general';

describe('components', () => {
    describe('organisms', () => {
        describe('content-general', () => {
            const mount = build(ContentGeneral, { props: {} });

            it('should render an ContentGeneral component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`content-general ${key} props`, () => {
                const props = data[key];
                const mount = build(ContentGeneral, { props });

                it(`should render an ContentGeneral component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
