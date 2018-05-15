/* eslint-disable max-nested-callbacks */
import IconButton from './icon-button';

describe('components', () => {
    describe('ui', () => {
        describe('icon-button', () => {
            it('should render an icon-button', () => {
                const vm = new IconButton({
                        propsData: {
                            buttonClass: 'icon-button',
                            buttonAriaLabel: 'Search',
                            iconName: 'search'
                        }
                    }).$mount(),
                    buttonAttributes = vm.$el.attributes;

                expect(buttonAttributes['role'].value).toEqual('button');
                expect(buttonAttributes['class'].value).toContain('icon-button');
                expect(buttonAttributes['aria-label'].value).toEqual('Search');
                vm.$destroy();
            });

            it('should emit a click event when clicked', () => {
                const vm = new IconButton({
                        propsData: {
                            buttonClass: 'icon-button',
                            buttonAriaLabel: 'Search',
                            iconName: 'search'
                        }
                    }).$mount(),
                    clickEvent = new window.Event('click');

                spyOn(vm, '$emit');
                vm.$el.dispatchEvent(clickEvent);

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.$emit).toHaveBeenCalledWith('click');
                vm.$destroy();
            });

            it('should get focus when called', () => {
                const vm = new IconButton({}).$mount();

                spyOn(vm.$el, 'focus');
                vm.focus();
                expect(vm.$el.focus).toHaveBeenCalled();
                vm.$destroy();
            });
        });
    });
});
