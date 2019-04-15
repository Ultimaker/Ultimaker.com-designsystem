/* eslint-disable max-nested-callbacks */
import ListSection from './list-section';
import { build } from 'vuenit';
import ViewportUtil from 'utils/viewport';
import Defaults from 'constants/defaults';

const baseProps = {
    type: 'ListSection',
    title: 'Title',
    limit: {
        smallScreen: 3,
        largeScreen: 6,
    },
    showAllLabel: 'Show all',
};

const cardProps = [
    {
        type: 'BusinessCard',
        title: 'Ultimaker',
        image: {
            type: 'CraftImage',
            desktopUrl: '/generator/svg/120/120',
            mobileUrl: '/generator/svg/120/120',
            originalUrl: '/generator/svg/120/120',
            aspectRatio: '1:1',
        },
        contentLink: {
            type: 'ContentLink',
            label: 'Visit website',
            url: 'https://ultimaker.com',

        },
        properties: [
            {
                type: 'Property',
                label: 'Showrooms',
                value: '5',

            },
        ],
    },
];

const cardCollection = [
    ... cardProps,
    ... cardProps,
    ... cardProps,
    ... cardProps,
    ... cardProps,
    ... cardProps,
    ... cardProps,
    ... cardProps,
];

const tooltipProps = {
    type: 'Tooltip',
    label: 'More info',
    icon: 'info',
    description: 'Preferred resellers stock the complete range of Ultimaker products, offer hardware and software expertise, all with excellent customer service – so you can be sure they are the right partner to help your business succeed.',
};

describe('components', () => {
    describe('molecules', () => {
        describe('list-section', () => {
            const mount = build(ListSection, {});

            const buildOptions = {
                props: {
                    ... baseProps,
                    cards: cardProps,
                    tooltip: tooltipProps,
                },
            };

            it('should render an list', () => {
                const vm = mount(buildOptions);

                const title = vm.$el.querySelector('.list-section__title');

                expect(title).toBeDefined();
                expect(title.innerText).toContain(baseProps.title);
                vm.$destroy();
            });

            it('should render an info link if "tooltip" is provided', () => {
                const vm = mount(buildOptions);
                const infoLink = vm.$el.querySelector('.list-section__info-link');

                expect(infoLink).toBeDefined();
                vm.$destroy();
            });

            it('should render a tooltip if link is triggered', (done) => {
                const vm = mount(buildOptions);

                vm.toggleTooltip();

                vm.$nextTick(() => {

                    const tooltip = vm.$el.querySelector('.section-tooltip');

                    expect(tooltip.innerText).toContain(tooltipProps.description);

                    done();
                    vm.$destroy();
                });

            });

            xit('should render a max amount of cards set at visible section', () => {
                const viewportUtil = new ViewportUtil();
                // @ts-ignore
                spyOnProperty(viewportUtil, 'screenWidth', 'get').and.returnValue(Defaults.breakpoints.tablet);

                const vm = mount({
                    props: {
                        ... baseProps,
                        cards: cardCollection,
                        tooltip: tooltipProps,
                    },
                });
                const visible = vm.$refs.visible;
                expect(visible.length).toBe(vm.showMax);
                vm.$destroy();
            });

            xit('should render all cards if "Show all" button is clicked', (done) => {
                const vm = mount({
                    props: {
                        ... baseProps,
                        cards: cardCollection,
                        tooltip: tooltipProps,
                    },
                });

                const hiddenSection = vm.$el.querySelector('.list-section--hidden');

                vm.showHidden();

                vm.$nextTick(() => {
                    const hiddenItems = hiddenSection.querySelectorAll('.list-section-list__item');
                    const showAllButton = hiddenSection.querySelectorAll('.list-section-list__button');

                    expect(hiddenItems.length).toBe(cardCollection.length - vm.showMax);
                    expect(showAllButton.length).toBe(0);
                    done();
                    vm.$destroy();
                });
            });

            it('should detect a new row', () => {
                const vm = mount(buildOptions);
                const topValue = 100;

                vm.isNewRow(topValue);
                expect(vm.isNewRow()).toBe(true);

                vm.$destroy();
            });

            it('should add a row', () => {
                const vm = mount(buildOptions);
                const topValue = 100;

                vm.rowIndex = 3;
                vm.addRow(topValue);
                expect(vm.rowIndex).toBe(4);

                vm.$destroy();
            });

        });
    });
});
