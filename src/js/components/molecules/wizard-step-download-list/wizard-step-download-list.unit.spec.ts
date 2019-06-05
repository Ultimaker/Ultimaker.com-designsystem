import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/wizard-step-download-list.data';
import { WizardStepDownloadList } from './wizard-step-download-list';

describe('components', () => {
    describe('molecules', () => {
        describe('wizard-step-download-list', () => {
            const mount = build(WizardStepDownloadList, { props: {} });

            it('should render an WizardStepDownloadList component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`wizard-step-download-list ${key} props`, () => {
                const props = data[key];
                const mount = build(WizardStepDownloadList, { props });

                it(`should render an WizardStepDownloadList component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });

                it('should change the download url', () => {
                    const vm = mount().$mount();

                    expect(vm.selected).toBe(0);
                    vm.setSelectedItem(1);
                    expect(vm.file).toBe(data[key].items[1].file);
                    vm.$destroy();
                });
            });
        });
    });
});
