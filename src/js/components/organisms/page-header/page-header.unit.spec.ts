import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/page-header.data';
import { PageHeader } from './page-header';

describe('components', () => {
    describe('organisms', () => {
        describe('page-header', () => {
            const mount = build(PageHeader, { props: {} });

            it('should render an PageHeader component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`page-header ${key} props`, () => {
                const props = data[key];
                const mount = build(PageHeader, { props });

                it(`should render an PageHeader component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
