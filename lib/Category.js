'use strict';

const  SCHEMA = {
  name: "string"
};

class Category {
  constructor(inputObj) {
    if (validateInput(inputObj)) {
      this.valid = true;
      this.name = inputObj["name"];
    } else {
      this.valid = false;
    }
  }

  static validateInput(inputObj) {
    return Object.keys(SCHEMA).every((key) => {
      if ((key in inputObj) && (typeof inputObj[key] === SCHEMA[key])) return true;
      return false;
    });
  }
}