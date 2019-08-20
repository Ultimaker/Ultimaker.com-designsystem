/* eslint-disable max-nested-callbacks */
import 'babel-polyfill';
import Vue from 'vue';
import { build } from 'vuenit';
import AutoComplete from './auto-complete';

describe('components', () => {
    describe('molecules', () => {
        describe('auto-complete', () => {
            const mount = build(AutoComplete, {});

            it('should be able to mount without properties', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
            });

            describe('defaults', () => {
                const vm = mount();

                it('should not be required', () => {
                    expect(vm.required).toBeFalsy();
                });

                it('should be able to highlight a specified part of a match', () => {
                    vm.input = 'peer';
                    expect(vm.highlightString('tomato peer apple')).toContain('auto-complete__value');
                    vm.input = 'opeer';
                    expect(vm.highlightString('tomato peer apple')).not.toContain('auto-complete__value');
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
                        datasource: data.countries,
                        highlightedItems: [{
                            title: 'Maroc',
                            value: 'MA',
                        }],
                    },
                });

                afterAll(() => {
                    vm.$destroy();
                });
            });
        });
    });
});
