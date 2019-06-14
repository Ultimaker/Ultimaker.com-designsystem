import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-intro.data';
import { ArticleIntro } from './article-intro';

describe('components', () => {
    describe('molecules', () => {
        describe('article-intro', () => {

            const mount = build(ArticleIntro, { props: {} });

            it('should render an ArticleIntro component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {

            describe(`article-intro ${key} props`, () => {

                const props = data[key];
                const mount = build(ArticleIntro, { props });

                it(`should render an ArticleIntro component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });

    });
});
