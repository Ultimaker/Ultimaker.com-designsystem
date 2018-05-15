/* eslint-disable max-nested-callbacks */
import RichText from './rich-text';
import {build} from 'vuenit';

describe('components', () => {
    describe('page', () => {
        const fixture = require('./rich-text.unit.spec.json');
        const mount = build(RichText, {});

        describe('rich-text', () => {
            it('should render the "rich-text" organism', () => {
                const buildOptions = {
                        props: {...fixture.properties}
                    },
                    vm = mount(buildOptions),
                    richText = vm.$el,
                    div = richText.querySelector('.contentsdiv');

                expect(richText).toBeDefined();
                expect(div.innerText).toEqual('somecontent');

                vm.$destroy();
            });
        });
    });
});
