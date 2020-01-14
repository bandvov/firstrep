import { verify } from "jsonwebtoken";
const { Router } = require("express");
console.log(express);
const router = Router();
const User = require("../model/User");
const bcryptjs = require("bcryptjs");
const { check, validationResult } = require("express-validator");

router.post(
  "/register",
  [
    check("email", "enter email").isEmail(),
    check("password", "should be 6 characters long").isLength(6)
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "registatration data not correct"
        });
      }

      const { email, password } = req.body;
      const candidate = await User.findOne(email);

      if (candidate) {
        res.status(400).json({ message: "user olready exist" });
      }
      const hashedPassword = await bcryptjs.hash(password, 12);
      const user = new User({ email, password: hashedPassword });
      user.save();
      res.status(201).json({ message: "user sucessfully created" });
    } catch (e) {
      res.status(500).json({ message: "oops something went wrong" });
    }
  }
);
module.exports = router;
