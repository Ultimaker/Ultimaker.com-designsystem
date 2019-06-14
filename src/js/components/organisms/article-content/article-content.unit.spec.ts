import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-content.data';
import { ArticleContent } from './article-content';

describe('components', () => {
    describe('organisms', () => {
        describe('article', () => {
            const mount = build(ArticleContent, { props: {} });

            it('should render an Article component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleContent, { props });

                it(`should render an Article component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
