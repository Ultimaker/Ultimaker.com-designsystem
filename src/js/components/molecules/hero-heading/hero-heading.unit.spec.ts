import 'babel-polyfill';
import { build } from 'vuenit';

import data from './data/hero-heading.data';
import HeroHeading from './hero-heading';

describe('components', () => {
    describe('molecules', () => {
        describe('hero-heading', () => {
            const mount = build(HeroHeading, { props: { } });

            it('should render an HeroHeading component', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });

        describe('hero heading default props', () => {
            const defaultProps = data('default');
            const mount = build(HeroHeading, { props: defaultProps });

            it('should render an hero heading component width default props', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();

                const titleElement = vm.$el.querySelector('.hero__title');
                expect(titleElement.innerText.trim()).toBe(defaultProps.title);

                const subtitleElement = vm.$el.querySelector('.hero__subtitle');
                expect(subtitleElement.innerText.trim()).toBe(defaultProps.subtitle);

                vm.$destroy();
            });
        });

        describe('hero heading title props', () => {
            const titleProps = data('title');
            const mount = build(HeroHeading, { props: titleProps });

            it('should render an hero heading component width title props', () => {
                const vm = mount();
                expect(vm.$el).toBeDefined();

                const titleElement = vm.$el.querySelector('.hero__title');
                expect(titleElement.innerText.trim()).toBe(titleProps.title);

                vm.$destroy();
            });
        });
    });
});
