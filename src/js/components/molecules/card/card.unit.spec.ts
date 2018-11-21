/* eslint-disable max-nested-callbacks */
import Card from './card';
import { build } from 'vuenit';

describe('components', (): void => {
    describe('molecules', (): void => {
        describe('card', (): void => {
            const fixture = require('./card.unit.spec.json');
            const mount = build(Card, {});

            describe('defaults', () => {
                it('should have empty properties by default', () => {
                    const vm = mount({});

                    expect(vm.card).toEqual({});
                    expect(vm.block).toBeDefined();

                    vm.$destroy();
                });
            });

            describe('should render', () => {
                const buildOptions = {
                    props: {
                        block: 'test',
                        card: fixture.card,
                    },
                };

                const vm = mount(buildOptions);
                const    card = vm.$el;
                const blockClass = card.attributes['class'];
                const img = card.querySelector('.card__image');
                const content = card.querySelector('.card__content');
                const title = card.querySelector('.card__headline');
                const description = card.querySelector('.card__description');
                const link = card.querySelector('.card__link');
                const taglist = card.querySelector('.card__taglist');

                it('should render a "card" molecule', () => {
                    expect(card).toBeDefined();
                });
                it('should render a defined "block" class', () => {
                    expect(blockClass.value).toContain(buildOptions.props.block);
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
                it('should render a description', () => {
                    expect(description.innerText).toEqual(fixture.card.description);
                });
                it('should render a link if specified', () => {
                    expect(link).toBeTruthy();
                });
                it('should render a tag list if specified', () => {
                    expect(taglist).toBeTruthy();
                });
                vm.$destroy();
            });
        });
    });
});
