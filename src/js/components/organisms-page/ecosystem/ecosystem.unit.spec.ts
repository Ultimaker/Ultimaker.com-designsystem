import Vue from 'vue';
import Ecosystem from './ecosystem';
import { build } from 'vuenit';

describe('components', () => {
    describe('page', () => {
        describe('ecosystem', () => {
            const data = require('./ecosystem.unit.spec.json');
            const mount = build(Ecosystem, {});
            const buildOptions = {
                props: {
                    ...data.properties,
                },
            };

            it('should load render its template', () => {
                const vm = mount(buildOptions);
                const objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(vm.$el.querySelector('h2').innerText).toEqual(data.properties.title);
                expect(objAttributes['class'].value).toContain('ecosystem');
                vm.$destroy();
            });

            it('should display the modal after clicking the content link', () => {
                const vm = mount(buildOptions);

                vm.toggleVideo();
                expect(vm.showVideo).toBeTruthy();

                Vue.nextTick(() => {
                    expect(vm.$el.lastChild.attributes['class'].value).toContain('modal--video');
                });

            });
        });
    });
});
