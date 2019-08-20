import Vue, { DirectiveOptions } from 'vue';

export class ClickOutside implements DirectiveOptions {
    name: string = 'ClickOutside';

    bind(el: any, binding, vnode) {
        // eslint-disable-next-line no-param-reassign
        el.clickOutsideEvent = event => {
            // check that the click event was outside the element and its children
            if (!(el === event.target || el.contains(event.target))) {
                // and if it did, call method provided in the attribute value
                if (vnode.context) {
                    vnode.context[binding.expression](event);
                }
            }
        };

        document.body.addEventListener('click', el.clickOutsideEvent);
    }

    unbind(el: any) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
}
