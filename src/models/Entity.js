import nanoid from 'nanoid';

export default class Entity {
  constructor(components = [], tags = [], autoUpdate = true, id) {
    this.id = id || nanoid(16);
    this.components = Object.assign({},
      ...components.map(component => ({ [component.name]: component })));
    this.tags = tags;
    this.autoUpdate = autoUpdate;
  }
}
