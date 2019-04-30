/* eslint-disable max-nested-callbacks */
import HeroProduct from './hero-product';
import {build} from 'vuenit';

describe('components', () => {
    describe('page', () => {
        describe('hero-product', () => {
            const fixture = require('./hero-product.unit.spec.json');
            const mount = build(HeroProduct, {});

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

                expect(vm.$el)
                    .toBeDefined();
                expect(vm.$el.querySelector('h1').innerText)
                    .toEqual(fixture.properties.title);
                expect(vm.$el.querySelector('.copy--intro').innerText)
                    .toEqual(fixture.properties.description);
                expect(vm.$el.querySelectorAll('.hero__link-list li').length)
                    .toEqual(2);
                expect(vm.$el.querySelectorAll('.price-table__item').length)
                    .toEqual(1);
                vm.$destroy();
            });
        });
    });
});
