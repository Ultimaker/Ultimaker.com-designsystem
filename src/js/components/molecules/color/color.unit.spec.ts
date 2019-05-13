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
                const vm = mount({
                    props: {
                        rgbHex: '#00ff00',
                        opacity: 0,
                    },
                });
                const swatchEls = vm.$el.querySelectorAll('.color__spec--swatch');

                expect(swatchEls.length).toEqual(1);
                vm.$destroy();
            });

            it('should contain a background color when specified', () => {
                const vm = mount({
                    props: {
                        rgbHex: '#00ffff',
                        opacity: 0,
                    },
                });
                const swatchElAttributes = vm.$el.querySelector('.color__spec--swatch').attributes;

                expect(swatchElAttributes['style'].value).toContain('background: rgb(0, 255, 255)');
                vm.$destroy();
            });

            it('should fix background color when getting an invalid color code from the backend', () => {
                const vm = mount({
                    props: {
                        rgbHex: '00ffff',
                        opacity: 0,
                    },
                });
                const swatchElAttributes = vm.$el.querySelector('.color__spec--swatch').attributes;

                expect(swatchElAttributes['style'].value).toContain('background: rgb(0, 255, 255)');
                vm.$destroy();
            });

            it('should calculate foreground with the highest contrast', () => {
                const vm = mount({
                    props: {
                        rgbHex: '#888888',
                        opacity: 0,
                    },
                });

                expect(vm.styleIcon['color']).toEqual('#000');
                vm.rgbHex = '#777777';
                expect(vm.styleIcon['color']).toEqual('#FFF');
            });
        });
    });
});
