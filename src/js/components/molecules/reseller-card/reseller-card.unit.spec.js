/* eslint-disable max-nested-callbacks */
import ResellerCard from './reseller-card';
import {build} from 'vuenit';

fdescribe('components', () => {
    describe('molecules', () => {
        describe('reseller-card', () => {
            const mount = build(ResellerCard, {});

            it('should render a reseller card component with a title if "name" is provided', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            labels: {visitWebsite: 'Visit website'}
                        }
                    }),
                    objAttributes = vm.$el.attributes,
                    title = vm.$el.querySelector('.reseller-card__title');

                expect(objAttributes['class'].value).toContain('reseller-card');
                expect(title).toBeDefined();
                expect(title.innerText).toContain('Reseller name');
                vm.$destroy();
            });

            it('should NOT render a reseller card component if "name" is not provided', () => {
                const vm = mount({
                    props: {
                        name: null
                    }
                });

                expect(vm.$el.length).toBe(0);
                vm.$destroy();
            });

            it('should render a href for the link of the card', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            href: 'http://link-to-somewhere.com',
                            labels: {visitWebsite: 'Visit website'}
                        }
                    }),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['to'].value).toEqual('http://link-to-somewhere.com');
                vm.$destroy();
            });

            it('should render a showroom label if provided', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            href: 'http://link-to-somewhere.com',
                            labels: {visitWebsite: 'Visit website'},
                            showroomCount: 1
                        }
                    }),
                    showroomLabel = vm.$el.querySelectorAll('.reseller-card__showroom-count');

                expect(showroomLabel).toBeDefined();
                expect(showroomLabel[0].textContent).toContain('1');
                vm.$destroy();
            });

            it('should NOT render a showroom label if not provided', () => {
                const vm = mount({
                        props: {
                            name: 'Reseller name',
                            href: 'http://link-to-somewhere.com',
                            labels: {visitWebsite: 'Visit website'},
                            showroomCount: null
                        }
                    }),
                    showroomLabel = vm.$el.querySelectorAll('.reseller-card__showroom-count');

                expect(showroomLabel.length).toBe(0);
                vm.$destroy();
            });
        });
    });
});
