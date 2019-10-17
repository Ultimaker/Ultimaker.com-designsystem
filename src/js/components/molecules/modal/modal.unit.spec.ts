/* eslint-disable max-nested-callbacks */
import Vue from 'vue';
import { build } from 'vuenit';
import { Modal } from './modal';

describe('components', () => {
    describe('molecules', () => {
        describe('modal', () => {
            let vm;
            const mount = build(Modal);

            beforeEach(() => {
                vm = mount();
            });

            afterEach(() => {
                vm.$destroy();
            });

            it('should load template and render correct contents', () => {
                const modalBody = vm.$el.querySelector('.modal__content');

                expect(modalBody.nodeName).toEqual('DIV');
            });

            it('should $emit a close event', (done) => {
                spyOn(vm, '$emit');
                vm.closeModal({});
                Vue.nextTick(() => {
                    expect(vm.$emit).toHaveBeenCalledTimes(1);
                    expect(vm.$emit).toHaveBeenCalledWith('close');
                    done();
                });
            });

            it('should $emit a close event on keyup event', (done) => {
                let keyEvent;

                try {
                    // Chrome
                    keyEvent = new KeyboardEvent('keyup', {
                        bubbles: true,
                        cancelable: true,
                        key: 'Escape',
                    });
                } catch (e) {
                    // Phantom 2
                    keyEvent = document.createEvent('KeyboardEvent');
                    keyEvent.initEvent('keyup', true, false);
                    keyEvent.key = 'Escape';
                }

                spyOn(vm, '$emit');
                window.dispatchEvent(keyEvent);

                Vue.nextTick(() => {
                    expect(vm.$emit).toHaveBeenCalledTimes(1);
                    expect(vm.$emit).toHaveBeenCalledWith('close');
                    done();
                });
            });
        });
    });
});
