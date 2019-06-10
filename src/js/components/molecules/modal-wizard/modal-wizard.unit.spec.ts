import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/modal-wizard.data';
import { ModalWizard } from './modal-wizard';

describe('components', () => {
    describe('molecules', () => {
        describe('modal-wizard', () => {
            const mount = build(ModalWizard, { props: {} });

            it('should render an ModalWizard component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should be able to navigate through the wizard', () => {
                const vm = mount({ props: data.default });
                expect(vm.activeStep).toEqual(0);
                expect(vm.steps.length).toEqual(2);
                vm.showNextStep();
                expect(vm.activeStep).toEqual(1);
                vm.showNextStep();
                expect(vm.activeStep).toEqual(1);
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`modal-wizard ${key} props`, () => {
                const props = data[key];
                const mount = build(ModalWizard, { props });

                it(`should render an ModalWizard component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
