/* eslint-disable max-nested-callbacks */
import ResellerCard from './reseller-card';
import {build} from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('reseller-card', () => {
            const mount = build(ResellerCard, {});

            it('should render a reseller card component with a title if "name" is provided', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name'
                        }
                    }),
                    objAttributes = vm.$el.attributes,
                    title = vm.$el.querySelector('.reseller-card__title');

                expect(objAttributes['class'].value).toContain('reseller-card');
                expect(title).toBeDefined();
                expect(title.innerText).toContain('Reseller name');
                vm.$destroy();
            });

            it('should render a badge if "preferred" is true', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            preferred: false
                        }
                    }),
                    badge = vm.$el.querySelector('.reseller-badge');

                expect(badge).toEqual(null);
                vm.$destroy();
            });

            it('should not render a badge if "preferred" is false', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            preferred: true
                        }
                    }),
                    badge = vm.$el.querySelector('.reseller-badge');

                expect(badge).not.toEqual(null);
                vm.$destroy();
            });

            it('should render a href for the link of the card', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            href: 'http://link-to-somewhere.com'
                        }
                    }),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['to'].value).toEqual('http://link-to-somewhere.com');
                vm.$destroy();
            });
        });
    });
});
