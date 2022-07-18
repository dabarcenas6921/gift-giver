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
    // Function to shuffle array
    const shuffle = (arr) => {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    const randomNames = shuffle(names);

    // create ordered pairings
    const pairings = [];

    for (let i = 0; i < randomNames.length; i++) {
      const giver = randomNames[i];
      const receiver =
        i === randomNames.length - 1 ? randomNames[0] : randomNames[i + 1]; //If we are at the end of the array, the last person gets the first person. Otherwise, pair every person to the person next to them.

      pairings.push(`${giver} is giving a gift to ${receiver}`);
    }

    return pairings;
  }
}

module.exports = GiftExchange;
