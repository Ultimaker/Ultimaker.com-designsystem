import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/tooltip-toggle.data';
import { TooltipToggle } from './tooltip-toggle';

describe('components', () => {
    describe('molecules', () => {
        describe('tooltip-toggle', () => {
            const mount = build(TooltipToggle, { props: {} });

            it('should render an TooltipToggle component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`tooltip-toggle ${key} props`, () => {
                const props = data[key];
                const mount = build(TooltipToggle, { props });

                it(`should render an TooltipToggle component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
