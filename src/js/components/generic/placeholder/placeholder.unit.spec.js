/* eslint-disable max-nested-callbacks */
import Placeholder from './placeholder';
import { build } from 'vuenit';

describe('components', () => {
    describe('generic', () => {
        describe('placeholder', () => {
            const mount = build(Placeholder);

            it('should render a image placeholder', () => {
                const vm = mount({
                    props: {
                        width: '300',
                        height: '600',
                    },
                });
                const tspan = vm.$el.querySelectorAll('tspan');

                expect(tspan.length).toEqual(2);
                expect(tspan[0].innerHTML).toEqual('600 x 1200');
                expect(tspan[1].innerHTML).toEqual('1:2');
                vm.$destroy();
            });
        });
    });
});
