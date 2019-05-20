import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/content-highlight.data';
import { ContentHighlight } from './content-highlight';

describe('components', () => {
    describe('organisms', () => {
        describe('content-highlight', () => {

            const mount = build(ContentHighlight, { props: {} });

            it('should render an ContentHighlight component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).map((key) => {

            describe(`content-highlight ${key} props`, () => {

                const props = data[key];
                const mount = build(ContentHighlight, { props });

                it(`should render an ContentHighlight component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
