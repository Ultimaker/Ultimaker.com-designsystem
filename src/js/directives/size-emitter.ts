import Vue, { DirectiveOptions } from 'vue';
import debounce from 'lodash/debounce';
import ViewportUtility from 'utils/viewport';

const viewportUtil = new ViewportUtility();
function SizeHandlerFactory(binding, vnode): Function {
    return (): void => {
        if (!vnode || !vnode.context) { return; }
        const height = vnode.elm.offsetHeight;

        if (vnode.context.__sizeEmitterHeight !== height) {
            vnode.context.$store.dispatch('sizeEmitter/SET_STORED_HEIGHT', { key: binding.value, value: height })
                .then()
                .catch((err): void => console.error(err));

            // eslint-disable-next-line no-param-reassign
            vnode.context.__sizeEmitterHeight = height;
        }
    };
}

export class SizeEmitter implements DirectiveOptions {
    public name: string = 'SizeEmitter';
    public $root!: Vue;

    public bind(el, binding, vnode): void {
        if (!vnode || !vnode.context) {
            return;
        }

        // eslint-disable-next-line no-param-reassign
        vnode.context.sizeHandler = SizeHandlerFactory(binding, vnode);

        vnode.context.$on('emit-size', (): void => {
            if (!vnode.context) { return; }
            vnode.context.sizeHandler();
        });

        viewportUtil.addResizeHandler(debounce(vnode.context.sizeHandler, 50));
        viewportUtil.addScrollHandler(debounce(vnode.context.sizeHandler, 50));
        el.addEventListener('transitionend', debounce(vnode.context.sizeHandler, 50));

        vnode.context.sizeHandler();
    }

    public static inserted(el, binding, vnode): void {
        if (!vnode.context) { return; }
        debounce(vnode.context.sizeHandler, 50);
    }

    public static update(el, binding, vnode): void {
        if (!vnode.context) { return; }
        debounce(vnode.context.sizeHandler, 50);
    }

    public static componentUpdated(el, binding, vnode): void {
        if (!vnode.context) { return; }
        debounce(vnode.context.sizeHandler, 50);
    }

    public unbind(el, binding, vnode): void {
        if (this && this.$root) {
            this.$root.$emit('size', { element: binding.value, size: 0 });
        }
        if (!vnode.context) { return; }
        viewportUtil.removeResizeHandler(vnode.context.sizeHandler);
        viewportUtil.removeScrollHandler(vnode.context.sizeHandler);
    }
}
