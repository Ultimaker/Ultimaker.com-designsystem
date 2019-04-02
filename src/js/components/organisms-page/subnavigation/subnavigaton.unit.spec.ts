/* eslint-disable max-nested-callbacks */
import { build } from 'vuenit';
import SubNavigation from './subnavigation';

describe('components', () => {
    describe('organisms', () => {
        describe('subnavigation', () => {
            const props = {
                type: 'Subnavigation',
                items: [{
                    type: 'SubnavigationItem',
                    label: 'Ultimaker PLA',
                    url: '#',
                    image: {
                        type: 'Cimage',
                        url: 'https://images.ctfassets.net/yadj1kx9rmg0/wtrHxeu3zEoEce2MokCSi/cf6f68efdcf625fdc060607df0f3baef/quwowooybuqbl6ntboz3.jpg',
                        alt: 'An example image',
                        quality: 65,
                        radius: 0,
                        imageFormat: 'png',
                        resizeBehavior: 'fill',
                        focusArea: 'center',
                        backgroundColor: null,
                        mimeType: 'png',
                    },
                }],
            };

            const mount = build(SubNavigation, { props });

            it('it should mount', () => {
                const vm = mount();
                console.log(vm.$el);

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should not render the proper items', () => {
                const vm = mount();
                expect(vm.$el.childElementCount).toBe(1);

                if (vm.$el.hasChildNodes()) {
                    vm.$el.childNodes.forEach((child) => {
                        expect(['UL']).toContain(child.nodeName);
                        if (child.nodeName === 'UL') {
                            expect(child.childElementCount).toBe(props.items.length);
                        }
                    });
                }

                vm.$destroy();
            });
        });
    });
});
