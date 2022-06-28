const { BadRequestError } = require("../utils/errors");

class GiftExchange {
  static pairs(names) {
    if (names.length % 2 == 1) {
      throw new BadRequestError();
    }

    let randomPairs = [];
    //Random pairing...
    while (names.length) {
      let name1 = names.splice(Math.random() * names.length, 1);
      let name2 = names.splice(Math.random() * names.length, 1);
      let tuple = [name1[0], name2[0]];
      randomPairs.push(tuple);
    }
    return randomPairs;
  }

  static traditional(names) {
    let traditionalPairs = [];
    var name1 = names.splice(Math.random() * names.length, 1);
    let firstName = name1;
    var name2 = names.splice(Math.random() * names.length, 1);
    let giftString = `${name1} is giving a gift to ${name2}`;

    traditionalPairs.push(giftString);

    for (let i = 0; i < names.length - 1; i++) {
      name1 = name2;
      name2 = names.splice(Math.random() * names.length, 1);
      let giftString = `${name1} is giving a gift to ${name2}`;
      traditionalPairs.push(giftString);
    }

    giftString = `${name2} is giving a gift to ${firstName}`;

    traditionalPairs.push(giftString);
    return traditionalPairs;
  }
}

module.exports = GiftExchange;
