import 'babel-polyfill';
import { build } from 'vuenit';

import { ContentBlock } from './content-block';
import { data } from './data/content-block.data';

describe('components', () => {
    describe('molecules', () => {
        describe('content-block', () => {
            const mount = build(ContentBlock, { props: {
                ...data.default,
            } });

            it('should render an ContentBlock component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
