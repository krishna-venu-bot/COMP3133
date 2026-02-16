const express = require("express");
const router = express.Router();
const User = require("../models/User");

// POST: Insert user with validation
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();

    res.status(201).json({
      message: "User inserted successfully",
      data: savedUser
    });

  } catch (error) {
    res.status(400).json({
      message: "Validation Error",
      error: error.message
    });
  }
});

module.exports = router;
