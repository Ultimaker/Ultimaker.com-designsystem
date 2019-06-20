import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-author.data';
import { ArticleAuthor } from './article-author';

describe('components', () => {
    describe('molecules', () => {
        describe('article-author', () => {
            const mount = build(ArticleAuthor, { props: {} });

            it('should render an ArticleAuthor component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article-author ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleAuthor, { props });

                it(`should render an ArticleAuthor component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
