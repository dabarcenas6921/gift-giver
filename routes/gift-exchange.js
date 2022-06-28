const express = require("express");
const router = express.Router();
const GiftExchange = require("../models/gift-exchange");
const { BadRequestError } = require("../utils/errors");

const names = {
  names: [],
};

router.post("/pairs", (req, res, next) => {
  try {
    postNames = req.body.names;

    if (!postNames || postNames.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }
    console.log("Got names: ", req.body.names);

    const pairs = GiftExchange.pairs(postNames);

    res.status(200).json(pairs);
  } catch (err) {
    next(err);
  }
});

router.post("/traditional", (req, res, next) => {
  try {
    postNames = req.body.names;
    if (!postNames || postNames.length < 2) {
      return next(new BadRequestError("Invalid input"));
    }
    console.log("Got names: ", req.body.names);

    const traditional = GiftExchange.traditional(postNames);

    res.status(200).json(traditional);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
