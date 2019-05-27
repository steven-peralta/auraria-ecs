import loki from 'lokijs';
import World from './World';

const db = new loki('store.db', {
    autosave: true,
    autosaveInterval: 300000 // autosave every 5 hours
});

export function newWorld(name, entities = []) {
    let lokiCollection = db.addCollection(name, {
        disableChangesApi: false,
        disableMeta: true,
        indices: ['id'],
        unique: ['id']
    });
    lokiCollection.insert(entities);
    return new World(name, lokiCollection);
}

export default db;