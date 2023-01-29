import phoneNumbers from "./phoneNumbers";
import Observer from "../js/observer";

class printNumber extends phoneNumbers {
  printMessage() {
    return this.phoneNumbers[0];
  }
}

class printNumber extends Observer {
  update(state) {
    this.render(state);
  }
}

export default printNumber;
