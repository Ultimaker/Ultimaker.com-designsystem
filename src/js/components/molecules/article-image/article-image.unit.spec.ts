import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-image.data';
import { ArticleImage } from './article-image';

describe('components', () => {
    describe('molecules', () => {
        describe('article-image', () => {
            const mount = build(ArticleImage, { props: {} });

            it('should render an ArticleImage component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article-image ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleImage, { props });

                it(`should render an ArticleImage component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
