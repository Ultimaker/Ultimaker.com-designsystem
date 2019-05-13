/* eslint-disable max-nested-callbacks */
import { build } from 'vuenit';
import SubNavigationItem from './subnavigation-item';

describe('components', () => {
    describe('molecules', () => {
        describe('subnavigation item', () => {
            const props = {
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
            };

            const mount = build(SubNavigationItem, { props });

            it('it should mount', () => {
                const vm = mount();

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });
        });
    });
});
