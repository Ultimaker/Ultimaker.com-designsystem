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

    install(Vue) {
        this.directives
            .filter(d => typeof d.name === 'string')
            .forEach(d => Vue.directive(d.name, d));
        this.components
            .filter(c => typeof c.name === 'string')
            .forEach(c => Vue.component(c.name, c));
    }

    listComponents() {
        this.components.forEach(c => console.info(c.name));
    }

    listDirectives() {
        this.directives.forEach(d => console.info(d.name));
    }
}

export default ComponentRegistry;
