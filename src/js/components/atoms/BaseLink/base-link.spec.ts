/* eslint-disable max-nested-callbacks */
import BaseLink from './base-link';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('base-link', () => {
            const mount = build(BaseLink, {});

            it('should render a router-link specified by it\'s parent', () => {
                const vm = mount({
                    props: {
                        url: '/resellers/narwals',
                        label: 'narwal',
                    },
                });

                const objAttributes = vm.$el.attributes;

                expect(objAttributes.to.value).toBe('/resellers/narwals');

                vm.$destroy();
            });

            it('should render a href specified by it\'s parent', () => {
                const vm = mount({
                    props: {
                        url: 'http://narwals.com',
                        label: 'narwal',
                    },
                });
                const objAttributes = vm.$el.attributes;

                expect(objAttributes.href.value).toBe('http://narwals.com');

                vm.$destroy();
            });

            it('should render a specific modifier class', () => {
                const vm = mount({
                    props: {
                        url: 'http://narwals.com',
                        mod: 'narwal',
                        label: 'narwal',
                    },
                });

                const { classList } = vm.$el;
                const classListString = Array(classList).join();

                expect(classListString.includes('narwal')).toBeTruthy();

                vm.$destroy();
            });

            it('should render specific classes passed', () => {
                const vm = mount({
                    props: {
                        url: 'http://narwals.com',
                        block: 'narwal',
                        label: 'narwal',
                    },
                });

                const { classList } = vm.$el;
                const classListString = Array(classList).join();

                expect(classListString.includes('narwal')).toBeTruthy();

                vm.$destroy();
            });
        });
    });
});
