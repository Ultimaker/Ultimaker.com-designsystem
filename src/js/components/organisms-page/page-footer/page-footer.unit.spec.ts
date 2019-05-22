/* eslint-disable max-nested-callbacks */
import PageFooter from './page-footer';
import { build } from 'vuenit';

describe('components', () => {
    describe('layout', () => {
        describe('page-footer', () => {
            const data = require('./page-footer.unit.spec.json');
            const buildOptions = { props: { ...data } };
            const mount = build(PageFooter, { buildOptions });

            it('should render a page-footer element', () => {
                const vm = mount(buildOptions);
                const objAttributes = vm.$el.attributes;

                expect(vm.$el).toBeDefined();
                expect(objAttributes.class.value).toContain('footer');
                vm.$destroy();
            });
        });
    });
});
