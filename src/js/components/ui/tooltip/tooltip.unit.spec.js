/* eslint-disable max-nested-callbacks */
import Tooltip from './tooltip';

describe('components', () => {
    describe('ui', () => {
        describe('tooltip', () => {
            it('should render a tooltip with a block property', () => {
                const vm = new Tooltip({
                        propsData: {
                            block: 'test'
                        }
                    }).$mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('test__tooltip');
                vm.$destroy();
            });
        });
    });
});
