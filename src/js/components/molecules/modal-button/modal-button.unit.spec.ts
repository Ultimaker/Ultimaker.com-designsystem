import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/modal-button.data';
import { ModalButton } from './modal-button';

describe('components', () => {
    describe('molecules', () => {
        describe('modal-button', () => {
            const mount = build(ModalButton, { props: {} });

            it('should render an ModalButton component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should toggle the visible state', () => {
                const vm = mount();
                expect(vm.modalVisible).toBeFalsy();
                vm.triggerClick();
                expect(vm.modalVisible).toBeTruthy();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`modal-button ${key} props`, () => {
                const props = data[key];
                const mount = build(ModalButton, { props });

                it(`should render an ModalButton component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });

                it('should display a modal', () => {
                    const vm = mount().$mount();

                    expect(vm.modalVisible).toBeFalsy();
                    vm.toggleModalVisible();
                    expect(vm.modalVisible).toBeTruthy();
                    vm.$destroy();
                });
            });
        });
    });
});
