import { DirectiveOptions } from 'vue';

export class ClickOutside implements DirectiveOptions {
    public name: string = 'ClickOutside';

    public bind(el: HTMLElement | any, binding, vnode): void {
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

        document.body.addEventListener('click', el.clickOutsideEvent);
    }

    public unbind(el: HTMLElement | any): void {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
}
