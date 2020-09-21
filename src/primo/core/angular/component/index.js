export default class Component {
    static get list() {
        let tags = document.getElementsByTagName('*');
        let components = [];
        for (let tag of tags) {
            let tagName = tag.localName;
            if (/^prm-|primo-/.test(tagName)) {
                let component = { name: tagName, obj: angular.element(tag) };
                components.push(component);
            }
        }
        return components;
    }

    static element(componentName) {
        let el = this.list.filter((f) => f.name === componentName).map((m) => angular.element(m.obj[0]))
        return el && el.length > 0 ? el[0] : null;
    }

    static scope(componentName) {
        return this.element(componentName).scope();
    }

    static controller(componentName) {        
        let controllers = this.list.filter((f) => f.name === componentName).map((m) => angular.element(m.obj).controller(componentName));
        return controllers.length == 1 ? controllers[0] : null;        
    }

    static get(componentName) {
        return this.list.filter((f) => componentName === f.name).map(m => m.obj[0]);
    }
}