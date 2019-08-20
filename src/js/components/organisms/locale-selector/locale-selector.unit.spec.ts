import { LocaleSelector } from './locale-selector';
import { build } from 'vuenit';
import Defaults from 'src/js/constants/defaults';

describe('components', () => {
    describe('molecules', () => {
        describe('locale-selector', () => {
            const mount = build(LocaleSelector, {});
            const buildOptions = require('./locale-selector.unit.spec.json');

            it('should render a locale-selector component', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
