/* eslint-disable max-nested-callbacks */
import CtaBlock from './cta-block';
import { build } from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('cta-block', () => {
            const mount = build(CtaBlock, {});

            describe('should not render', () => {
                const buildOptions = {
                    props: {
                        ctas: [],
                    },
                };
                const vm = mount(buildOptions);

                it('should not render a "cta-block"', () => {
                    const ctaBlockButtons = vm.$el.childNodes.length;

                    expect(ctaBlockButtons).toBe(0);
                    vm.$destroy();
                });
            });

            describe('should render', () => {
                const buildOptions = {
                    props: {
                        ctas: [
                            {
                                type: 'ContentButton',
                                label: 'I am label',
                                url: 'https://google.com/',
                            },
                            {
                                type: 'ContentLink',
                                label: 'I am label',
                                url: 'https://google.com/',
                            },
                        ],
                    },
                };

                const vm = mount(buildOptions);

                it('should render a "cta-block" with ctas buttons', () => {
                    const ctaBlockButtons = vm.$el.childNodes.length;

                    expect(vm.$el).toBeDefined();
                    expect(ctaBlockButtons).toBeGreaterThanOrEqual(1);

                    vm.$destroy();
                });
            });
        });
    });
});
