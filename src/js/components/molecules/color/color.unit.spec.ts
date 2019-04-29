import Color from './color';
import { build } from 'vuenit';

describe('components', () => {
    describe('atoms', () => {
        describe('color', () => {
            const mount = build(Color, {});

            it('should render a color component', () => {
                const vm = mount();
                const objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('color');
                vm.$destroy();
            });

            it('should render 1 swatch element', () => {
                const vm = mount();
                const swatchEls = vm.$el.querySelectorAll('.color__spec--swatch');

                expect(swatchEls.length).toEqual(1);
                vm.$destroy();
            });

            it('should contain a background color when specified', () => {
                const vm = mount({
                    props: {
                        background: 'red',
                    },
                });
                const swatchElAttributes = vm.$el.querySelector('.color__spec--swatch').attributes;

                expect(swatchElAttributes['style'].value).toContain('background: red');
                vm.$destroy();
            });

            it('should calculate foreground with the highest contrast', () => {
                const vm = mount({
                    propsData: {
                        background: '#888888',
                    },
                });

                expect(vm.styleIcon['color']).toEqual('black');
                vm.background = '#777777';
                expect(vm.styleIcon['color']).toEqual('white');

                vm.background = 'Nothing like a background';
                expect(vm.styleIcon['color']).toEqual('white');
            });
        });
    });
});
