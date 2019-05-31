import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/list-unordered-limit.data';
import { ListUnorderedLimit } from './list-unordered-limit';

describe('components', () => {
    describe('molecules', () => {
        describe('list-unordered-limit', () => {
            const mount = build(ListUnorderedLimit, { props: {} });

            it('should render an ListUnorderedLimit component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`list-unordered-limit ${key} props`, () => {
                const props = data[key];
                const mount = build(ListUnorderedLimit, { props });

                it(`should render an ListUnorderedLimit component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
