import sheilaTelephone from "./subject.js";

class State extends sheilaTelephone {
  constructor() {
    super();
    this.state = {};
  }

  // This method calls the update method on each observer.
  update(dataInfo = {}) {
    this.state = Object.assign(this.state, dataInfo);
    this.notify(this.state);
  }

  // This method gets the state.
  get() {
    return this.state;
  }
}
export default State;
