/* eslint-disable max-nested-callbacks */
import FooterMain from './footer-main';
import {build} from 'vuenit';

describe('components', () => {
    describe('layout', () => {
        describe('footer-main', () => {
            const fixture = require('./footer-main.unit.fixture'),
                mount = build(FooterMain, {});

            it('should render a footer-main element', () => {
                const vm = mount(fixture.buildOptions);

                expect(vm.$el.querySelectorAll('.container').length).toEqual(1);
                vm.$destroy();
            });
        });
    });
});
