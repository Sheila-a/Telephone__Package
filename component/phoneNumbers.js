class phoneNumbers {
  constructor() {
    this.phoneNumbers = [080334];
  }

  addPhoneNumber(phoneNumber) {
    this.phoneNumbers.push(phoneNumber);
  }

  removePhoneNumber(phoneNumber) {
    let index = this.phoneNumbers.indexOf(phoneNumber);
    if (index > -1) {
      this.phoneNumbers.slice(index, 1);
    }
  }

  dialPhoneNumber(phoneNumber) {
    const dial = this.phoneNumbers(phoneNumber);
    if (this.phoneNumbers.includes(dial)) {
      return `Dial ${dial}`;
    }
  }
}

export default phoneNumbers;
