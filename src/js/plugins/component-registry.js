import { UniqId } from './uniq-id';
import PortalVue from 'portal-vue';

class ComponentRegistry {
    constructor() {
        this.components = [];
        this.directives = [];
    }

    registerComponent(component) {
        this.components.push(component);
    }

    registerDirective(directive) {
        this.directives.push(directive);
    }

    install(vue) {
        vue.use(UniqId);
        vue.use(PortalVue);

        this.directives
            .filter(d => typeof d.name === 'string')
            .forEach(d => vue.directive(d.name, d));

        this.components
            .filter((c => typeof c.name === 'string' || (c.extendOptions && typeof c.extendOptions.name === 'string')))
            .forEach(c => vue.component(c.extendOptions ? c.extendOptions.name : c.name, c));
    }

    listComponents() {
        this.components.forEach(c => console.info(c.name));
    }

    listDirectives() {
        this.directives.forEach(d => console.info(d.name));
    }
}

export default ComponentRegistry;
