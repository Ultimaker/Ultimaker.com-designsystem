/* eslint-disable max-nested-callbacks */
import FauxVerticalScroll from './faux-vertical-scroll';

describe('components', () => {
    describe('ui', () => {
        describe('faux-vertical-scroll', () => {
            it('should render a scrollbar', () => {
                const vm = new FauxVerticalScroll({}).$mount();

                expect(vm.$el).toBeDefined();
                vm.$destroy();
            });

            it('should update page positioning after drag with mouse', (done) => {
                const mouseUp = new window.MouseEvent('mouseup'),
                    mouseDown = new window.MouseEvent('mousedown'),
                    mouseMove = new window.MouseEvent('mousemove');

                const vm = new FauxVerticalScroll({}).$mount();

                vm.$el.addEventListener('mouseup', () => {
                    done();
                });

                vm.$el.dispatchEvent(mouseMove);
                vm.$el.dispatchEvent(mouseDown);
                vm.$el.dispatchEvent(mouseMove);
                vm.$el.dispatchEvent(mouseUp);
            });

            it('should update page positioning after dragging with touch', (done) => {
                const touchEnd = new window.TouchEvent('touchend'),
                    touchStart = new window.TouchEvent('touchstart'),
                    touchMove = new window.TouchEvent('touchmove');

                const vm = new FauxVerticalScroll({}).$mount();

                vm.$el.addEventListener('touchend', () => {
                    done();
                });


                vm.$el.dispatchEvent(touchMove);
                vm.$el.dispatchEvent(touchStart);
                vm.$el.dispatchEvent(touchMove);
                vm.$el.dispatchEvent(touchEnd);
            });
        });
    });
});
