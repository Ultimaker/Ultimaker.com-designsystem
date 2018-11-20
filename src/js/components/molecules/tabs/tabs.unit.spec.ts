import { build } from 'vuenit';
import Tabs from './tabs';

describe('components', () => {
    describe('molecules', () => {
        describe('tabs', () => {
            const mount = build(Tabs, {});

            it('should render a tabs-component', () => {
                const vm = mount();

                expect(vm).toBeDefined();
            });
        });
    });
});
