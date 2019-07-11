import nanoid from 'nanoid';

export default class Aspect {
  constructor(filter) {
    this.world = null;
    this.filter = filter;
    this.entityView = this.queryEntities();
    this.componentView = this.queryComponents();
  }

  setWorld(world) {
    this.world = world;
  }

  queryEntities() {
    if (!this.world) throw new Error('entity query failed: aspect has no world to work with!');

    const query = {
      $and: [],
    };

    if (this.filter.allOfComponents.length > 0) {
      query.$and.push({
        components: { $contains: this.filter.allOfComponents },
      });
    }

    if (this.filter.oneOfComponents.length > 0) {
      query.$and.push({
        components: { $containsAny: this.filter.oneOfComponents },
      });
    }

    if (this.filter.noneOfComponents.length > 0) {
      query.$and.push({
        components: { $containsNone: this.filter.noneOfComponents },
      });
    }

    if (this.filter.tags.length > 0) {
      query.$and.push({
        tags: { $contains: this.filter.tags },
      });
    }

    const view = this.world.entityCollection.addDynamicView(nanoid(16));
    view.applyFind(query);
    return view;
  }

  queryComponents() {
    if (!this.world) throw new Error('component query failed: aspect has no world to work with!');
    const entityIds = this.entityView.data().reduce(doc => doc.id);
  }

  getEntities() {

  }
}
