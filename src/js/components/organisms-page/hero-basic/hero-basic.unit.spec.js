/* eslint-disable max-nested-callbacks */
import HeroBasic from './hero-basic';
import {build} from 'vuenit';

describe('components', () => {
    describe('page', () => {
        describe('hero-basic', () => {
            const fixture = require('./hero-basic.unit.spec.json');
            const mount = build(HeroBasic, {});

            it('should load render its template', () => {
                const buildOptions = {
                    props: {...fixture.properties},
                    store: {
                        page: {
                            getters: {
                                page: () => ({
                                    title: 'page title'
                                })
                            }
                        }
                    }
                };
                const vm = mount(buildOptions);

                expect(vm.$el).toBeDefined();
                expect(vm.$el.querySelector('h1').innerText).toEqual(fixture.properties.title);
                expect(vm.$el.querySelector('h2').innerText).toEqual(fixture.properties.subtitle);
                expect(vm.$el.querySelector('.copy--intro').innerText)
                    .toEqual(fixture.properties.description);
                vm.$destroy();
            });
        });
    });
});
