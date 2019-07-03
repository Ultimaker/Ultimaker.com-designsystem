/** @format */

import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/card-article.data';
import { CardArticle } from './card-article';

describe('components', () => {
    describe('molecules', () => {
        describe('card-article', () => {
            const mount = build(CardArticle, { props: {} });

            it('should render an CardArticle component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`card-article ${key} props`, () => {
                const props = data[key];
                const mount = build(CardArticle, { props });

                it(`should render an CardArticle component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
