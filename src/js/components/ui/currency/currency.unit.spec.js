/* eslint-disable max-nested-callbacks */
// import Vue from 'vue';
import Currency from './currency';

describe('components', () => {
    describe('ui', () => {
        describe('currency', () => {
            it('should load template and render default contents', () => {
                const vm = new Currency({propsData: {amount: 10}}).$mount(),
                    currencyType = vm.$el.querySelector('.currency__type');

                expect(currencyType.nodeName).toEqual('SPAN');
                expect(currencyType.innerText).toEqual('$');
                vm.$destroy();
            });

            it('should round a number and display its contents', () => {
                const vm = new Currency({
                        propsData: {
                            currencyType: '€',
                            amount: 51.555,
                            decimals: 2
                        }
                    }).$mount(),
                    currencyType = vm.$el.querySelector('.currency__type');

                expect(currencyType.innerText).toEqual('€');
                expect(vm.$el.innerText.match(/51\.56/)).not.toBeNull();
                vm.$destroy();
            });
        });
    });
});
