/* eslint-disable max-nested-callbacks */
import ContentToggle from './content-toggle';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('content-toggle', () => {
            const mount = build(ContentToggle, {});
            const click = new Event('click');

            it('should render a "content-toggle"', () => {
                const vm = mount({});

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should emit a "toggle" on click', () => {
                const vm = mount({});


                spyOn(vm, '$emit');
                vm.$el.dispatchEvent(click);
                expect(vm.$emit).toHaveBeenCalledWith('toggle');
                vm.$destroy();
            });

            it('should change icon and text on toggle', () => {
                const vm = mount({
                    props: {
                        collapsedIcon: 'a',
                        expandedIcon: 'b',
                        collapsedText: '1',
                        expandedText: '2',
                    },
                });

                expect(vm.toggleIcon).toBe(vm.collapsedIcon);
                expect(vm.toggleText).toBe(vm.collapsedText);
                vm.toggleState = true;
                expect(vm.toggleIcon).toBe(vm.expandedIcon);
                expect(vm.toggleText).toBe(vm.expandedText);
                vm.$destroy();
            });
        });
    });
});
