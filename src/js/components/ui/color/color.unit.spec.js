/* eslint-disable max-nested-callbacks */
import Color from './color';

describe('components', () => {
    describe('ui', () => {
        describe('color', () => {
            it('should render a color component', () => {
                const vm = new Color({}).$mount(),
                    objAttributes = vm.$el.attributes;

                expect(objAttributes['class'].value).toContain('color');
                vm.$destroy();
            });

            it('should render 1 swatch element', () => {
                const vm = new Color({}).$mount(),
                    swatchEls = vm.$el.querySelectorAll('.color__spec--swatch');

                expect(swatchEls.length).toEqual(1);
                vm.$destroy();
            });

            it('should contain a background color when specified', () => {
                const vm = new Color({
                        propsData: {
                            background: 'red'
                        }
                    }).$mount(),
                    swatchElAttributes = vm.$el.querySelector('.color__spec--swatch').attributes;

                expect(swatchElAttributes['style'].value).toContain('background: red');
                vm.$destroy();
            });

            it('should calculate foreground with the highest contrast', () => {
                const vm = new Color({
                    propsData: {
                        background: '#888888'
                    }
                }).$mount();

                expect(vm.styleIcon['color']).toEqual('black');
                vm.background = '#777777';
                expect(vm.styleIcon['color']).toEqual('white');

                vm.background = 'Nothing like a background';
                expect(vm.styleIcon['color']).toEqual('white');

                expect(vm.lightness(null)).toEqual(0);
                expect(vm.lightness({})).toEqual(0);
            });
        });
    });
});
