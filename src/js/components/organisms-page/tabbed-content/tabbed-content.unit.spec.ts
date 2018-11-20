import { build } from 'vuenit';
import TabbedContent from './tabbed-content';

describe('components', () => {
    describe('page', () => {
        describe('tabbed-content', () => {
            const mount = build(TabbedContent, {});

            it('should render a tabbed-component', () => {
                const vm = mount();

                expect(vm).toBeDefined();
            });
        });
    });
});
