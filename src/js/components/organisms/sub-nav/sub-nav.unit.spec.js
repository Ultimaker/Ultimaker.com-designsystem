/* eslint-disable max-nested-callbacks */
import SubNav from './sub-nav';
import {build} from 'vuenit';
import ViewportUtil from 'utils/viewport';

describe('components', () => {
    describe('organisms', () => {
        describe('nav-assist', () => {
            const fixture = require('./sub-nav.unit.fixture'),
                mount = build(SubNav, {});

            it('should render a subnavigation', () => {
                const vm = mount(fixture.buildOptions);

                expect(vm.$el).toBeDefined();
                expect(vm.classObject['sub-nav--collapsed']).toBeFalsy();
                vm.$destroy();
            });

            it('should have a collapsed class when scrolled upwards', () => {
                const viewport = new ViewportUtil();

                spyOnProperty(viewport, 'scrollY', 'get').and.returnValue(100);
                spyOnProperty(viewport, 'scrollOffset', 'get').and.returnValue(0);

                const vm = mount(fixture.buildOptions);

                expect(vm.classObject['sub-nav--collapsed']).toBeTruthy();
                vm.$destroy();
            });

            it('should have a method mapLink which cl class when scrolled upwards', () => {
                const vm = mount(fixture.buildOptions);

                expect(vm.mapLink).toEqual(jasmine.any(Function));
                expect(vm.mapLink('/api/pages/somepage')).toEqual('/somepage');
                vm.$destroy();
            });
        });
    });
});
