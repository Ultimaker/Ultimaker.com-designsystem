/* eslint-disable max-nested-callbacks */
import Resellers from './resellers';
import {build} from 'vuenit';

describe('components', () => {
    describe('organisms', () => {
        describe('resellers', () => {
            const fixture = require('./resellers.unit.spec.json'),
                mount = build(Resellers, {}),
                buildOptions = {props: {...fixture}};

            it('should render a resellers component', () => {
                const vm = mount(),
                    objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(objAttributes['class'].value).toContain('resellers');
                vm.$destroy();
            });

            it('should render a title', () => {
                const vm = mount(buildOptions),
                    organismTitle = vm.$el.querySelector('.resellers__title');

                expect(organismTitle).toBeDefined();
                expect(organismTitle.innerText).toContain(buildOptions.props.title);
                vm.$destroy();
            });

            it('should render a reseller section for preferred resellers', () => {
                const vm = mount(buildOptions),
                    sectionPreferred = vm.$el.querySelector('.reseller-section--preferred');

                expect(sectionPreferred).toBeDefined();
                vm.$destroy();
            });

            it('should render a reseller section for authorized resellers', () => {
                const vm = mount(buildOptions),
                    sectionAuthorized = vm.$el.querySelector('.reseller-section--authorized');

                expect(sectionAuthorized).toBeDefined();
                vm.$destroy();
            });

            it('should render an info link if "tooltip" is provided', () => {
                const vm = mount(buildOptions),
                    infoLink = vm.$el.querySelector('.reseller-section__info-link');

                expect(infoLink).toBeDefined();
                vm.$destroy();
            });

            it('should render a tooltip if link is triggered', async(done) => {
                const vm = mount(buildOptions),
                    tooltip = vm.$el.querySelector('#tooltip-preferred');

                expect(tooltip).toBeDefined();
                expect(tooltip.innerText).toContain(buildOptions.props.tooltip);
                expect(tooltip.style.display).toBe('none');

                vm.toggleTooltipPreferred();
                await vm.$nextTick();
                expect(tooltip.style.display).not.toBe('none');

                vm.hideTooltipPreferred();
                expect(vm.visibleTooltipPreferred).toBe(false);
                done();
                vm.$destroy();
            });

            it('should render a max amount of cards set at authorized section', () => {
                const vm = mount(buildOptions),
                    resellerSectionAuthorized = vm.$el.querySelector('.reseller-section--authorized'),
                    resellerItems = resellerSectionAuthorized.querySelectorAll('.reseller-list__item'),
                    showAllButton = resellerSectionAuthorized.querySelectorAll('.reseller-list__button');

                expect(resellerItems.length).toBeLessThanOrEqual(vm.showMax);
                expect(showAllButton.length).toBe(1);

                vm.$destroy();
            });

            it('should render all cards if "Show all" button is clicked', (done) => {
                const vm = mount(buildOptions),
                    resellerSectionAuthorized = vm.$el.querySelector('.reseller-section--authorized');

                vm.showAllAuthorizedResellers();

                vm.$nextTick(() => {
                    let resellerItems = resellerSectionAuthorized.querySelectorAll('.reseller-list__item'),
                        showAllButton = resellerSectionAuthorized.querySelectorAll('.reseller-list__button');

                    expect(resellerItems.length).toBeGreaterThan(vm.showMax);
                    expect(showAllButton.length).toBe(0);
                    done();
                    vm.$destroy();
                });
            });
        });
    });
});
