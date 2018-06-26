/* eslint-disable max-nested-callbacks */
import Examples from './examples';
import {build, component} from 'vuenit';

describe('components', () => {
    describe('page', () => {
        const fixture = require('./examples.unit.spec.json');
        const mount = build(Examples, {
            stubComponents: false
        });

        describe('examples', () => {
            it('should render the "examples" organism', () => {
                const buildOptions = {
                        props: {...fixture.properties}
                    },
                    vm = mount(buildOptions),
                    examples = vm.$el,
                    title = examples.querySelector('.examples__headline'),
                    cards = examples.querySelectorAll('.card');

                expect(examples).toBeDefined();
                expect(title.innerText).toEqual(buildOptions.props.title);
                expect(cards.length).toBe(3);

                vm.$destroy();
            });
        });
    });
});
