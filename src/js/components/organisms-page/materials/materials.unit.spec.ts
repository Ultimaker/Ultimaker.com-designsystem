/* eslint-disable max-nested-callbacks */
import Materials from './materials';
import { build } from 'vuenit';

describe('components', () => {
    describe('organisms', () => {
        describe('materials', () => {
            const fixture = require('./materials.unit.spec.json');
            const mount = build(Materials, {});
            const buildOptions = { props: { ...fixture } };

            it('should render a materials component', () => {
                const vm = mount(buildOptions);
                const  objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(objAttributes['class'].value).toContain('materials');
                vm.$destroy();
            });

            it('should render a title', () => {
                const vm = mount(buildOptions);
                const organismTitle = vm.$el.querySelector('.materials__title');

                expect(organismTitle).toBeDefined();
                expect(organismTitle.innerText).toContain(buildOptions.props.title);
                vm.$destroy();
            });

            it('should render a material section for materials', () => {
                const vm = mount(buildOptions);
                const materialList = vm.$el.querySelector('.material-list');

                expect(materialList).toBeDefined();
                vm.$destroy();
            });

            it('should render a max amount of cards set at a section', () => {
                const vm = mount(buildOptions);
                const visibleCards = vm.$refs.visible;
                const showAllButton = vm.$el.querySelectorAll('.material-list__button');

                expect(visibleCards.length).toBeLessThanOrEqual(vm.showMax);
                expect(showAllButton.length).toBe(1);

                vm.$destroy();
            });

            it('should render all cards if "Show all" button is clicked', (done) => {
                const vm = mount(buildOptions);
                const materialsSection = vm.$el.querySelector('.materials-section');

                vm.showHidden();

                vm.$nextTick(() => {
                    const materialItems = materialsSection.querySelectorAll('.material-list__item');
                    const showAllButton = materialsSection.querySelectorAll('.material-list__button');

                    expect(materialItems.length).toBeGreaterThan(vm.showMax);
                    expect(showAllButton.length).toBe(0);
                    done();
                    vm.$destroy();
                });
            });

            it('should detect a new row', () => {
                const vm = mount(buildOptions);
                const topValue = 100;

                vm.isNewRow(topValue);
                expect(vm.isNewRow()).toBe(true);

                vm.$destroy();
            });

            it('should add a row', () => {
                const vm = mount(buildOptions);
                const topValue = 100;

                vm.rowIndex = 3;
                vm.addRow(topValue);
                expect(vm.rowIndex).toBe(4);

                vm.$destroy();
            });

            it('should detect a cards\' y coordinate and update row accordingly', () => {
                const vm = mount(buildOptions);
                const card = vm.$refs.visible[0];

                spyOn(card, 'getBoundingClientRect').and.returnValue({ top: 100 });
                vm.enter(card);
                expect(vm.rowIndex).toBe(1);
                expect(vm.lastTopValue).toBe(100);

                vm.$destroy();
            });
        });
    });
});
