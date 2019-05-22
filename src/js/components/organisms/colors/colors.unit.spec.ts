import 'babel-polyfill';
import { build } from 'vuenit';

import { Colors } from './colors';
import { data } from './data/colors.data';

describe('components', () => {
    describe('organisms', () => {
        describe('colors', () => {
            const mount = build(Colors, { props: {} });

            it('should render an Colors component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should be possible to change the active color', () => {
                const vm = mount({ props: data.default });

                expect(vm.activeColorIndex).toEqual(0);
                vm.setActiveColor(1);
                expect(vm.activeColorIndex).toEqual(1);
                expect(vm.activeColor).toEqual(data.default.colorList[1]);

                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`colors ${key} props`, () => {
                const props = data[key];
                const mount = build(Colors, { props });

                it(`should render an Colors component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
