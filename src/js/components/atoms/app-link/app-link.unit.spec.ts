/* eslint-disable max-nested-callbacks */
import AppLink from './app-link';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('app-link', () => {
            const mount = build(AppLink, {});

            it('should render a router-link specified by it\'s parent', () => {
                const vm = mount({
                    props: {
                        to: '/resellers/narwals',
                    },
                });
                const objAttributes = vm.$el.attributes;

                expect(objAttributes.to.value).toBe('/resellers/narwals');

                vm.$destroy();
            });

            it('should render a href specified by it\'s parent', () => {
                const vm = mount({
                    props: {
                        to: 'http://narwals.com',
                    },
                });
                const objAttributes = vm.$el.attributes;

                expect(objAttributes.href.value).toBe('http://narwals.com');

                vm.$destroy();
            });
        });
    });
});
