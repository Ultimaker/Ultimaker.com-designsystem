/* eslint-disable max-nested-callbacks */
import Tag from './tag';
import { build } from 'vuenit';

describe('components', (): void => {
    describe('molecules', (): void => {
        describe('tag', (): void => {
            const mount = build(Tag);

            it('should load template and render default contents', (): void => {
                const vm = mount({ props: { tag: 'Narwals' } });
                const tag: HTMLElement = vm.$el;

                expect(tag.nodeName).toEqual('LABEL');
                expect(tag.innerText).toEqual('Narwals');
                vm.$destroy();
            });
        });
    });
});
