import 'babel-polyfill';
import { build } from 'vuenit';

import { data } from './data/article-video.data';
import { ArticleVideo } from './article-video';

describe('components', () => {
    describe('molecules', () => {
        describe('article-video', () => {
            const mount = build(ArticleVideo, { props: {} });

            it('should render an ArticleVideo component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        Object.keys(data).forEach((key) => {
            describe(`article-video ${key} props`, () => {
                const props = data[key];
                const mount = build(ArticleVideo, { props });

                it(`should render an ArticleVideo component with ${key} props`, () => {
                    const vm = mount();
                    expect(vm.$el).toBeDefined();
                    vm.$destroy();
                });
            });
        });
    });
});
