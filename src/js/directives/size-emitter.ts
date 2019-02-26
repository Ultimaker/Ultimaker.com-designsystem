import Vue, { DirectiveOptions } from 'vue';
import debounce from 'lodash/debounce';
import ViewportUtility from 'utils/viewport';
import PublicEventService from 'plugins/public-event-service';

const viewportUtil = new ViewportUtility();
const sizeHandlerFactory = function (binding, vnode) {
    return () => {
        if (!vnode || !vnode.context) { return; }
        const height = vnode.elm.offsetHeight;

        if (vnode.context.__sizeEmitterHeight !== height) {
            PublicEventService.emit('size', { element: binding.value, size: height });
            vnode.context.__sizeEmitterHeight = height;
        }
    };
};

export class SizeEmitter implements DirectiveOptions {
    name:string = 'SizeEmitter';
    $root!: Vue;

    bind(el, binding, vnode) {
        if (!vnode || !vnode.context) {
            return;
        }

        vnode.context['sizeHandler'] = sizeHandlerFactory(binding, vnode);

        vnode.context.$on('emit-size', () => {
            if (!vnode.context) { return; }
            vnode.context['sizeHandler']();
        });

        viewportUtil.addResizeHandler(debounce(vnode.context['sizeHandler'], 50));
        viewportUtil.addScrollHandler(debounce(vnode.context['sizeHandler'], 50));
        el.addEventListener('transitionend', debounce(vnode.context['sizeHandler'], 50));

        vnode.context['sizeHandler']();
    }

    update(el, binding, vnode) {
        if (!vnode.context) { return; }
        debounce(vnode.context['sizeHandler'], 50);
    }

    componentUpdated(el, binding, vnode) {
        if (!vnode.context) { return; }
        debounce(vnode.context['sizeHandler'], 50);
    }

    unbind(el, binding, vnode) {
        if (this && this.$root) {
            this.$root.$emit('size', { element: binding.value, size: 0 });
        }
        if (!vnode.context) { return; }
        viewportUtil.removeResizeHandler(vnode.context['sizeHandler']);
        viewportUtil.removeScrollHandler(vnode.context['sizeHandler']);
    }
}
