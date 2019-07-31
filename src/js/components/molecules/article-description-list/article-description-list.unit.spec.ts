/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-description-list.data';
import { ArticleDescriptionList } from './article-description-list';

describe('components', () => {
    describe('molecules', () => {
        describe('article-description-list', () => {
            const mount = build(ArticleDescriptionList, { props: {} });

            it('should render an ArticleDescriptionList component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article-description-list ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleDescriptionList, { props });

                it(`should render an ArticleDescriptionList component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
