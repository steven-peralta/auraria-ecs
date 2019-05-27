const Entity = require('../dist/auraria-ecs').Entity;
const Component = require('../dist/auraria-ecs').Component;
const World = require('../dist/auraria-ecs').World;

let Position = function(x, y) {
    return new Component('position', { x: x, y: y }, false)
};

let Sprite = function(sprite) {
    return new Component('sprite', { image: sprite }, true)
};

let entity1 = new Entity(
    Position(0, 0),
    Sprite('sprite1')
);

let entity2 = new Entity(
    Position(1, 0)
);

let entity3 = new Entity(
    Sprite('sprite2')
);

console.log(JSON.stringify(entity1, null, 4));