import db from './store';

export default class World {
    constructor(name, lokiCollection) {
        this.name = name;
        this.entities = lokiCollection;
    }

    delete(entity) {
        this.entities.delete
    }

    put(entity) {
        this.entities.insert(entity);
    }

    get changes() {
        return this._discardChangeMetadata(db.serializeChanges[this.name]);
    }

    _discardChangeMetadata(changes) {
        let newChanges = JSON.parse(changes); // shallow clone changes to prevent changing the original change log
        newChanges.forEach(change => {
            delete change.meta;
            delete change.$loki;
        });
        return JSON.stringify(newChanges);
    }

    _discardLocalComponents(entities) {
        let newEntities = JSON.parse(JSON.stringify(entities));
        newEntities.forEach(entity => {
            delete entity.localComponents;
        });
        return newEntities;
    }
}