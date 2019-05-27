import nanoid from 'nanoid';

export default class Entity {
    constructor(...components) {
        this.id = nanoid(16);
        this.localComponents = {};
        this.components = components.reduce((obj, item) => {
            if (item.local)
                this.localComponents[item.name] = item;
            else
                obj[item.name] = item;

            return obj;
        }, {});
    }

    toString() {
        return JSON.stringify(this);
    }
}