import printNumber from "./printNumber";
import Observer from "../js/observer";

class dialNumber extends printNumber {
  // const message = this.printMessage
  dialMessage() {
    return `Now dialing ${this.printMessage}`;
  }
}

class dialNumber extends Observer {
  update(state) {
    this.render(state);
  }
}

console.log(dialMessage());
export default dialNumber;
