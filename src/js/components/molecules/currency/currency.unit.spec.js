/* eslint-disable max-nested-callbacks */
// import Vue from 'vue';
import Currency from './currency';
import {build} from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('currency', () => {
            const mount = build(Currency);

            it('should load template and render default contents', () => {
                const vm = mount({props: {amount: 10}}),
                    currencyType = vm.$el.querySelector('.currency__type');

                expect(currencyType.nodeName).toEqual('SPAN');
                expect(currencyType.innerText).toEqual('');
                vm.$destroy();
            });

            it('should round a number and display its contents', () => {
                const vm = mount({
                        props: {
                            currencyType: '€',
                            amount: 51.555,
                            decimals: 2
                        }
                    }),
                    currencyType = vm.$el.querySelector('.currency__type');

                expect(currencyType.innerText).toEqual('€');
                expect(vm.$el.innerText.match(/51\.56/)).not.toBeNull();
                vm.$destroy();
            });
        });
    });
});
