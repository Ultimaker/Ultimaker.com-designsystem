/* eslint-disable max-nested-callbacks */
import FlyoutSection from './flyout-section';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('flyout-section', () => {
            const fixture = require('./flyout-section.unit.spec.json');
            const mount = build(FlyoutSection, {
                components: {
                    'content-link': '<div><slot></slot></div>',
                },
            });

            it('should render a "flyout-section"', () => {
                const vm = mount({});

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should render a title', () => {
                const vm = mount({
                    props: {
                        label: fixture.label,
                        items: fixture.items,
                    },
                });

                const title = vm.$el.querySelector('.flyout__title');

                expect(title).toBeTruthy();
                expect(title.textContent).toEqual(vm.label);
                vm.$destroy();
            });

            it('should render a list of links', () => {
                const vm = mount({
                    props: {
                        items: fixture.items,
                        bottomItem: fixture.bottomItem,
                    },
                });
                const links = vm.$el.querySelectorAll('.flyout__link');

                expect(vm.focusableItems.length).toEqual(fixture.items.length + 1);
                expect(links.length).toBe(fixture.items.length);
                vm.$destroy();
            });

            it('should not render a bottomLink if not provided', () => {
                const vm = mount({
                    props: {
                        items: fixture.items,
                    },
                });

                const bottomLink = vm.$el.querySelectorAll('.flyout__link--cta-mini');

                expect(vm.focusableItems.length).toEqual(4);
                expect(vm.$refs.bottomLink).toBeUndefined();
                expect(bottomLink.length).toBe(0);
            });

            it('should render 1 column if amount of items is less or equal than max column items', () => {
                const vm = mount({
                    props: {
                        items: fixture.linksOneColumn,
                    },
                });

                expect(vm.sectionClass).not.toContain(vm.columnClassDouble);
                expect(vm.sectionClass).not.toContain(vm.columnClassTriple);
                vm.$destroy();
            });

            it('should render 2 columns if amount of items is more than and less than double the amount of max column items', () => {
                const vm = mount({
                    props: {
                        items: fixture.linksTwoColumns,
                    },
                });

                expect(vm.sectionClass).toContain(vm.columnClassDouble);
                expect(vm.sectionClass).not.toContain(vm.columnClassTriple);
                vm.$destroy();
            });

            it('should render 3 columns if amount of items is more than double the amount of max column items', () => {
                const vm = mount({
                    props: {
                        items: fixture.linksThreeColumns,
                    },
                });

                expect(vm.sectionClass).not.toContain(vm.columnClassDouble);
                expect(vm.sectionClass).toContain(vm.columnClassTriple);
                vm.$destroy();
            });

            it('should expand when expand is toggled', async (done) => {
                const vm = mount({
                    props: {
                        isCompact: true,
                        items: fixture.linksTwoColumns,
                    },
                });

                expect(vm.isExpanded).toBeFalsy();
                vm.toggleExpanded();
                await vm.$nextTick();
                expect(vm.isExpanded).toBeTruthy();

                vm.$destroy();
                done();
            });

            it('should be able to focus on a specified link', async (done) => {
                const vm = mount({
                    props: {
                        items: fixture.linksTwoColumns,
                    },
                });

                vm.setFocusIndex(-100);
                await vm.$nextTick();
                expect(vm.focusIndex).toEqual(0);

                vm.setFocusIndex(100);
                await vm.$nextTick();
                expect(vm.focusIndex).toEqual(7);

                vm.setFocusIndex(1);
                await vm.$nextTick();
                expect(vm.focusIndex).toEqual(1);

                vm.reset();
                await vm.$nextTick();
                expect(vm.focusIndex).toEqual(null);

                vm.$destroy();
                done();
            });
        });
    });
});
