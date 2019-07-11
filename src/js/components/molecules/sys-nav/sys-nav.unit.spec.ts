import { build } from 'vuenit';
import SysNav from './sys-nav';

describe('components', () => {
    describe('molecules', () => {
        describe('sys-nav', () => {
            const mount = build(SysNav, {
                props: {
                    searchLabel: 'Search',
                    orderNowLabel: 'Order now',
                },
            });

            it('should render a system navigation', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            // it('should emit an event when searchButton is pressed', () => {
            //     const vm = mount();
            //     spyOn(vm, '$emit');

            //     // @ts-ignore
            //     const clickEvent = new window.Event('click');
            //     const searchButton = vm.$el.querySelector('[role=button]');

            //     searchButton.dispatchEvent(clickEvent);
            //     expect(vm.$emit).toHaveBeenCalledWith('open-search');
            //     vm.$destroy();
            // });
        });
    });
});
