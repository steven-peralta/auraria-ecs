export default class Filter {
  constructor() {
    this.allOfComponents = [];
    this.oneOfComponents = [];
    this.noneOfComponents = [];
    this.componentValues = {};
    this.target = '';
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

  values(name) {
    this.componentValues[name] = {};
    this.target = name;
    return this;
  }

  equals(values) {
    this.componentValues[this.target] = {
      ...this.componentValues[this.target],
      equals: values,
    };
    return this;
  }

  equalsExact(values) {
    this.componentValues[this.target] = {
      ...this.componentValues[this.target],
      equalsExact: values,
    };
    return this;
  }

  notEquals(values) {
    this.componentValues[this.target] = {
      ...this.componentValues[this.target],
      notEquals: values,
    };
    return this;
  }

  notEqualsExact(values) {
    this.componentValues[this.target] = {
      ...this.componentValues[this.target],
      notEqualsExact: values,
    };
    return this;
  }
}
