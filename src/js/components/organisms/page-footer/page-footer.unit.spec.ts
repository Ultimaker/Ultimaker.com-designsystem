import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/page-footer.data';
import { PageFooter } from './page-footer';

describe('components', () => {
    describe('organisms', () => {
        describe('page-footer', () => {

            const mount = build(PageFooter, { props: {} });

            it('should render an PageFooter component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {

            describe(`page-footer ${key} props`, () => {

                const props = data[key];
                const mount = build(PageFooter, { props });

                it(`should render an PageFooter component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
