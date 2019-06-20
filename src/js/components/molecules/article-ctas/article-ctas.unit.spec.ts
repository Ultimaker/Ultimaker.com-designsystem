import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-ctas.data';
import { ArticleCtas } from './article-ctas';

describe('components', () => {
    describe('molecules', () => {
        describe('article-ctas', () => {
            const mount = build(ArticleCtas, { props: {} });

            it('should render an ArticleCtas component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article-ctas ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleCtas, { props });

                it(`should render an ArticleCtas component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
