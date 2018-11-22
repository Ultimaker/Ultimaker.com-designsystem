/* eslint-disable max-nested-callbacks */
import MaterialCard from './material-card';
import { build } from 'vuenit';

describe('components', (): void => {
    describe('molecules', (): void => {
        describe('material-card', (): void => {
            const fixture = require('./material-card.unit.spec.json');
            const mount = build(MaterialCard, {});

            describe('defaults', () => {
                it('should have empty properties by default', () => {
                    const vm = mount({});

                    console.log(vm);

                    expect(vm.card).toEqual({});

                    vm.$destroy();
                });
            });

            describe('should render', () => {
                const buildOptions = {
                    props: {
                        card: fixture.card,
                    },
                };

                const vm = mount(buildOptions);
                const    card = vm.$el;
                const blockClass = card.attributes['class'];
                const img = card.querySelector('.materials-card__image');
                const content = card.querySelector('.materials-card__content');
                const title = card.querySelector('.materials-card__headline');
                const description = card.querySelector('.materials-card__description');
                const link = card.querySelector('.materials-card__link');
                const taglist = card.querySelector('.materials-card__taglist');

                it('should render a "card" molecule', () => {
                    expect(card).toBeDefined();
                });

                it('should render an image if specified', () => {
                    expect(img).toBeTruthy();
                });
                it('should render a content block', () => {
                    expect(content).toBeTruthy();
                });
                it('should render a title', () => {
                    expect(title.innerText).toEqual(fixture.card.title);
                });

                it('should render a tag list if specified', () => {
                    expect(taglist).toBeTruthy();
                });
                vm.$destroy();
            });
        });
    });
});
