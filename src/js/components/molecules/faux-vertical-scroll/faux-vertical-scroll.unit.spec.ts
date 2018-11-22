/* eslint-disable max-nested-callbacks */
import { build } from 'vuenit';
import FauxVerticalScroll from './faux-vertical-scroll';

describe('components', () => {
    describe('molecules', () => {
        describe('faux-vertical-scroll', () => {
            const mount = build(FauxVerticalScroll);

            it('should render a scrollbar', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
