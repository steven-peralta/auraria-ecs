import Loki from 'lokijs';
import World from './World';

const db = new Loki('store.db');

function newWorld(name, entities = [], systems = [], actionHandlers = []) {
  const world = new World(name, db, systems, actionHandlers);
  world.put(...entities);
  return world;
}

export default {
  db,
  newWorld,
};
