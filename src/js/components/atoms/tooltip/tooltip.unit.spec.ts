/* eslint-disable max-nested-callbacks */
import Tooltip from './tooltip';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        let mount;
        let vm;

        beforeEach(() => {
            mount = build(Tooltip);
        });

        afterEach(() => {
            vm.$destroy();
        })

        describe('tooltip', () => {
            it('should render a tooltip with a block property', () => {
                vm = mount({
                        props: {
                            block: 'test',
                        },
                    }).$mount();

                const objAttributes = vm.$el.attributes;
                expect(objAttributes['class'].value).toBe('tooltip test__tooltip');
            });
        });
        describe('tooltip without a block', () => {
            it('should render a tooltip with a block property', () => {
                const vm = mount().$mount();

                const objAttributes = vm.$el.attributes;
                expect(objAttributes['class'].value).toBe('tooltip');
            });
        });
    });
});
