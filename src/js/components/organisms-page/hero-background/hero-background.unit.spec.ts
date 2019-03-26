import Vue from 'vue';
import HeroBackground from './hero-background';
import { build } from 'vuenit';

describe('components', () => {
    describe('page', () => {
        describe('hero-background', () => {
            const fixture = require('./hero-background.unit.spec.json');
            const mount = build(HeroBackground, {});
            const buildOptions = {
                props: { ...fixture.properties },
            };

            it('should load render its template', () => {
                const vm = mount(buildOptions);

                expect(vm.$el).toBeDefined();
                expect(vm.$el.querySelector('h1').innerText).toEqual(fixture.properties.title);
                expect(vm.$el.querySelector('.copy--intro').innerText).toEqual(fixture.properties.description);
                vm.$destroy();
            });

            it('should display the modal after clicking the icon button', () => {
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
