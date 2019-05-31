const express = require("express");
const dbMethods = require("../data/dbMethods");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const getDishes = await dbMethods.getDishes();
    if (getDishes) {
      res.status(200).json(getDishes);
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

module.exports = router;
