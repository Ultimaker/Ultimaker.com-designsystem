/* eslint-disable max-nested-callbacks */
import Resellers from './resellers';
import {build} from 'vuenit';

fdescribe('components', () => {
    describe('organisms', () => {
        describe('resellers', () => {
            const fixture = require('./resellers.unit.spec.json'),
                mount = build(Resellers, {});

            it('should render a resellers component', () => {
                const vm = mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('resellers');
                vm.$destroy();
            });
        });
    });
});
