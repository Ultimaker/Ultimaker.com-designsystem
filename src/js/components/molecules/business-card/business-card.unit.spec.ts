/* eslint-disable max-nested-callbacks */
import BusinessCard from './business-card';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('business-card', () => {
            const mount = build(BusinessCard, {});

            it('should render a business card component with a title if "title" is provided', () => {
                const vm = mount({
                    props: {
                        title: 'Reseller name',
                        image: {
                            desktopUrl: '/generator/svg/120/120',
                        },
                        contentLink: {
                            label: 'Visit website',
                            url: 'https://google.com',
                        },
                    },
                });
                const objAttributes = vm.$el.attributes;
                const title = vm.$el.querySelector('.business-card__title');

                expect(objAttributes['class'].value).toContain('business-card');
                expect(title).toBeDefined();
                expect(title.innerText).toContain('Reseller name');
                vm.$destroy();
            });

            it('should NOT render a business card component if "title" is not provided', () => {
                const vm = mount({
                    props: {
                        title: 'undefined',
                        contentLink: {
                            label: 'Visit website',
                            url: 'https://google.com',
                        },
                        image: {
                            desktopUrl: '/generator/svg/120/120',
                        },
                    },
                });

                expect(vm.$el.length).toBeUndefined();
                vm.$destroy();
            });

            it('should render a href for the link of the card', () => {
                const vm = mount({
                    props: {
                        title: 'Reseller name',
                        contentLink: {
                            label: 'Visit website',
                            url: 'https://google.com',
                        },
                        image: {
                            desktopUrl: '/generator/svg/120/120',
                        },
                    },
                });
                const objAttributes = vm.$el.attributes;

                expect(objAttributes['href'].value).toMatch(/http/);
                vm.$destroy();
            });

            it('should render a showroom label if provided', () => {
                const vm = mount({
                    props: {
                        title: 'Reseller name',
                        contentLink: {
                            label: 'Visit website',
                            url: 'https://google.com',
                        },
                        image: {
                            desktopUrl: '/generator/svg/120/120',
                        },
                        properties: [
                            {
                                label: '2',
                                value: 'showrooms',
                            },
                        ],
                    },
                });
                const showroomLabel = vm.$el.querySelectorAll('.business-card__property');

                expect(showroomLabel).toBeDefined();
                expect(showroomLabel[0].textContent).toContain('2');
                vm.$destroy();
            });

            it('should NOT render a showroom label if not provided', () => {
                const vm = mount({
                    props: {
                        title: 'Reseller name',
                        contentLink: {
                            label: 'Visit website',
                            url: 'https://google.com',
                        },
                        image: {
                            desktopUrl: '/generator/svg/120/120',
                        },
                        properties: null,
                    },
                });
                const showroomLabel = vm.$el.querySelectorAll('.business-card__property');

                expect(showroomLabel.length).toBe(0);
                vm.$destroy();
            });
        });
    });
});
