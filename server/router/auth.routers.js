const { Router } = require("express");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const router = Router();
const auth = require("../middleware/auth.middleware");

router.post(
  "/register",
  [
    check("email", "Некоректний email").isEmail(),
    check("password", "Мiнiмальнa довжина пароля 6 символів").isLength({
      min: 6,
    }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
        });
      }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({
          errors: [{ msg: "Такий користувач вже існує", param: "email" }],
        });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Кристувача створено" });
    } catch (e) {
      res.status(500).json({ message: "шось пішло не так" });
    }
  }
);

// auth/login
router.post(
  "/login",
  [
    check("email", "Введіть коректний email").normalizeEmail().isEmail(),
    check("password", "Введіть коректний пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: "Не коректні данні для входу",
        });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({
          errors: [{ msg: "Користувач не знайдений", param: "email" }],
        });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({
          errors: [
            {
              msg: "Не правильний пароль спробуйте знову",
              param: "password",
            },
          ],
        });
      }

      const token = jwt.sign({ userId: user._id }, config.get("key"), {
        expiresIn: "1h",
      });

      res.status(200).json({ token, userId: user.id });
    } catch (e) {
      res.status(500).json({ message: "Упс шось не так" });
    }
  }
);

router.post("/checkToken", auth, (req, res) => {
  res.json({ message: "Токен дійсний", param: true, isAuth: true });
});

module.exports = router;
