import Overview from './overview';
import { build } from 'vuenit';

describe('components', () => {
    describe('page', () => {
        describe('overview', () => {
            const mount = build(Overview, {});

            it('should render an overview component', () => {
                const vm = mount({
                    props: {
                        title: 'I am a main title',
                        subtitle: 'I am a subtitle',
                        sections: [
                            {
                                cards: [
                                    {
                                        title: 'Title',
                                        image: {
                                            alt: 'alt',
                                            url: 'https://google.com',
                                        },
                                        contentLink: {
                                            icon: 'icon',
                                            label: 'label',
                                            url: 'url',
                                        },
                                    },
                                ],
                                title: 'title',
                                tooltip: {
                                    label: 'Tooltip',
                                    icon: 'icon',
                                    descritpion: 'I am a tooltip descrition',
                                },
                                limit: 4,
                                showAllLabel: 'Show All',
                            },
                        ],
                        ctas: [
                            {
                                label: 'I am label',
                                url: 'https://google.com/',
                            },
                            {
                                label: 'I am label',
                                url: 'https://google.com/',
                            },
                        ],
                    },
                });

                const objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(objAttributes.class.value).toContain('overview');
                vm.$destroy();
            });

            it('should not render a subtitle if not provided', () => {
                const vm = mount({
                    props: {
                        title: 'I am a main title',
                        sections: [
                            {
                                cards: [
                                    {
                                        title: 'Title',
                                        image: {
                                            alt: 'alt',
                                            url: 'https://google.com',
                                        },
                                        contentLink: {
                                            icon: 'icon',
                                            label: 'label',
                                            url: 'url',
                                        },
                                    },
                                ],
                                title: 'I am a card title',
                                tooltip: {
                                    label: 'I am a tooltip text',
                                    icon: 'icon',
                                    descritpion: 'I am a tooltip descrition',
                                },
                                limit: 4,
                                showAllLabel: 'Show All',
                            },
                        ],
                        ctas: [
                            {
                                label: 'I am label',
                                url: 'https://google.com/',
                            },
                            {
                                label: 'I am label',
                                url: 'https://google.com/',
                            },
                        ],
                    },
                });

                const subtitle = vm.$el.querySelector('.overview__subtitle');
                expect(subtitle).toBeNull();
                vm.$destroy();
            });
        });
    });
});
