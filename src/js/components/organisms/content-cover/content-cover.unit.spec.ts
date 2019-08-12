/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/content-cover.data';
import { ContentCover } from './content-cover';

describe('components', () => {
    describe('organisms', () => {
        describe('content-cover', () => {
            const mount = build(ContentCover, { props: {} });

            it('should render an ContentCover component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`content-cover ${key} props`, () => {
                const props = data[key];
                const mount = build(ContentCover, { props });

                it(`should render an ContentCover component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
