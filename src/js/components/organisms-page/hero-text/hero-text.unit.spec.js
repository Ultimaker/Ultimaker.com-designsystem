/* eslint-disable max-nested-callbacks */
import RichText from './hero-text';
import { build } from 'vuenit';

describe('components', () => {
    describe('page', () => {
        const fixture = require('./hero-text.unit.spec.json');
        const mount = build(RichText, {});

        describe('hero-text', () => {
            it('should render the "hero-text" organism', () => {
                const buildOptions = {
                    props: { ...fixture.properties },
                };
                const vm = mount(buildOptions);
                const richText = vm.$el;
                const div = richText.querySelector('.contentsdiv');

                expect(richText).toBeDefined();
                expect(div.innerText).toEqual('somecontent');

                vm.$destroy();
            });
        });
    });
});
