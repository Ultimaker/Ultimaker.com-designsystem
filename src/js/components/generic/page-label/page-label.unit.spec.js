/* eslint-disable max-nested-callbacks, no-unused-vars */
import Vue from 'vue';
import PageLabel from './page-label';
import _cloneDeep from 'lodash/cloneDeep';
import {build} from 'vuenit';

describe('components', () => {
    describe('generic', () => {
        describe('page-label', () => {
            const fixture = require('./page-label.unit.fixture');
            const mount = build(PageLabel, {});

            it('should render a given label', () => {
                const vm = mount(fixture.buildOptions);

                expect(vm.$el.innerText).toEqual('label-value');
                vm.$destroy();
            });

            it('should render no text when for a non existing label', () => {
                const localBuildOptions = Object.assign({}, fixture.buildOptions);

                localBuildOptions.props.name = 'non-existing';

                const vm = mount(localBuildOptions);

                expect(vm.$el.innerText).toEqual('');
                vm.$destroy();
            });

            it('should render no text on when page object isn\'t preset', () => {
                const localBuildOptions = _cloneDeep(fixture.buildOptions);

                localBuildOptions.store.modules.page.getters.page = () => ({});

                const vm = mount(localBuildOptions);

                expect(vm.$el.innerText).toEqual('');
                vm.$destroy();
            });
        });
    });
});
