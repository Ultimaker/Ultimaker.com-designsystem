/* eslint-disable max-nested-callbacks */
import ContentLink from './content-link';

describe('components', () => {
    describe('ui', () => {
        describe('content-link', () => {
            it('should render a content-link specified by it\'s parent', () => {
                const vm = new ContentLink({
                        propsData: {
                            block: 'card'
                        }
                    }).$mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('card__link');
                vm.$destroy();
            });

            it('should not render a content-link specified by it\'s parent', () => {
                const vm = new ContentLink({
                        propsData: {
                            block: ''
                        }
                    }).$mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('link');
                vm.$destroy();
            });

            it('should render a content-link with a modifier class', () => {
                const vm = new ContentLink({
                        propsData: {
                            mod: 'large'
                        }
                    }).$mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('link--large');
                vm.$destroy();
            });

            it('should render an icon', () => {
                const vm = new ContentLink({
                        propsData: {
                            icon: 'download'
                        }
                    }).$mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('link--icon');
                vm.$destroy();
            });
        });
    });
});
