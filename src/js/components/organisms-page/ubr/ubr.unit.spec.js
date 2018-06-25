/* eslint-disable max-nested-callbacks */
import Ubr from './ubr';
import {build} from 'vuenit';

describe('components', () => {
    describe('page', () => {
        describe('ubr', () => {
            const fixture = require('./ubr.unit.spec.json');
            const mount = build(Ubr, {});

            it('should render an \'ubr\' organism', () => {
                const vm = mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('ubr');
                vm.$destroy();
            });

            it('should render a component without properties', () => {
                const vm = mount({});

                expect(vm.$el).toBeDefined();
            });

            it('should load render its template', () => {
                const buildOptions = {
                    props: {...fixture.properties}
                };
                const vm = mount(buildOptions);

                expect(vm.$el).toBeDefined();
                expect(vm.$el.querySelector('.container h2').innerText)
                    .toEqual(buildOptions.props.title);
                expect(vm.$el.querySelector('.ubr__description p').innerText)
                    .toEqual(buildOptions.props.description);
                expect(vm.$el.querySelectorAll('.ubr__list li').length).toEqual(9);
            });
        });
    });
});
