const express = require("express");
const db = require("../data/db");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getAllDishes = await db("dishes");
    if (getAllDishes) {
      res.status(200).json(getAllDishes);
    } else {
      res
        .status(400)
        .json({ messsage: "Something went wrong when retrieving the dishes." });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong with this request (server error)."
    });
  }
});
