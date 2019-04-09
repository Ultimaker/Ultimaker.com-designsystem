import Vue from 'vue';
import { build } from 'vuenit';
import Tabs from './tabs';
import Tab from '../tab/tab';

describe('components', () => {
    describe('molecules', () => {
        describe('tabs', () => {
            const mount = build(Tabs);

            beforeEach(() => {
                Vue.component('tab', Tab);
            });

            it('should render a tabs-component', () => {
                const vm = mount();

                expect(vm).toBeDefined();
            });
        });
    });
});
