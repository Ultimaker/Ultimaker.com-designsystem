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
