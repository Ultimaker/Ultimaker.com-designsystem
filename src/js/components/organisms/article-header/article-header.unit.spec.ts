import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-header.data';
import { ArticleHeader } from './article-header';

describe('components', () => {
    describe('molecules', () => {
        describe('article-header', () => {

            const mount = build(ArticleHeader, { props: {} });

            it('should render an ArticleHeader component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {

            describe(`article-header ${key} props`, () => {

                const props = data[key];
                const mount = build(ArticleHeader, { props });

                it(`should render an ArticleHeader component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
