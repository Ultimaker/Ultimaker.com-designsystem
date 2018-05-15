import Vue from 'vue';
import debounce from 'lodash/debounce';
import ViewportUtil from 'utils/viewport';
import PublicEventService from 'services/public-event-service';


const viewportUtil = new ViewportUtil();
const sizeHandlerFactory = function(binding, vnode) {
    return () => {
        if (!vnode || !vnode.context) { return; }
        const height = vnode.elm.offsetHeight;

        if (vnode.context.__sizeEmitterHeight !== height) {
            PublicEventService.emit('size', {element: binding.value, size: height});
            vnode.context.__sizeEmitterHeight = height;
        }
    };
};

export default Vue.directive('size-emitter', {
    name: 'size-emitter',
    bind(el, binding, vnode) {
        vnode.context.sizeHandler = sizeHandlerFactory(binding, vnode);

        vnode.context.$on('emit-size', () => {
            vnode.context.sizeHandler();
        });
        viewportUtil.addResizeHandler(debounce(vnode.context.sizeHandler, 50));
        viewportUtil.addScrollHandler(debounce(vnode.context.sizeHandler, 50));
        el.addEventListener('transitionend', debounce(vnode.context.sizeHandler, 50));

        vnode.context.sizeHandler();
    },
    update(el, binding, vnode) {
        debounce(vnode.context.sizeHandler, 50);
    },
    componentUpdated(el, binding, vnode) {
        debounce(vnode.context.sizeHandler, 50);
    },
    unbind(el, binding, vnode) {
        if (this && this.$root) {
            this.$root.$emit('size', {element: binding.value, size: 0});
        }
        viewportUtil.removeResizeHandler(vnode.context.sizeHandler);
        viewportUtil.removeScrollHandler(vnode.context.sizeHandler);
    }
});
