/* eslint-disable max-nested-callbacks */
import ContentLinkList from './content-link-list';
import {build} from 'vuenit';

describe('components', () => {
    describe('ui', () => {
        describe('content-link-list', () => {
            const mount = build(ContentLinkList, {});

            it('should have empty properties by default', () => {
                const vm = mount({});

                expect(vm.links).toEqual([]);
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should render a content-link-list', () => {
                const vm = mount({
                    props: {
                        block: 'test',
                        links: [{
                            title: 'test',
                            href: '#'
                        }]
                    }
                });

                expect(vm.$el.querySelectorAll('li').length).toEqual(1);
                vm.$destroy();
            });
        });
    });
});
