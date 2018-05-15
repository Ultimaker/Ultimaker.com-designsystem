/* eslint-disable max-nested-callbacks */
import Vue from 'vue';
import {build} from 'vuenit';
import AutoComplete from './auto-complete';

describe('components', () => {
    describe('ui', () => {
        describe('auto-complete', () => {
            const mount = build(AutoComplete, {});

            it('should be able to mount without properties', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
            });

            describe('defaults', () => {
                const vm = mount();

                it('should have a random generated id if not specified', () => {
                    expect(vm.inputId).toMatch(/^autocomplete[\d]{1,4}$/);
                    expect(vm.listId).toMatch(/^autocomplete[\d]{1,4}__dropdown$/);
                });

                it('should not be required', () => {
                    expect(vm.required).toBeFalsy();
                });

                it('should be able to highlight a specified part of a match', () => {
                    vm.input = 'peer';
                    expect(vm.highlightString('tomato peer apple')).toContain('auto-complete__value');
                    vm.input = 'opeer';
                    expect(vm.highlightString('tomato peer apple')).not.toContain('auto-complete__value');
                });

                it('should match by title when input > 3', () => {
                    vm.input = '123';
                    expect(vm.matchTitle).toBeTruthy();
                    vm.input = '12';
                    expect(vm.matchTitle).toBeFalsy();
                });

                it('should match by value when input === 2', () => {
                    vm.input = '12';
                    expect(vm.matchValue).toBeTruthy();
                    vm.input = '123';
                    expect(vm.matchValue).toBeFalsy();
                });

                it('should not be valid', () => {
                    expect(vm.valid).toBeFalsy();
                    expect(vm.isValid).toBeFalsy();
                });

                it('should not be open', () => {
                    expect(vm.isOpen).toBeFalsy();
                });
            });

            describe('data-bound', () => {
                const data = require('./auto-complete.unit.spec.json');
                const vm = mount({
                    props: {
                        items: data.countries,
                        storedItems: [data.countries[0]],
                        titleField: 'name',
                        valueField: 'code'
                    }
                });

                afterAll(() => {
                    vm.$destroy();
                });

                it('should have items', () => {
                    expect(vm.hasItems).toBeTruthy();
                });

                it('should display suggestions based on value', () => {
                    vm.input = 'mh';

                    expect(vm.isOpen).toBeTruthy();
                    expect(vm.matchValue).toBeTruthy();
                    expect(vm.suggestedItems[0].code).toEqual('MH');
                });

                it('should display suggestions based on title, but not the stored item', () => {
                    vm.input = 'mar';
                    expect(vm.isOpen).toBeTruthy();
                    expect(vm.matchTitle).toBeTruthy();
                    expect(vm.suggestedItems.length).toEqual(2);
                });

                it('should be able to navigate through the suggested items', async(done) => {
                    vm.input = 'mar';

                    vm.selectCurrent();
                    await Vue.nextTick();
                    expect(vm.selectedIndex).toEqual(0);

                    vm.selectPrevious();
                    await Vue.nextTick();
                    expect(vm.selectedIndex).toEqual(2);

                    vm.selectNext();
                    await Vue.nextTick();
                    expect(vm.selectedIndex).toEqual(0);

                    vm.selectNext();
                    await Vue.nextTick();
                    expect(vm.selectedIndex).toEqual(1);

                    vm.selectPrevious();
                    await Vue.nextTick();
                    expect(vm.selectedIndex).toEqual(0);

                    done();
                });

                it('should be able to select an item', async(done) => {
                    spyOn(vm, '$emit');

                    vm.selectItem(vm.items[0]);
                    await Vue.nextTick();
                    expect(vm.$emit).toHaveBeenCalled();
                    expect(vm.selectedItem.code).toEqual(vm.items[0].code);

                    vm.input = vm.items[1].name;
                    await Vue.nextTick();
                    expect(vm.selectedItem).toEqual(null);

                    vm.selectItemByInput();
                    await Vue.nextTick();
                    expect(vm.selectedItem.code).toEqual(vm.items[1].code);


                    vm.input = vm.items[0].code;
                    vm.selectItemByInput();
                    await Vue.nextTick();
                    expect(vm.selectedItem.code).toEqual(vm.items[0].code);

                    done();
                });

                it('should be able have a selectedItem by default', async(done) => {
                    vm.value = vm.items[1];
                    await Vue.nextTick();
                    expect(vm.selectedItem.code).toEqual(vm.items[1].code);
                    done();
                });

                it('should close the list when closeList is called', async(done) => {
                    vm.input = 'mar';

                    vm.selectPrevious();
                    await Vue.nextTick();
                    vm.closeList();
                    await Vue.nextTick();
                    expect(vm.selectedIndex).toEqual(0);
                    done();
                });

                it('should reset to default state when resetInput is called', async(done) => {
                    vm.input = 'mar';

                    vm.selectPrevious();
                    await Vue.nextTick();
                    vm.resetInput();
                    expect(vm.selectedIndex).toEqual(0);
                    expect(vm.input.length).toEqual(0);
                    done();
                });

                it('should emit a faux blur event when selectCurrent is called with empty input', () => {
                    vm.input = '';
                    spyOn(vm, '$emit');
                    vm.selectCurrent();
                    expect(vm.$emit).toHaveBeenCalledWith('fauxBlurInput');
                });
            });
        });
    });
});
