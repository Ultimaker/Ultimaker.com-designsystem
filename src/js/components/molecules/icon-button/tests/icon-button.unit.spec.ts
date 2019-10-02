/* eslint-disable max-nested-callbacks */
import { build } from 'vuenit';
import { IconButton } from '../icon-button';

describe('components', (): void => {
    describe('molecules', (): void => {
        describe('icon-button', (): void => {
            const mount = build(IconButton);
            const click = new Event('click');

            it('should render an icon-button with expected html attributes', (): void => {
                const vm = mount({
                    props: {
                        buttonAriaLabel: 'Search',
                        buttonClass: 'icon-button--reversed',
                        iconName: 'search',
                    },
                });

                expect(vm.buttonAriaLabel).toBe('Search');
                expect(vm.buttonClass).toBe('icon-button--reversed');
                expect(vm.disabled).toBe(false);
                expect(vm.iconName).toBe('search');

                const buttonAttributes = vm.$el.attributes;

                expect(buttonAttributes.class.value).toContain('icon-button icon-button--reversed');
                expect(buttonAttributes['aria-label'].value).toEqual('Search');

                vm.$destroy();
            });

            it('should emit a click event when clicked', (): void => {
                const vm = mount({});

                spyOn(vm, '$emit');

                vm.$el.dispatchEvent(click);

                expect(vm.$emit).toHaveBeenCalledTimes(2);
                expect(vm.$emit).toHaveBeenCalledWith('click');
                expect(vm.$emit).toHaveBeenCalledWith('icon-button-click');

                vm.$destroy();
            });
        });
    });
});
