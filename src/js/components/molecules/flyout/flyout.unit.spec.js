/* eslint-disable max-nested-callbacks */
import Flyout from './flyout';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('flyout', () => {
            const fixture = require('./flyout.unit.spec.json');
            const mount = build(Flyout, fixture);

            it('should render a "flyout"', () => {
                const vm = mount({});

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should emit an open event', () => {
                const vm = mount({});

                spyOn(vm, '$emit');
                vm.open({});

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.$emit).toHaveBeenCalledWith('open');
                vm.$destroy();
            });

            it('should emit a close event', () => {
                const vm = mount({});

                spyOn(vm, '$emit');
                vm.close({});

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.$emit).toHaveBeenCalledWith('close');
                expect(vm.sectionIndex).toBe(0);
                vm.$destroy();
            });

            it('should emit a main event so parent can change focus', () => {
                const vm = mount({});

                spyOn(vm, '$emit');
                spyOn(vm, 'close').and.returnValue(true);

                vm.backToParent();

                expect(vm.$emit).toHaveBeenCalledTimes(1);
                expect(vm.close).toHaveBeenCalledTimes(1);

                vm.$destroy();
            });

            it('should focus call focus on first section when opened', async (done) => {
                const vm = mount({});
                let firstLinkSelected = false;
                let resetCalled = false;

                spyOnProperty(vm, 'flyoutSections', 'get').and.returnValue([{
                    selectFirstLink: () => {
                        firstLinkSelected = true;
                    },
                    reset: () => {
                        resetCalled = true;
                    },
                }]);

                await vm.selectFirstLink();
                expect(firstLinkSelected).toEqual(true);
                expect(resetCalled).toEqual(true);
                done();
            });

            it('should be able to select the next flyout link and conditionally skip to the next section', async (done) => {
                const vm = mount({});

                spyOnProperty(vm, 'flyoutSections', 'get').and.returnValue(
                    [
                        {
                            reset: () => {},
                            selectFirstLink: () => {},
                            selectNextLink: () => false,
                        },
                        {
                            reset: () => {},
                            selectFirstLink: () => {},
                            selectNextLink: () => true,
                        },
                    ],
                );

                await vm.selectFirstLink();
                expect(vm.sectionIndex).toEqual(0);

                vm.selectNextLink({ preventDefault: () => {} });
                expect(vm.sectionIndex).toEqual(1);

                vm.selectNextLink({ preventDefault: () => {} });
                expect(vm.sectionIndex).toEqual(1);

                vm.$destroy();
                done();
            });

            it('should be able to select the previous flyout link and conditionally skip to the previous section', () => {
                const vm = mount({});

                spyOnProperty(vm, 'flyoutSections', 'get').and.returnValue(
                    [
                        {
                            reset: () => {},
                            selectLastLink: () => true,
                            selectPrevLink: () => true,
                        },
                        {
                            reset: () => {},
                            selectPrevLink: () => false,
                        },
                    ],
                );

                vm.sectionIndex = 1;

                vm.selectPrevLink({ preventDefault: () => {} });
                expect(vm.sectionIndex).toEqual(0);

                vm.selectPrevLink({ preventDefault: () => {} });
                expect(vm.sectionIndex).toEqual(0);

                vm.$destroy();
            });

            it('should be able to skip to the next section and keep the index', () => {
                const vm = mount({});
                let index = null;

                spyOnProperty(vm, 'flyoutSections', 'get').and.returnValue(
                    [
                        {
                            reset: () => {},
                            setFocusIndex: (i) => { index = i; },
                            focusIndex: 3,
                        },
                        {
                            reset: () => {},
                            focusIndex: 9,
                            setFocusIndex: (i) => { index = i; },
                        },
                    ],
                );

                vm.sectionIndex = 0;
                vm.selectNextSection(undefined, true);
                expect(index).toEqual(3);

                vm.selectPrevSection(undefined, true);
                expect(index).toEqual(9);
                vm.$destroy();
            });
        });
    });
});
