import Vue from 'vue';

const ClickOutside = Vue.directive('ClickOutside', {
    bind(el: HTMLElement | any, binding, vnode): void {
        // eslint-disable-next-line no-param-reassign
        el.clickOutsideEvent = (event: Event): void => {
            // check that the click event was outside the element and its children
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in the attribute value
                if (vnode.context) {
                    vnode.context[binding.expression](event);
                }
            }
        };

        document.body.addEventListener('mouseup', el.clickOutsideEvent);
        document.body.addEventListener('touchend', el.clickOutsideEvent);
    },
    unbind(el: HTMLElement | any): void {
        document.body.removeEventListener('mouseup', el.clickOutsideEvent);
        document.body.removeEventListener('touchend', el.clickOutsideEvent);
    },
});

export default ClickOutside;
