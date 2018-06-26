/* eslint-disable max-nested-callbacks */
import {build} from 'vuenit';
import SearchBar from './search-bar';
import IconButton from 'molecules/icon-button';

describe('components', () => {
    describe('molecules', () => {
        describe('search-bar', () => {
            const mount = build(SearchBar, {
                components: {
                    'icon-button': IconButton
                }
            });

            it('should render a search bar', () => {
                const vm = mount();

                const searchButton = vm.$el.querySelectorAll('.search__button');

                expect(vm.$refs.search__input.nodeName).toEqual('INPUT');
                expect(vm.searchValue).toEqual('');
                expect(searchButton.length).toEqual(1);
                vm.$destroy();
            });

            it('should execute search on button click', () => {
                const vm = mount();

                spyOn(vm, 'doSearch');
                vm.$mount();

                const clickEvent = new window.Event('click'),
                    searchButton = vm.$el.querySelector('.search__button');

                vm.searchValue = 'something';
                searchButton.dispatchEvent(clickEvent);

                expect(vm.doSearch).toHaveBeenCalledTimes(1);
                vm.$destroy();
            });

            it('should not execute search on button click if input is empty', () => {
                const vm = mount();

                spyOn(vm, 'doSearch');
                vm.$mount();

                const clickEvent = new window.Event('click'),
                    searchButton = vm.$el.querySelector('.search__button');

                searchButton.dispatchEvent(clickEvent);
                expect(vm.doSearch).toHaveBeenCalledTimes(1);
                // TODO: add test for search function when implemented
                vm.$destroy();
            });

            it('should focus on search input when focus has been called', () => {
                const vm = mount();

                spyOn(vm.$refs.search__input, 'focus');
                vm.focusInput();

                expect(vm.$refs.search__input.focus).toHaveBeenCalled();
                vm.$destroy();
            });


            it('should not focus on search input when focus has not been called', () => {
                const vm = mount();

                spyOn(vm.$refs.search__input, 'focus');

                expect(vm.$refs.search__input.focus).not.toHaveBeenCalled();
                vm.$destroy();
            });

            it('should emit close when called if the openstate is true', () => {
                const vm = mount({
                    props: {
                        openState: true
                    }
                });

                spyOn(vm, '$emit');
                vm.close();

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.$emit).toHaveBeenCalledWith('close');
                vm.$destroy();
            });

            it('should not emit close when called if the openstate is false', () => {
                const vm = mount({
                    props: {
                        openState: false
                    }
                });

                spyOn(vm, '$emit');
                vm.close();
                expect(vm.$emit).not.toHaveBeenCalled();
                expect(vm.$emit).not.toHaveBeenCalledWith('close');
                vm.$destroy();
            });

            it('should call a close function when onblur event occurs with an empty search input', () => {
                const vm = mount();

                spyOn(vm, 'close');
                vm.searchValue = '';
                vm.onBlur();

                expect(vm.close).toHaveBeenCalledTimes(1);
                vm.$destroy();
            });

            it('should not call a close function when onblur event occurs with a populated search input', () => {
                const vm = mount();

                spyOn(vm, 'close');
                vm.searchValue = 'foo';
                vm.onBlur();

                expect(vm.close).not.toHaveBeenCalled();
                vm.$destroy();
            });
        });
    });
});
