export default class Filter {
  constructor() {
    this.allOfComponents = [];
    this.oneOfComponents = [];
    this.noneOfComponents = [];
    this.componentValueFilters = {};
    this.tagValues = [];
  }

  tags(values) {
    this.tagValues = values;
    return this;
  }

  allOf(components) {
    this.allOfComponents = this.allOfComponents.concat(components);
    return this;
  }

  oneOf(components) {
    this.oneOfComponents = this.oneOfComponents.concat(components);
    return this;
  }

  noneOf(components) {
    this.noneOfComponents = this.noneOfComponents.concat(components);
    return this;
  }

  where(name, criteria) {
    this.componentValueFilters[name] = criteria;
    return this;
  }
}
