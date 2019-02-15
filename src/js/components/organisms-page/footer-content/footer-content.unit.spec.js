/* eslint-disable max-nested-callbacks */
import FooterMain from './footer-content';
import {build} from 'vuenit';

describe('components', () => {
    describe('layout', () => {
        describe('footer-content', () => {
            const data = require('./footer-content.unit.spec.json'),
                buildOptions = {props: {...data.properties}},
                mount = build(FooterMain, {buildOptions});

            it('should render a footer-content element', () => {
                const vm = mount(buildOptions),
                    objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(objAttributes['class'].value).toContain('footer');
                vm.$destroy();
            });
        });
    });
});
