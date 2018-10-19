export default {
    name: 'event',
    bind(el, binding, vnode) {
        console.info('event directive bound: ', el, binding, vnode);
    }
};
