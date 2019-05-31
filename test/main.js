const ecs = require('../dist/auraria-ecs');

const { store } = ecs;
const {
  Filter,
  Aspect,
  Entity,
  Component,
} = ecs.models;


const Position = function Position(x, y) {
  return new Component('position', { x, y }, false);
};

const Sprite = function Sprite(sprite) {
  return new Component('sprite', { sprite }, true);
};

const entity1 = new Entity([
  Position(0, 0),
  Sprite('sprite1'),
]);

const entity2 = new Entity([
  Position(0, 0),
  Sprite('sprite2'),
]);

const entity3 = new Entity([
  Position(0, 0),
  Sprite('sprite3'),
]);

const entity4 = new Entity([
  Position(0, 0),
  Sprite('sprite4'),
]);

const system1 = function System1(entities) {
  console.log(JSON.stringify(entities, null, 2));
};

const world1 = store.newWorld('world1', [entity1, entity2, entity3, entity4], [system1]);

entity3.components.position.values.x = 1000;
console.log(JSON.stringify(world1.getChanges(true), null, 2));
console.log(JSON.stringify(world1.getChanges(false), null, 2));

let aspect = new Aspect(world1, new Filter().allOf('position', 'sprite'));
