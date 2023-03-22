const { Router } = require("express");
const Category = require("../models/Category");
const auth = require("../middleware/auth.middleware");
const router = Router();

router.post("/create", auth, async (req, res) => {
  console.log(req.body)
  try {
    const { label, limit } = req.body;
    const newCategory = new Category({
      label,
      limit,
      owner: req.user.userId,
    });

    await newCategory.save();

    res.status(201).json({ newCategory });
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так" });
  }
});

router.post("/getAll", auth, async (req, res) => {
  try {
    const categories = await Category.find({ owner: req.user.userId });

    let responseData = categories.map((element) => {
      return { id: element._id, label: element.label, limit: element.limit };
    });

    res.json(responseData);
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так, приходь пызніше" });
  }
});
router.post("/removeById", auth, async (req, res) => {
  try {
    await Category.deleteOne({ _id: req.body.id });

    res.status(200).json({ msg: "Видалено" });
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так, приходь пізніше" });
  }
});
router.post("/updateById", auth, async (req, res) => {
  try {
    const response = await Category.findOneAndUpdate(
      { _id: req.body.id },
      {
        label: req.body.label,
        limit: req.body.limit,
      }
    );

    res.status(200).json(response);
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так, приходь пызніше" });
  }
});

module.exports = router;
