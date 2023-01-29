// subject class
class sheilaTelephone {
  constructor() {
    // list of observers
    this.observers = [];
  }

  addObserver(observer) {
    this.observers.push(observer);
  }

  removeObserver(observer) {
    let index = this.observers.indexOf(observer);
    if (index > -1) {
      this.observers = this.observers.slice(index, 1);
    }
  }

  notify(dataInfo) {
    if (this.observers.length > 0) {
      this.observers.forEach((observer) => observer.update(dataInfo));
    }
  }
}

export default sheilaTelephone;
