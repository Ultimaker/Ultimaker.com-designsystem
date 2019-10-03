/* eslint-disable max-nested-callbacks */
import { Icon } from '../icon';
import { build } from 'vuenit';

describe('components', (): void => {
    describe('atoms', (): void => {
        describe('icon', (): void => {
            const mount = build(Icon);

            it('should add an svg reference to the search icon', (done): void => {
                const vm = mount({
                    props: {
                        iconName: 'search',
                    },
                });

                vm.$nextTick((): void => {
                    const svgUse = vm.$el.querySelector('use');

                    expect(svgUse.getAttribute('xlink:href')).toContain('#icon-search');
                    expect(vm.iconClass).toEqual('icon--search');
                    vm.$destroy();
                    done();
                });
            });
        });
    });
});
