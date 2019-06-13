import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/hero-article.data';
import { HeroArticle } from './hero-article';

describe('components', () => {
    describe('organisms', () => {
        describe('hero-article', () => {
            const mount = build(HeroArticle, { props: {} });

            it('should render an HeroArticle component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`hero-article ${key} props`, () => {
                const props = data[key];
                const mount = build(HeroArticle, { props });

                it(`should render an HeroArticle component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
