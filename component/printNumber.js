import phoneNumbers from "./phoneNumbers.js";
import Observer from "../js/observer.js";

class printNumber extends phoneNumbers {
  printMessage() {
    return this.phoneNumbers[0];
  }
  update(state) {
    this.render(state);
  }
}

export default printNumber;
