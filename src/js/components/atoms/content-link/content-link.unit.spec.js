/* eslint-disable max-nested-callbacks */
import ContentLink from './content-link';
import {build} from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('content-link', () => {
            const mount = build(ContentLink, {});

            it('should render a content-link specified by it\'s parent', () => {
                const vm = mount({
                        props: {
                            block: 'card'
                        }
                    }),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('card__link');
                vm.$destroy();
            });

            it('should not render a content-link specified by it\'s parent', () => {
                const vm = mount({
                        props: {
                            block: ''
                        }
                    }),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('link');
                vm.$destroy();
            });

            it('should render a content-link with a modifier class', () => {
                const vm = mount({
                        props: {
                            mod: 'large'
                        }
                    }),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('link--large');
                vm.$destroy();
            });

            it('should render an icon', () => {
                const vm = mount({
                        props: {
                            icon: 'download'
                        }
                    }),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('link--icon');
                vm.$destroy();
            });
        });
    });
});
