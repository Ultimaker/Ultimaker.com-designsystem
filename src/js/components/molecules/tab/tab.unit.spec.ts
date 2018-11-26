import { build } from 'vuenit';
import Tab from './tab';

describe('components', () => {
    describe('molecules', () => {
        describe('tab', () => {
            const mount = build(Tab, {});

            it('should render a tab-component', () => {
                const vm = mount();

                expect(vm).toBeDefined();
            });

            it('should be able to change the visibility', () => {
                const vm = mount();

                expect(vm.visible).toBeTruthy();
                vm.setVisible(false);
                expect(vm.visible).not.toBeTruthy();
            });
        });
    });
});
