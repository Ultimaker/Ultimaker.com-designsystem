/* eslint-disable max-nested-callbacks */
import TagList from './tag-list';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('tag-list', () => {
            const mount = build(TagList);

            it('should load template and render default contents', () => {
                const tags: object[] = [{title: 'Narwals'}];

                const vm = mount({ props: { tags } });
                const taglist: HTMLElement = vm.$el;

                expect(taglist.nodeName).toEqual('UL');
                expect(taglist.children.length).toEqual(tags.length);

                vm.$destroy();
            });
        });
    });
});
