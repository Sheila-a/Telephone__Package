import printNumber from "./printNumber.js";
import Observer from "../js/observer.js";

class dialNumber extends printNumber {
  dialMessage() {
    return `Now dialing ${this.printMessage}`;
  }
  update(state) {
    this.render(state);
  }
}

export default dialNumber;
