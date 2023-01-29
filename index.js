import State from "./js/state.js";
import phoneNumbers from "./component/phoneNumbers.js";
import printNumber from "./component/printNumber.js";
import dialNumber from "./component/dialNumber.js";

// This is the state of our Telephone package instantiated from the State class
const TelephoneState = new State();

// This is the telephone list object instantiated from the phoneNumbers class
const UserPhoneNumbers = new phoneNumbers().addPhoneNumber(09034678110);

// This is the object created from the printNumber class which prints the phone Number
const printedNum = new printNumber();

// This is the object created from the dialNumber class which prints the dialing message and number
const dialedNum = new dialNumber();

// Two observers added
TelephoneState.addObserver(printedNum);
TelephoneState.addObserver(dialedNum);

// To perform initial render on load
printedNum.render(TelephoneState.get());
dialedNum.render(TelephoneState.get());
