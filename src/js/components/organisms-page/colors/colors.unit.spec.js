/* eslint-disable max-nested-callbacks */
import Colors from './colors';
import {build} from 'vuenit';
import 'organisms/cms-image';
import 'atoms/responsive-picture';
import 'atoms/tooltip';

describe('components', () => {
    describe('page', () => {
        const fixture = require('./colors.unit.spec.json');
        const mount = build(Colors, {
            components: {
                'hit-area': `<div class="hit-area"><slot></slot></div>`,
                'cms-image': `<img></img>`
            }
        });

        describe('colors', () => {
            it('should render the "colors" organism', () => {
                const buildOptions = {
                        props: {...fixture.properties}
                    },
                    vm = mount(buildOptions),
                    colors = vm.$el;

                expect(colors).toBeDefined();

                vm.$destroy();
            });

            it('should switch colors with setSelected', (done) => {
                const buildOptions = {
                        props: {...fixture.properties}
                    },
                    vm = mount(buildOptions);

                expect(vm.activeColor).toEqual(null);

                const activeColor = vm.colors[0],
                    loadEvent = new window.Event('load');

                vm.setSelected(activeColor);
                expect(vm.imageLoaded).toEqual(false);
                expect(vm.activeColor).toEqual(activeColor);
                expect(vm.image).toEqual(activeColor.image);

                vm.$refs.image.querySelector('img').dispatchEvent(loadEvent);
                expect(vm.imageLoaded).toEqual(true);

                vm.setSelected(vm.colors[1]);
                vm.$nextTick(() => {
                    expect(vm.imageLoaded).toBeFalsy();
                    vm.$destroy();
                    done();
                });
            });

            it('should calculate the position of a tooltip', () => {
                const buildOptions = {
                        props: {...fixture.properties}
                    },
                    vm = mount(buildOptions);

                const currentTarget = vm.$el.querySelectorAll('.hit-area')[1];
                let classes = '',
                    currentX = -36;

                spyOn(currentTarget, 'querySelector').and.returnValue({
                    getBoundingClientRect: () => ({
                        x: currentX,
                        width: 144
                    }),
                    classList: {
                        remove: () => { classes = ''; },
                        add: (className) => { classes = className; }
                    }
                });
                spyOnProperty(window, 'innerWidth', 'get').and.returnValue(448);

                vm.checkTooltipPos({
                    currentTarget: currentTarget
                });
                expect(classes).toEqual('push--right');

                currentX = 324;
                vm.checkTooltipPos({
                    currentTarget: currentTarget
                });
                expect(classes).toEqual('push--left');

                currentX = 100;
                vm.checkTooltipPos({
                    currentTarget: currentTarget
                });
                expect(classes).toEqual('');

                vm.$destroy();
            });
        });
    });
});
