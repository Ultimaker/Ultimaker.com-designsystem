/* eslint-disable max-nested-callbacks */
import TagList from './tag-list';
import { build } from 'vuenit';

describe('components', (): void => {
    describe('molecules', (): void => {
        describe('tag-list', (): void => {
            const mount = build(TagList);

            it('should load template and render default contents', (): void => {
                const tags: string[] = ['Narwals'];

                const vm = mount({ props: { tags } });
                const taglist: HTMLElement = vm.$el;

                expect(taglist.nodeName).toEqual('UL');
                expect(taglist.children.length).toEqual(tags.length);

                vm.$destroy();
            });
        });
    });
});
