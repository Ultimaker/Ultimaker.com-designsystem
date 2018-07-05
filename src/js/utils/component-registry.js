class ComponentRegistry {
    constructor() {
        this.components = [];
    }

    registerComponent(component) {
        this.components.push(component);
    }

    install(Vue, options) {
        this.components
            .filter(c => typeof c.name === 'string')
            .forEach(c => Vue.component(c.name, c));
    }

    listComponents() {
        this.components.forEach(c => console.log(c.name));
    }
}

export default ComponentRegistry;
