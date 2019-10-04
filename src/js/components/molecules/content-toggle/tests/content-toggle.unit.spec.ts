import { ContentToggle } from '../content-toggle';
import { build } from 'vuenit';

describe('components', (): void => {
    describe('molecules', (): void => {
        describe('content-toggle', (): void => {
            const mount = build(ContentToggle, {});
            const click = new Event('click');

            it('should setup "content-toggle" with expected defaults', (): void => {
                const vm = mount({});

                expect(vm.collapseIcon).toBe('angle-up');
                expect(vm.collapseText).toBe('Less');
                expect(vm.expanded).toBe(false);
                expect(vm.expandIcon).toBe('angle-down');
                expect(vm.expandText).toBe('More');

                vm.$destroy();
            });

            it('should emit a "content-toggle" with expected payload on click', (): void => {
                const vm = mount({});

                spyOn(vm, '$emit');

                vm.$el.dispatchEvent(click);
                expect(vm.$emit).toHaveBeenCalledWith('content-toggle', { expanded: true });

                vm.$el.dispatchEvent(click);
                expect(vm.$emit).toHaveBeenCalledWith('content-toggle', { expanded: false });

                vm.$destroy();
            });

            it('should change icon, text and expanded on toggle', (): void => {
                const vm = mount({
                    props: {
                        collapseIcon: 'a',
                        collapseText: '1',
                        expandIcon: 'b',
                        expandText: '2',
                    },
                });

                expect(vm.collapseIcon).toBe('a');
                expect(vm.collapseText).toBe('1');
                expect(vm.expandIcon).toBe('b');
                expect(vm.expandText).toBe('2');

                expect(vm.expanded).toBe(false);
                expect(vm.toggleIcon).toBe(vm.expandIcon);
                expect(vm.toggleText).toBe(vm.expandText);

                vm.$el.dispatchEvent(click);

                expect(vm.expanded).toBe(true);
                expect(vm.toggleIcon).toBe(vm.collapseIcon);
                expect(vm.toggleText).toBe(vm.collapseText);

                vm.$destroy();
            });
        });
    });
});
