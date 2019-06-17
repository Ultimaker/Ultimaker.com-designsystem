import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-text.data';
import { ArticleText } from './article-text';

describe('components', () => {
    describe('molecules', () => {
        describe('article-text', () => {
            const mount = build(ArticleText, { props: {} });

            it('should render an ArticleText component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article-text ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleText, { props });

                it(`should render an ArticleText component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
