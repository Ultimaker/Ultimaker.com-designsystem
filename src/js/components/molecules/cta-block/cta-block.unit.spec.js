/* eslint-disable max-nested-callbacks */
import CtaBlock from './cta-block';
import {build} from 'vuenit';

describe('components', () => {
    describe('molecules', () => {
        describe('cta-block', () => {
            const mount = build(CtaBlock);

            it('should render a "cta-block"', () => {
                const ctas = {button: {uri: '#', title: 'Narwals rule!'}};
                const vm = mount({ctas});

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
