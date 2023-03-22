const { Router } = require("express");
const Transaction = require("../models/Transactions");
const auth = require("../middleware/auth.middleware");
const { dateFormaterToType } = require("../service/date.service");

const router = Router();

router.post("/create", auth, async (req, res) => {
  try {
    const { categoryId, value, date, note } = req.body;

    const newTransaction = new Transaction({
      category: categoryId,
      value,
      date,
      note,
      owner: req.user.userId,
    });

    await newTransaction.save();

    res.status(201).json({ newTransaction });
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так" });
  }
});

router.post("/getByDate", auth, async (req, res) => {
  try {
    const transactions = await Transaction.find({ owner: req.user.userId });
    const activeDate = dateFormaterToType(req.body.date, "MM/YYYY");

    const filteredTransactionsByDate = transactions.filter(
      (element) => activeDate === dateFormaterToType(element.date, "MM/YYYY")
    );

    const response = filteredTransactionsByDate.map((element) => ({
      id: element._id,
      category: element.category,
      value: element.value,
      date: element.date,
    }));
    // const filteredTransactionsByDate = transactions.filter((element) => {
    //   if (activeDate === dateFormaterToType(element.date, "MM/YYYY")) {
    //     return ({
    //       id: element._id,
    //       value: element.value,
    //       date: element.value,
    //       note: element.note,
    //     });
    //   }
    // });

    // console.log(filteredTransactionsByDate);
    res.json(filteredTransactionsByDate);
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так, приходь пызніше" });
  }
});

router.post("/removeById", auth, async (req, res) => {
  console.log(req,'qwe')
  try {
    await Transaction.deleteOne({ _id: req.body.id });

    res.status(200).json({ msg: "Видалено" });
  } catch (e) {
    res.status(500).json({ message: "Щось пішло не так, приходь пізніше" });
  }
});

module.exports = router;
