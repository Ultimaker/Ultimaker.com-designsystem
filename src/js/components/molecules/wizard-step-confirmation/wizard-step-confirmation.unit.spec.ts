import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/wizard-step-confirmation.data';
import { WizardStepConfirmation } from './wizard-step-confirmation';

describe('components', () => {
    describe('molecules', () => {
        describe('wizard-step-confirmation', () => {

            const mount = build(WizardStepConfirmation, { props: {} });

            it('should render an WizardStepConfirmation component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {

            describe(`wizard-step-confirmation ${key} props`, () => {

                const props = data[key];
                const mount = build(WizardStepConfirmation, { props });

                it(`should render an WizardStepConfirmation component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
