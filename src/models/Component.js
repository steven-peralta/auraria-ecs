export default class Component {
  constructor(name, values = {}, local = false) {
    this.name = name;
    this.local = local; // is this component going to be shared with the other party via network?
    this.values = values;
  }
}
