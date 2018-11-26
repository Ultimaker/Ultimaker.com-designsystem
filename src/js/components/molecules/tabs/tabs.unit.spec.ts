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

            it('should change tabs when the index has been changed', async (done) => {
                const vm = mount({
                    slots: {
                        default: `
                            <tab id="tab_1" title="Tab 1">Content of tab 1</tab>
                            <tab id="tab_2" title="Tab 2">Content of tab 2</tab>
                        `,
                    },
                });

                await vm.$nextTick();
                expect(vm.getLinkClassList(0)['tabs__list_link--active']).toBeTruthy();
                expect(vm.getLinkClassList(1)['tabs__list_link--active']).not.toBeTruthy();
                expect(vm.$slots.default[0].componentInstance.visible).toBeTruthy();
                expect(vm.$slots.default[1].componentInstance.visible).not.toBeTruthy();

                vm.activeTab = 1;

                await vm.$nextTick();
                expect(vm.$slots.default[0].componentInstance.visible).not.toBeTruthy();
                expect(vm.$slots.default[1].componentInstance.visible).toBeTruthy();
                done();
            });
        });
    });
});
