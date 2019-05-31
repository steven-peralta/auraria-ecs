import nanoid from 'nanoid';

export default class Aspect {
  constructor(world, filter) {
    this.world = world;
    this.filter = filter;
    this.entityView = this.queryEntities();
    this.componentView = this.queryComponents();
  }

  queryEntities() {
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

    const view = this.world.entityCollection.addDynamicView(nanoid(16));
    view.applyFind(query);
    return view;
  }

  queryComponents() {
    const query = {

    };
  }

  get entities() {

  }
}
